"use client";

import { supabase } from "@/lib/supabase";

export type AdminCreds = { username: string; password: string };

const CREDS_ID = "default";

async function sha256(text: string): Promise<string> {
  const data = new TextEncoder().encode(text);
  const hash = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(hash))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

async function fetchRow(): Promise<{ username: string; password_hash: string } | null> {
  try {
    const { data, error } = await supabase
      .from("admin_credentials")
      .select("username, password_hash")
      .eq("id", CREDS_ID)
      .maybeSingle();
    if (error || !data) return null;
    return data;
  } catch {
    return null;
  }
}

/** Username for Settings prefill. Password is never returned (hashed in DB). */
export async function getAdminUsername(): Promise<string> {
  const row = await fetchRow();
  return row?.username ?? "";
}

export async function verifyAdminCredentials(
  username: string,
  password: string
): Promise<boolean> {
  const u = username.trim().toLowerCase();
  const row = await fetchRow();
  if (!row) return false;
  const hash = await sha256(password);
  return u === row.username.toLowerCase() && hash === row.password_hash;
}

/**
 * Save credentials to Supabase.
 * `currentPassword` is required to authorize the change.
 * If `newPassword` is empty, the existing password is kept.
 */
export async function saveAdminCreds(opts: {
  currentUsername: string;
  currentPassword: string;
  newUsername: string;
  newPassword?: string;
}): Promise<{ ok: boolean; message: string }> {
  const { currentUsername, currentPassword, newUsername } = opts;
  const newPassword = opts.newPassword?.trim() || "";

  if (!(await verifyAdminCredentials(currentUsername, currentPassword))) {
    return { ok: false, message: "Current password is incorrect." };
  }

  const passwordToSave = newPassword || currentPassword;
  const passwordHash = await sha256(passwordToSave);

  try {
    const { error } = await supabase.from("admin_credentials").upsert(
      {
        id: CREDS_ID,
        username: newUsername.trim(),
        password_hash: passwordHash,
        updated_at: new Date().toISOString(),
      },
      { onConflict: "id" }
    );
    if (error) throw error;
    return { ok: true, message: "Credentials updated and saved to Supabase." };
  } catch (e) {
    return {
      ok: false,
      message:
        e instanceof Error
          ? `Supabase save failed: ${e.message}. Run the SQL migration first.`
          : "Supabase save failed. Run the SQL migration first.",
    };
  }
}
