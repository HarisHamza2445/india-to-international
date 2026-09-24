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
  source?: "Landing Page" | "About Page" | "NEET PG Page" | "NEET UG Page" | "Predictors Page" | "Admin Manual";
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
  source: Lead["source"] | null;
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
    source: r.source ?? undefined,
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
    source: l.source ?? null,
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
    "Source Page",
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
    `"${l.source || "-"}"`,
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

// ── SEED DATA (used when Supabase colleges table is empty) ───────────────────
const SEED_COLLEGES: CollegeCutoff[] = [
  // ── NEET PG — AIQ Government ──
  { id: "s-pg-01", collegeName: "King Edward Memorial (KEM) Hospital, Mumbai", state: "Maharashtra", quota: "AIQ 50%", closingRank: 2840, domain: "NEET PG", branch: "MD General Medicine", annualFees: "₹1.48 L", bondPenalty: "₹10 L / 1 yr", stipend: "₹94,000/mo" },
  { id: "s-pg-02", collegeName: "Grant Government Medical College, Mumbai", state: "Maharashtra", quota: "AIQ 50%", closingRank: 7150, domain: "NEET PG", branch: "MD General Medicine", annualFees: "₹1.52 L", bondPenalty: "₹10 L / 1 yr", stipend: "₹92,000/mo" },
  { id: "s-pg-03", collegeName: "Government Medical College, Nagpur", state: "Maharashtra", quota: "AIQ 50%", closingRank: 13910, domain: "NEET PG", branch: "MD General Medicine", annualFees: "₹1.45 L", bondPenalty: "₹10 L / 1 yr", stipend: "₹88,000/mo" },
  { id: "s-pg-04", collegeName: "Government Medical College, Pune (Sassoon)", state: "Maharashtra", quota: "AIQ 50%", closingRank: 11200, domain: "NEET PG", branch: "MS Orthopaedics", annualFees: "₹1.45 L", bondPenalty: "₹10 L / 1 yr", stipend: "₹88,000/mo" },
  { id: "s-pg-05", collegeName: "Lokmanya Tilak Municipal Medical College, Mumbai", state: "Maharashtra", quota: "AIQ 50%", closingRank: 9800, domain: "NEET PG", branch: "MD Paediatrics", annualFees: "₹1.50 L", bondPenalty: "₹10 L / 1 yr", stipend: "₹91,000/mo" },
  { id: "s-pg-06", collegeName: "B.J. Medical College, Pune", state: "Maharashtra", quota: "State 50%", closingRank: 18500, domain: "NEET PG", branch: "MD General Medicine", annualFees: "₹1.45 L", bondPenalty: "₹10 L / 1 yr", stipend: "₹88,000/mo" },
  { id: "s-pg-07", collegeName: "Government Medical College, Aurangabad", state: "Maharashtra", quota: "State 50%", closingRank: 22000, domain: "NEET PG", branch: "MD Paediatrics", annualFees: "₹1.40 L", bondPenalty: "₹10 L / 1 yr", stipend: "₹85,000/mo" },
  { id: "s-pg-08", collegeName: "Maulana Azad Medical College, Delhi", state: "Delhi", quota: "AIQ 50%", closingRank: 1100, domain: "NEET PG", branch: "MD Radio-Diagnosis", annualFees: "₹1.20 L", bondPenalty: "Nil", stipend: "₹95,000/mo" },
  { id: "s-pg-09", collegeName: "Lady Hardinge Medical College, Delhi", state: "Delhi", quota: "AIQ 50%", closingRank: 3400, domain: "NEET PG", branch: "MD General Medicine", annualFees: "₹1.18 L", bondPenalty: "Nil", stipend: "₹95,000/mo" },
  { id: "s-pg-10", collegeName: "Safdarjung Hospital, Delhi (VMMC)", state: "Delhi", quota: "AIQ 50%", closingRank: 1950, domain: "NEET PG", branch: "MS General Surgery", annualFees: "₹1.22 L", bondPenalty: "Nil", stipend: "₹95,000/mo" },
  { id: "s-pg-11", collegeName: "Institute of Medical Sciences, BHU Varanasi", state: "Uttar Pradesh", quota: "AIQ 50%", closingRank: 4200, domain: "NEET PG", branch: "MD General Medicine", annualFees: "₹1.10 L", bondPenalty: "Nil", stipend: "₹90,000/mo" },
  { id: "s-pg-12", collegeName: "Jawaharlal Nehru Medical College, AMU Aligarh", state: "Uttar Pradesh", quota: "AIQ 50%", closingRank: 5800, domain: "NEET PG", branch: "MD Paediatrics", annualFees: "₹1.15 L", bondPenalty: "Nil", stipend: "₹88,000/mo" },
  { id: "s-pg-13", collegeName: "Government Medical College, Thiruvananthapuram", state: "Kerala", quota: "AIQ 50%", closingRank: 8900, domain: "NEET PG", branch: "MD General Medicine", annualFees: "₹1.30 L", bondPenalty: "₹5 L / 2 yr", stipend: "₹86,000/mo" },
  { id: "s-pg-14", collegeName: "Rajiv Gandhi Medical College, Thane", state: "Maharashtra", quota: "State 50%", closingRank: 26500, domain: "NEET PG", branch: "MD General Medicine", annualFees: "₹1.42 L", bondPenalty: "₹10 L / 1 yr", stipend: "₹84,000/mo" },
  { id: "s-pg-15", collegeName: "Government Medical College, Nanded", state: "Maharashtra", quota: "State 50%", closingRank: 30000, domain: "NEET PG", branch: "MS Orthopaedics", annualFees: "₹1.38 L", bondPenalty: "₹10 L / 1 yr", stipend: "₹82,000/mo" },
  // ── NEET PG — Deemed/Private ──
  { id: "s-pg-16", collegeName: "Kasturba Medical College, Manipal", state: "Karnataka", quota: "Deemed", closingRank: 15000, domain: "NEET PG", branch: "MD General Medicine", annualFees: "₹18.0 L", bondPenalty: "Nil", stipend: "₹60,000/mo" },
  { id: "s-pg-17", collegeName: "Amrita Institute of Medical Sciences, Coimbatore", state: "Tamil Nadu", quota: "Deemed", closingRank: 20000, domain: "NEET PG", branch: "MD Paediatrics", annualFees: "₹16.5 L", bondPenalty: "Nil", stipend: "₹55,000/mo" },
  { id: "s-pg-18", collegeName: "JSS Medical College, Mysuru", state: "Karnataka", quota: "Deemed", closingRank: 28000, domain: "NEET PG", branch: "MS General Surgery", annualFees: "₹14.0 L", bondPenalty: "Nil", stipend: "₹52,000/mo" },
  { id: "s-pg-19", collegeName: "Sri Ramachandra Medical College, Chennai", state: "Tamil Nadu", quota: "Deemed", closingRank: 32000, domain: "NEET PG", branch: "MD Radio-Diagnosis", annualFees: "₹17.5 L", bondPenalty: "Nil", stipend: "₹58,000/mo" },
  { id: "s-pg-20", collegeName: "D.Y. Patil Medical College, Pune", state: "Maharashtra", quota: "Deemed", closingRank: 40000, domain: "NEET PG", branch: "MD General Medicine", annualFees: "₹15.0 L", bondPenalty: "Nil", stipend: "₹50,000/mo" },
  // ── NEET PG — DNB Hospitals ──
  { id: "s-pg-21", collegeName: "Apollo Hospitals, Hyderabad (DNB)", state: "Telangana", quota: "DNB Hospital", closingRank: 12000, domain: "NEET PG", branch: "DNB General Medicine", annualFees: "Nil", bondPenalty: "Nil", stipend: "₹80,000/mo" },
  { id: "s-pg-22", collegeName: "Fortis Hospital, Gurgaon (DNB)", state: "Haryana", quota: "DNB Hospital", closingRank: 16000, domain: "NEET PG", branch: "DNB Cardiology", annualFees: "Nil", bondPenalty: "Nil", stipend: "₹75,000/mo" },
  { id: "s-pg-23", collegeName: "Narayana Health, Bangalore (DNB)", state: "Karnataka", quota: "DNB Hospital", closingRank: 22000, domain: "NEET PG", branch: "DNB Paediatrics", annualFees: "Nil", bondPenalty: "Nil", stipend: "₹70,000/mo" },
  { id: "s-pg-24", collegeName: "Ruby Hall Clinic, Pune (DNB)", state: "Maharashtra", quota: "DNB Hospital", closingRank: 28000, domain: "NEET PG", branch: "DNB General Medicine", annualFees: "Nil", bondPenalty: "Nil", stipend: "₹65,000/mo" },
  { id: "s-pg-25", collegeName: "Jehangir Hospital, Pune (DNB)", state: "Maharashtra", quota: "DNB Hospital", closingRank: 35000, domain: "NEET PG", branch: "DNB Orthopaedics", annualFees: "Nil", bondPenalty: "Nil", stipend: "₹62,000/mo" },

  // ── NEET UG — Government ──
  { id: "s-ug-01", collegeName: "AIIMS New Delhi", state: "Delhi", quota: "AIQ 100%", closingRank: 50, domain: "NEET UG", branch: "MBBS", annualFees: "₹1,628", bondPenalty: "Nil", stipend: "N/A" },
  { id: "s-ug-02", collegeName: "AIIMS Mumbai", state: "Maharashtra", quota: "AIQ 100%", closingRank: 200, domain: "NEET UG", branch: "MBBS", annualFees: "₹1,628", bondPenalty: "Nil", stipend: "N/A" },
  { id: "s-ug-03", collegeName: "JIPMER Puducherry", state: "Puducherry", quota: "AIQ 100%", closingRank: 450, domain: "NEET UG", branch: "MBBS", annualFees: "₹5,000", bondPenalty: "Nil", stipend: "N/A" },
  { id: "s-ug-04", collegeName: "Government Medical College, Nagpur", state: "Maharashtra", quota: "State 85%", closingRank: 9200, domain: "NEET UG", branch: "MBBS", annualFees: "₹38,000", bondPenalty: "₹10 L / rural", stipend: "N/A" },
  { id: "s-ug-05", collegeName: "Grant Government Medical College, Mumbai", state: "Maharashtra", quota: "State 85%", closingRank: 4800, domain: "NEET UG", branch: "MBBS", annualFees: "₹38,000", bondPenalty: "₹10 L / rural", stipend: "N/A" },
  { id: "s-ug-06", collegeName: "B.J. Medical College, Pune", state: "Maharashtra", quota: "State 85%", closingRank: 5500, domain: "NEET UG", branch: "MBBS", annualFees: "₹38,000", bondPenalty: "₹10 L / rural", stipend: "N/A" },
  { id: "s-ug-07", collegeName: "Maulana Azad Medical College, Delhi", state: "Delhi", quota: "AIQ 15%", closingRank: 750, domain: "NEET UG", branch: "MBBS", annualFees: "₹14,500", bondPenalty: "Nil", stipend: "N/A" },
  { id: "s-ug-08", collegeName: "King George's Medical University, Lucknow", state: "Uttar Pradesh", quota: "State 85%", closingRank: 7200, domain: "NEET UG", branch: "MBBS", annualFees: "₹52,000", bondPenalty: "₹5 L / rural", stipend: "N/A" },
  { id: "s-ug-09", collegeName: "Government Medical College, Aurangabad", state: "Maharashtra", quota: "State 85%", closingRank: 12000, domain: "NEET UG", branch: "MBBS", annualFees: "₹38,000", bondPenalty: "₹10 L / rural", stipend: "N/A" },
  { id: "s-ug-10", collegeName: "Seth G.S. Medical College, Mumbai", state: "Maharashtra", quota: "State 85%", closingRank: 3200, domain: "NEET UG", branch: "MBBS", annualFees: "₹38,000", bondPenalty: "₹10 L / rural", stipend: "N/A" },
  // ── NEET UG — Deemed/Private ──
  { id: "s-ug-11", collegeName: "Kasturba Medical College, Manipal", state: "Karnataka", quota: "Deemed", closingRank: 15000, domain: "NEET UG", branch: "MBBS", annualFees: "₹24.0 L", bondPenalty: "Nil", stipend: "N/A" },
  { id: "s-ug-12", collegeName: "D.Y. Patil Medical College, Pune", state: "Maharashtra", quota: "Management", closingRank: 80000, domain: "NEET UG", branch: "MBBS", annualFees: "₹22.0 L", bondPenalty: "Nil", stipend: "N/A" },
  { id: "s-ug-13", collegeName: "Bharati Vidyapeeth Medical College, Pune", state: "Maharashtra", quota: "Management", closingRank: 60000, domain: "NEET UG", branch: "MBBS", annualFees: "₹18.0 L", bondPenalty: "Nil", stipend: "N/A" },
  { id: "s-ug-14", collegeName: "Sri Ramachandra Medical College, Chennai", state: "Tamil Nadu", quota: "Deemed", closingRank: 25000, domain: "NEET UG", branch: "MBBS", annualFees: "₹21.5 L", bondPenalty: "Nil", stipend: "N/A" },
  { id: "s-ug-15", collegeName: "Amrita School of Medicine, Coimbatore", state: "Tamil Nadu", quota: "Deemed", closingRank: 30000, domain: "NEET UG", branch: "MBBS", annualFees: "₹20.0 L", bondPenalty: "Nil", stipend: "N/A" },

  // ── NEET MDS ──
  { id: "s-mds-01", collegeName: "Maulana Azad Institute of Dental Sciences, Delhi", state: "Delhi", quota: "AIQ 50%", closingRank: 180, domain: "NEET MDS", branch: "MDS Orthodontics", annualFees: "₹1.20 L", bondPenalty: "Nil", stipend: "₹50,000/mo" },
  { id: "s-mds-02", collegeName: "Government Dental College & Hospital, Mumbai", state: "Maharashtra", quota: "AIQ 50%", closingRank: 420, domain: "NEET MDS", branch: "MDS Oral Surgery", annualFees: "₹1.10 L", bondPenalty: "₹5 L / 1 yr", stipend: "₹48,000/mo" },
  { id: "s-mds-03", collegeName: "Government Dental College, Pune", state: "Maharashtra", quota: "State 50%", closingRank: 850, domain: "NEET MDS", branch: "MDS Pedodontics", annualFees: "₹1.05 L", bondPenalty: "₹5 L / 1 yr", stipend: "₹45,000/mo" },
  { id: "s-mds-04", collegeName: "Nair Hospital Dental College, Mumbai", state: "Maharashtra", quota: "State 50%", closingRank: 600, domain: "NEET MDS", branch: "MDS Periodontics", annualFees: "₹1.08 L", bondPenalty: "₹5 L / 1 yr", stipend: "₹47,000/mo" },
  { id: "s-mds-05", collegeName: "Manipal College of Dental Sciences", state: "Karnataka", quota: "Deemed", closingRank: 2000, domain: "NEET MDS", branch: "MDS Orthodontics", annualFees: "₹8.5 L", bondPenalty: "Nil", stipend: "₹35,000/mo" },
  { id: "s-mds-06", collegeName: "A.B. Shetty Memorial Institute of Dental Sciences", state: "Karnataka", quota: "Deemed", closingRank: 3500, domain: "NEET MDS", branch: "MDS Conservative Dentistry", annualFees: "₹7.0 L", bondPenalty: "Nil", stipend: "₹32,000/mo" },
];

export async function calculateAdmissionProbability(
  userRank: number,
  domain: "NEET PG" | "NEET UG" | "NEET MDS" = "NEET PG"
): Promise<PredictorResult[]> {
  const all = await getColleges();
  // If Supabase returned no data, fall back to built-in seed colleges
  const pool = all.length > 0 ? all : SEED_COLLEGES;
  const colleges = pool.filter((c) => c.domain === domain);

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
