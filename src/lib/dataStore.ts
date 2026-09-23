"use client";

import { supabase } from "@/lib/supabase";

export interface Lead {
  id: string;
  candidateName: string;
  parentName?: string;
  mobile: string;
  whatsapp: string;
  airRank: string;
  targetStateBranch: string;
  domain: "NEET PG" | "NEET UG" | "NEET MDS";
  mode: "In-Person (Swargate Desk)" | "Live Video / Phone";
  status: "New Lead" | "Contacted" | "Slot Confirmed" | "Audit Generated" | "Admission Confirmed";
  notes?: string;
  createdAt: string;
}

export interface Bulletin {
  id: string;
  badge: string;
  category: string;
  title: string;
  description: string;
  fullContent?: string;
  timestamp: string;
  active: boolean;
}

export interface CollegeCutoff {
  id: string;
  collegeName: string;
  state: string;
  quota: string;
  closingRank: number;
  domain: "NEET PG" | "NEET UG" | "NEET MDS";
  branch: string;
  annualFees: string;
  bondPenalty: string;
  stipend: string;
}

export interface PredictorResult {
  college: CollegeCutoff;
  probability: "HIGH" | "MODERATE" | "BORDERLINE";
  probabilityScore: number;
}

const LEADS_KEY = "itoi_leads_store";
const BULLETINS_KEY = "itoi_bulletins_store";
const COLLEGES_KEY = "itoi_colleges_store";

function isClient(): boolean {
  return typeof window !== "undefined";
}

function readLocal<T>(key: string, fallback: T): T {
  if (!isClient()) return fallback;
  try {
    const raw = localStorage.getItem(key);
    if (raw) return JSON.parse(raw) as T;
  } catch {}
  return fallback;
}

function writeLocal(key: string, value: unknown) {
  if (!isClient()) return;
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {}
}

function emit(name: string) {
  if (isClient()) window.dispatchEvent(new Event(name));
}

if (isClient()) {
  window.addEventListener("storage", (e) => {
    if (e.key === LEADS_KEY) window.dispatchEvent(new Event("itoi_leads_updated"));
    else if (e.key === BULLETINS_KEY) window.dispatchEvent(new Event("itoi_bulletins_updated"));
    else if (e.key === COLLEGES_KEY) window.dispatchEvent(new Event("itoi_colleges_updated"));
  });
}

type LeadRow = {
  id: string;
  candidate_name: string;
  parent_name: string | null;
  mobile: string;
  whatsapp: string;
  air_rank: string;
  target_state_branch: string;
  domain: Lead["domain"];
  mode: Lead["mode"];
  status: Lead["status"];
  notes: string | null;
  created_at: string;
};

type BulletinRow = {
  id: string;
  badge: string;
  category: string;
  title: string;
  description: string;
  full_content: string | null;
  timestamp: string;
  active: boolean;
};

type CollegeRow = {
  id: string;
  college_name: string;
  state: string;
  quota: string;
  closing_rank: number;
  domain: CollegeCutoff["domain"];
  branch: string;
  annual_fees: string;
  bond_penalty: string;
  stipend: string;
};

function mapLead(r: LeadRow): Lead {
  return {
    id: r.id,
    candidateName: r.candidate_name,
    parentName: r.parent_name ?? undefined,
    mobile: r.mobile,
    whatsapp: r.whatsapp,
    airRank: r.air_rank,
    targetStateBranch: r.target_state_branch,
    domain: r.domain,
    mode: r.mode,
    status: r.status,
    notes: r.notes ?? undefined,
    createdAt: r.created_at,
  };
}

function mapBulletin(r: BulletinRow): Bulletin {
  return {
    id: r.id,
    badge: r.badge,
    category: r.category,
    title: r.title,
    description: r.description,
    fullContent: r.full_content ?? undefined,
    timestamp: r.timestamp,
    active: r.active,
  };
}

function mapCollege(r: CollegeRow): CollegeCutoff {
  return {
    id: r.id,
    collegeName: r.college_name,
    state: r.state,
    quota: r.quota,
    closingRank: r.closing_rank,
    domain: r.domain,
    branch: r.branch,
    annualFees: r.annual_fees,
    bondPenalty: r.bond_penalty,
    stipend: r.stipend,
  };
}

function leadToRow(l: Lead): LeadRow {
  return {
    id: l.id,
    candidate_name: l.candidateName,
    parent_name: l.parentName ?? null,
    mobile: l.mobile,
    whatsapp: l.whatsapp,
    air_rank: l.airRank,
    target_state_branch: l.targetStateBranch,
    domain: l.domain,
    mode: l.mode,
    status: l.status,
    notes: l.notes ?? null,
    created_at: l.createdAt,
  };
}

function bulletinToRow(b: Bulletin): BulletinRow {
  return {
    id: b.id,
    badge: b.badge,
    category: b.category,
    title: b.title,
    description: b.description,
    full_content: b.fullContent ?? null,
    timestamp: b.timestamp,
    active: b.active,
  };
}

function collegeToRow(c: CollegeCutoff): CollegeRow {
  return {
    id: c.id,
    college_name: c.collegeName,
    state: c.state,
    quota: c.quota,
    closing_rank: c.closingRank,
    domain: c.domain,
    branch: c.branch,
    annual_fees: c.annualFees,
    bond_penalty: c.bondPenalty,
    stipend: c.stipend,
  };
}

// ── LEADS ──
export async function getLeads(): Promise<Lead[]> {
  try {
    const { data, error } = await supabase
      .from("leads")
      .select("*")
      .order("created_at", { ascending: false });
    if (error) throw error;
    const mapped = (data as LeadRow[]).map(mapLead);
    writeLocal(LEADS_KEY, mapped);
    return mapped;
  } catch {
    const local = readLocal<Lead[] | null>(LEADS_KEY, null);
    if (local) return local;
    return [];
  }
}

export async function addLead(
  lead: Omit<Lead, "id" | "createdAt" | "status">
): Promise<Lead> {
  const newLead: Lead = {
    ...lead,
    id: `LEAD-${Date.now().toString().slice(-4)}`,
    status: "New Lead",
    createdAt: new Date().toISOString().replace("T", " ").slice(0, 16),
  };
  const row = leadToRow(newLead);
  try {
    const { error } = await supabase.from("leads").insert(row);
    if (error) throw error;
  } catch {
    // offline / table missing → local only
  }
  const current = readLocal<Lead[]>(LEADS_KEY, []);
  writeLocal(LEADS_KEY, [newLead, ...current.filter((l) => l.id !== newLead.id)]);
  emit("itoi_leads_updated");
  return newLead;
}

export async function updateLeadStatus(id: string, status: Lead["status"]): Promise<void> {
  try {
    const { error } = await supabase.from("leads").update({ status }).eq("id", id);
    if (error) throw error;
  } catch {}
  const current = readLocal<Lead[]>(LEADS_KEY, []);
  writeLocal(
    LEADS_KEY,
    current.map((l) => (l.id === id ? { ...l, status } : l))
  );
  emit("itoi_leads_updated");
}

export async function deleteLead(id: string): Promise<void> {
  try {
    const { error } = await supabase.from("leads").delete().eq("id", id);
    if (error) throw error;
  } catch {}
  const current = readLocal<Lead[]>(LEADS_KEY, []);
  writeLocal(LEADS_KEY, current.filter((l) => l.id !== id));
  emit("itoi_leads_updated");
}

export async function exportLeadsCSV(): Promise<string> {
  const leads = await getLeads();
  const headers = [
    "Inquiry ID",
    "Candidate Name",
    "Parent Name",
    "Mobile",
    "WhatsApp",
    "AIR Rank",
    "Domain",
    "Mode",
    "Target State / Branch",
    "Status",
    "Created Date",
  ];
  const rows = leads.map((l) => [
    l.id,
    `"${l.candidateName}"`,
    `"${l.parentName || "-"}"`,
    l.mobile,
    l.whatsapp,
    `"${l.airRank}"`,
    l.domain,
    `"${l.mode}"`,
    `"${l.targetStateBranch}"`,
    l.status,
    l.createdAt,
  ]);
  return [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");
}

// ── BULLETINS ──
export async function getBulletins(): Promise<Bulletin[]> {
  try {
    const { data, error } = await supabase.from("bulletins").select("*");
    if (error) throw error;
    const mapped = (data as BulletinRow[]).map(mapBulletin);
    writeLocal(BULLETINS_KEY, mapped);
    return mapped;
  } catch {
    const local = readLocal<Bulletin[] | null>(BULLETINS_KEY, null);
    if (local) return local;
    return [];
  }
}

export async function addBulletin(bulletin: Omit<Bulletin, "id">): Promise<Bulletin> {
  const newBulletin: Bulletin = {
    ...bulletin,
    id: `notice-${Date.now().toString().slice(-4)}`,
  };
  try {
    const { error } = await supabase.from("bulletins").insert(bulletinToRow(newBulletin));
    if (error) throw error;
  } catch {}
  const current = readLocal<Bulletin[]>(BULLETINS_KEY, []);
  writeLocal(BULLETINS_KEY, [newBulletin, ...current.filter((b) => b.id !== newBulletin.id)]);
  emit("itoi_bulletins_updated");
  return newBulletin;
}

export async function updateBulletin(id: string, patch: Partial<Bulletin>): Promise<void> {
  const current = readLocal<Bulletin[]>(BULLETINS_KEY, []);
  const next = current.map((b) => (b.id === id ? { ...b, ...patch, id: b.id } : b));
  const updated = next.find((b) => b.id === id);
  if (updated) {
    try {
      const { error } = await supabase.from("bulletins").update(bulletinToRow(updated)).eq("id", id);
      if (error) throw error;
    } catch {}
  }
  writeLocal(BULLETINS_KEY, next);
  emit("itoi_bulletins_updated");
}

export async function deleteBulletin(id: string): Promise<void> {
  try {
    const { error } = await supabase.from("bulletins").delete().eq("id", id);
    if (error) throw error;
  } catch {}
  const current = readLocal<Bulletin[]>(BULLETINS_KEY, []);
  writeLocal(BULLETINS_KEY, current.filter((b) => b.id !== id));
  emit("itoi_bulletins_updated");
}

// ── COLLEGES ──
export async function getColleges(): Promise<CollegeCutoff[]> {
  try {
    const { data, error } = await supabase.from("colleges").select("*");
    if (error) throw error;
    const mapped = (data as CollegeRow[]).map(mapCollege);
    writeLocal(COLLEGES_KEY, mapped);
    return mapped;
  } catch {
    const local = readLocal<CollegeCutoff[] | null>(COLLEGES_KEY, null);
    if (local) return local;
    return [];
  }
}

export async function addCollege(col: Omit<CollegeCutoff, "id">): Promise<CollegeCutoff> {
  const newCol: CollegeCutoff = { ...col, id: `col-${Date.now().toString().slice(-4)}` };
  try {
    const { error } = await supabase.from("colleges").insert(collegeToRow(newCol));
    if (error) throw error;
  } catch {}
  const current = readLocal<CollegeCutoff[]>(COLLEGES_KEY, []);
  writeLocal(COLLEGES_KEY, [...current, newCol]);
  emit("itoi_colleges_updated");
  return newCol;
}

export async function deleteCollege(id: string): Promise<void> {
  try {
    const { error } = await supabase.from("colleges").delete().eq("id", id);
    if (error) throw error;
  } catch {}
  const current = readLocal<CollegeCutoff[]>(COLLEGES_KEY, []);
  writeLocal(COLLEGES_KEY, current.filter((c) => c.id !== id));
  emit("itoi_colleges_updated");
}

export async function calculateAdmissionProbability(
  userRank: number,
  domain: "NEET PG" | "NEET UG" | "NEET MDS" = "NEET PG"
): Promise<PredictorResult[]> {
  const colleges = (await getColleges()).filter((c) => c.domain === domain);

  return colleges.map((col) => {
    const diff = col.closingRank - userRank;
    let probability: "HIGH" | "MODERATE" | "BORDERLINE";
    let score: number;

    if (diff >= 1000) {
      probability = "HIGH";
      score = Math.min(99, Math.round(85 + (diff / 2000) * 10));
    } else if (diff >= -500 && diff < 1000) {
      probability = "MODERATE";
      score = Math.round(60 + (diff / 1500) * 20);
    } else {
      probability = "BORDERLINE";
      score = Math.max(25, Math.round(45 + (diff / 3000) * 20));
    }

    return {
      college: col,
      probability,
      probabilityScore: Math.max(10, Math.min(99, score)),
    };
  });
}
