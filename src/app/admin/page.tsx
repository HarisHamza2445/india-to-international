"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  addBulletin,
  addCollege,
  addLead,
  deleteBulletin,
  deleteCollege,
  deleteLead,
  exportLeadsCSV,
  getBulletins,
  getColleges,
  getLeads,
  updateBulletin,
  updateLeadStatus,
  type Bulletin,
  type CollegeCutoff,
  type Lead,
} from "@/lib/dataStore";
import {
  generateAndDownloadDossierPDF,
  type DossierData,
} from "@/lib/pdfGenerator";
import {
  BellIcon,
  CheckCircleIcon,
  ClipboardCheckIcon,
  CloseIcon,
  DatabaseIcon,
  DossierIcon,
  DownloadIcon,
  EyeIcon,
  EyeOffIcon,
  FileTextIcon,
  LockIcon,
  LogOutIcon,
  MenuIcon,
  PencilIcon,
  PlusIcon,
  SearchIcon,
  SquareChartIcon,
  TrashIcon,
  UserIcon,
  UsersIcon,
} from "@/components/icons";
import {
  getAdminUsername,
  saveAdminCreds,
  verifyAdminCredentials,
} from "@/lib/adminAuth";

const NAV_ITEMS: { id: Tab; label: string; icon: typeof UsersIcon; hint: string }[] = [
  { id: "overview", label: "Overview", icon: SquareChartIcon, hint: "Analytics & pipeline" },
  { id: "leads", label: "Leads CRM", icon: UsersIcon, hint: "Enquiries & follow-ups" },
  { id: "dossier", label: "Dossier Generator", icon: DossierIcon, hint: "Audit PDF studio" },
  { id: "bulletins", label: "Bulletins CMS", icon: FileTextIcon, hint: "Notices & advisories" },
  { id: "colleges", label: "Cutoff Matrix", icon: DatabaseIcon, hint: "College rank data" },
  { id: "settings", label: "Settings", icon: PencilIcon, hint: "Credentials & preferences" },
];

const STATUS_COLORS: Record<Lead["status"], string> = {
  "New Lead": "bg-blue-50 text-blue-700 border-blue-200",
  Contacted: "bg-amber-50 text-amber-700 border-amber-200",
  "Slot Confirmed": "bg-violet-50 text-violet-700 border-violet-200",
  "Audit Generated": "bg-emerald-50 text-emerald-700 border-emerald-200",
  "Admission Confirmed": "bg-green-50 text-green-800 border-green-200",
};

const ALL_STATUSES: Lead["status"][] = [
  "New Lead",
  "Contacted",
  "Slot Confirmed",
  "Audit Generated",
  "Admission Confirmed",
];

type Tab = "overview" | "leads" | "dossier" | "bulletins" | "colleges" | "settings";

// NAV_ITEMS references Tab — declared after type for clarity in file order
const DOMAIN_OPTIONS = ["All Domains", "NEET PG", "NEET UG", "NEET MDS"] as const;
const MODE_OPTIONS = ["All Modes", "In-Person (Swargate Desk)", "Live Video / Phone"] as const;

// ── Add / Edit Bulletin Form ──
function AddBulletinForm({ onDone, initial }: { onDone: () => void; initial?: Bulletin }) {
  const [badge, setBadge] = useState(initial?.badge ?? "");
  const [category, setCategory] = useState(initial?.category ?? "");
  const [title, setTitle] = useState(initial?.title ?? "");
  const [description, setDescription] = useState(initial?.description ?? "");
  const [fullContent, setFullContent] = useState(initial?.fullContent ?? "");
  const [timestamp] = useState(initial?.timestamp ?? "Just Now");
  const [active, setActive] = useState(initial?.active ?? true);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!badge || !title || !description) return;
    if (initial) {
      await updateBulletin(initial.id, { badge, category, title, description, fullContent, timestamp, active });
    } else {
      await addBulletin({ badge, category, title, description, fullContent, timestamp, active });
    }
    onDone();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Badge Label *</label>
          <input required value={badge} onChange={e => setBadge(e.target.value)} placeholder="e.g. MCC AIQ" className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 focus:border-blue-500 focus:outline-none" />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Category</label>
          <input value={category} onChange={e => setCategory(e.target.value)} placeholder="e.g. NEET PG 2025" className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 focus:border-blue-500 focus:outline-none" />
        </div>
      </div>
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Title *</label>
        <input required value={title} onChange={e => setTitle(e.target.value)} placeholder="Bulletin headline…" className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 focus:border-blue-500 focus:outline-none" />
      </div>
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Short Description *</label>
        <textarea required rows={2} value={description} onChange={e => setDescription(e.target.value)} placeholder="One-line summary for list view…" className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 focus:border-blue-500 focus:outline-none resize-none" />
      </div>
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Full Advisory Text (shown in modal)</label>
        <textarea rows={4} value={fullContent} onChange={e => setFullContent(e.target.value)} placeholder="Detailed notice content…" className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 focus:border-blue-500 focus:outline-none resize-none" />
      </div>
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Status</label>
        <select value={active ? "active" : "inactive"} onChange={e => setActive(e.target.value === "active")} className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 focus:border-blue-500 focus:outline-none">
          <option value="active">Active (shown on landing page)</option>
          <option value="inactive">Hidden</option>
        </select>
      </div>
      <div className="flex gap-3">
        <button type="submit" className="flex-1 rounded-xl bg-blue-600 py-2.5 text-sm font-bold text-white transition hover:bg-blue-700">{initial ? "Save Changes" : "Publish Bulletin"}</button>
        <button type="button" onClick={onDone} className="rounded-xl border border-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-600 transition hover:bg-slate-50">Cancel</button>
      </div>
    </form>
  );
}

// ── Add College Form ──
function AddCollegeForm({ onDone }: { onDone: () => void }) {
  const [collegeName, setCollegeName] = useState("");
  const [state, setState] = useState("Maharashtra");
  const [quota, setQuota] = useState("50% AIQ Central");
  const [closingRank, setClosingRank] = useState("");
  const [domain, setDomain] = useState<CollegeCutoff["domain"]>("NEET PG");
  const [branch, setBranch] = useState("General Medicine");
  const [annualFees, setAnnualFees] = useState("");
  const [bondPenalty, setBondPenalty] = useState("No Service Bond");
  const [stipend, setStipend] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!collegeName || !closingRank) return;
    await addCollege({ collegeName, state, quota, closingRank: parseInt(closingRank, 10), domain, branch, annualFees, bondPenalty, stipend });
    onDone();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">College Name *</label>
        <input required value={collegeName} onChange={e => setCollegeName(e.target.value)} placeholder="e.g. B.J. Govt Medical College, Pune" className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 focus:border-blue-500 focus:outline-none" />
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">State</label>
          <input value={state} onChange={e => setState(e.target.value)} className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 focus:border-blue-500 focus:outline-none" />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Quota</label>
          <input value={quota} onChange={e => setQuota(e.target.value)} className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 focus:border-blue-500 focus:outline-none" />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Closing Rank *</label>
          <input required type="number" value={closingRank} onChange={e => setClosingRank(e.target.value)} placeholder="e.g. 14250" className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 focus:border-blue-500 focus:outline-none" />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Domain</label>
          <select value={domain} onChange={e => setDomain(e.target.value as CollegeCutoff["domain"])} className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 focus:border-blue-500 focus:outline-none">
            <option value="NEET PG">NEET PG</option>
            <option value="NEET UG">NEET UG</option>
            <option value="NEET MDS">NEET MDS</option>
          </select>
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Branch / Speciality</label>
          <input value={branch} onChange={e => setBranch(e.target.value)} className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 focus:border-blue-500 focus:outline-none" />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Annual Fees</label>
          <input value={annualFees} onChange={e => setAnnualFees(e.target.value)} placeholder="₹1,44,000" className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 focus:border-blue-500 focus:outline-none" />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Bond / Penalty</label>
          <input value={bondPenalty} onChange={e => setBondPenalty(e.target.value)} className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 focus:border-blue-500 focus:outline-none" />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Stipend</label>
          <input value={stipend} onChange={e => setStipend(e.target.value)} placeholder="₹72,000/mo" className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 focus:border-blue-500 focus:outline-none" />
        </div>
      </div>
      <div className="flex gap-3">
        <button type="submit" className="flex-1 rounded-xl bg-blue-600 py-2.5 text-sm font-bold text-white transition hover:bg-blue-700">Add College</button>
        <button type="button" onClick={onDone} className="rounded-xl border border-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-600 transition hover:bg-slate-50">Cancel</button>
      </div>
    </form>
  );
}

// ── Add Manual Lead Form ──
function AddLeadForm({ onDone }: { onDone: () => void }) {
  const [form, setForm] = useState({
    candidateName: "",
    parentName: "",
    mobile: "",
    whatsapp: "",
    airRank: "",
    targetStateBranch: "",
    domain: "NEET PG" as Lead["domain"],
    mode: "In-Person (Swargate Desk)" as Lead["mode"],
    notes: "",
  });

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((p) => ({ ...p, [k]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.candidateName || !form.mobile) return;
    await addLead({
      candidateName: form.candidateName,
      parentName: form.parentName || undefined,
      mobile: form.mobile,
      whatsapp: form.whatsapp || form.mobile,
      airRank: form.airRank || "–",
      targetStateBranch: form.targetStateBranch || "General Clinical Seats",
      domain: form.domain,
      mode: form.mode,
      notes: form.notes || undefined,
    });
    onDone();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Candidate Name *</label>
          <input required value={form.candidateName} onChange={set("candidateName")} className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none" />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Parent / Guardian</label>
          <input value={form.parentName} onChange={set("parentName")} className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none" />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Mobile *</label>
          <input required value={form.mobile} onChange={set("mobile")} className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none" />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">WhatsApp</label>
          <input value={form.whatsapp} onChange={set("whatsapp")} placeholder="Defaults to mobile" className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none" />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">AIR Rank</label>
          <input value={form.airRank} onChange={set("airRank")} className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none" />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Target State / Branch</label>
          <input value={form.targetStateBranch} onChange={set("targetStateBranch")} className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none" />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Domain</label>
          <select value={form.domain} onChange={set("domain")} className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none">
            <option value="NEET PG">NEET PG</option>
            <option value="NEET UG">NEET UG</option>
            <option value="NEET MDS">NEET MDS</option>
          </select>
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Mode</label>
          <select value={form.mode} onChange={set("mode")} className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none">
            <option value="In-Person (Swargate Desk)">In-Person (Swargate Desk)</option>
            <option value="Live Video / Phone">Live Video / Phone</option>
          </select>
        </div>
      </div>
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Quick Notes</label>
        <textarea rows={2} value={form.notes} onChange={set("notes")} className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none resize-none" />
      </div>
      <div className="flex gap-3">
        <button type="submit" className="flex-1 rounded-xl bg-blue-600 py-2.5 text-sm font-bold text-white transition hover:bg-blue-700">Add Lead</button>
        <button type="button" onClick={onDone} className="rounded-xl border border-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-600 transition hover:bg-slate-50">Cancel</button>
      </div>
    </form>
  );
}

// ── Dossier Generator ──
function DossierGenerator() {
  const [data, setData] = useState<DossierData>({
    candidateName: "Dr. Vedika Kulkarni",
    airRank: "AIR 12,450",
    percentile: "98.42 %ile",
    domicileCategory: "MH / General",
    cycle: "NEET PG 2025–26 CYCLE",
    targetBranch: "General Medicine / Radio-Diagnosis",
  });

  const set = (k: keyof DossierData) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setData((p) => ({ ...p, [k]: e.target.value }));

  return (
      <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-2">
      <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-xs sm:p-6">
        <div className="mb-4 flex items-center gap-2">
          <DossierIcon className="h-5 w-5 text-blue-600" />
          <h2 className="text-base font-bold text-slate-900">Candidate Dossier Inputs</h2>
        </div>
        <div className="space-y-4">
          {([
            ["candidateName", "Candidate Name"],
            ["airRank", "All India Rank"],
            ["percentile", "NEET Percentile"],
            ["domicileCategory", "Domicile / Category"],
            ["cycle", "Admission Cycle"],
            ["targetBranch", "Target Branch"],
          ] as [keyof DossierData, string][]).map(([key, label]) => (
            <div key={key}>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">{label}</label>
              <input value={data[key]} onChange={set(key)} className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none" />
            </div>
          ))}
        </div>
        <button
          type="button"
          onClick={() => generateAndDownloadDossierPDF(data)}
          className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 text-sm font-bold text-white transition hover:bg-blue-700"
        >
          <DownloadIcon className="h-4 w-4" />
          Generate &amp; Download PDF
        </button>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-xs sm:p-6">
        <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Live Preview</p>
        <div className="mt-3 rounded-xl border border-slate-200 bg-white p-5">
          <span className="rounded bg-[#eaf2ff] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#0062ff]">{data.cycle}</span>
          <h3 className="mt-2 text-lg font-bold text-slate-900">{data.candidateName || "—"}</h3>
          <p className="text-xs text-slate-500">Target: {data.targetBranch || "—"}</p>
          <div className="mt-4 grid grid-cols-3 gap-3 text-center">
            {[
              ["All India Rank", data.airRank],
              ["Percentile", data.percentile],
              ["Domicile", data.domicileCategory],
            ].map(([label, val]) => (
              <div key={label} className="rounded-lg border border-slate-200 bg-slate-50 py-3">
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">{label}</p>
                <p className="mt-0.5 text-sm font-extrabold text-slate-900">{val || "–"}</p>
              </div>
            ))}
          </div>
        </div>
        <p className="mt-4 text-xs leading-relaxed text-slate-500">
          Output matches the landing-page sample report: 14-point seat-matrix audit, bond/stipend table, and choice-lock strategy — ready for print / PDF.
        </p>
      </div>
    </div>
  );
}

const SESSION_KEY = "itoi_admin_session";

export default function AdminPage() {
  const [authed, setAuthed] = useState(false);
  const [sessionReady, setSessionReady] = useState(false);
  const [username, setUsername] = useState("");
  const [pw, setPw] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [authError, setAuthError] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [tab, setTab] = useState<Tab>("overview");
  const [leads, setLeads] = useState<Lead[]>([]);
  const [bulletins, setBulletins] = useState<Bulletin[]>([]);
  const [colleges, setColleges] = useState<CollegeCutoff[]>([]);

  const [showAddBulletin, setShowAddBulletin] = useState(false);
  const [editingBulletin, setEditingBulletin] = useState<Bulletin | null>(null);
  const [showAddCollege, setShowAddCollege] = useState(false);
  const [showAddLead, setShowAddLead] = useState(false);
  const [expandedLeadId, setExpandedLeadId] = useState<string | null>(null);
  const [leadSearch, setLeadSearch] = useState("");
  const [domainFilter, setDomainFilter] = useState<string>("All Domains");
  const [modeFilter, setModeFilter] = useState<string>("All Modes");

  const refresh = async () => {
    const [l, b, c] = await Promise.all([getLeads(), getBulletins(), getColleges()]);
    setLeads(l);
    setBulletins(b);
    setColleges(c);
  };

  useEffect(() => {
    const t = window.setTimeout(() => {
      try {
        if (sessionStorage.getItem(SESSION_KEY) === "1") {
          setAuthed(true);
        }
      } catch {
        // sessionStorage unavailable
      }
      setSessionReady(true);
    }, 0);
    return () => window.clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!authed) return;
    const h = () => {
      void refresh();
    };
    const t = window.setTimeout(h, 0);
    window.addEventListener("itoi_leads_updated", h);
    window.addEventListener("itoi_bulletins_updated", h);
    window.addEventListener("itoi_colleges_updated", h);
    return () => {
      window.clearTimeout(t);
      window.removeEventListener("itoi_leads_updated", h);
      window.removeEventListener("itoi_bulletins_updated", h);
      window.removeEventListener("itoi_colleges_updated", h);
    };
  }, [authed]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const u = username.trim();
    if (!u || !pw) {
      setAuthError("Please enter both username and password.");
      return;
    }
    setAuthError("");
    const ok = await verifyAdminCredentials(u, pw);
    if (ok) {
      try {
        sessionStorage.setItem(SESSION_KEY, "1");
      } catch {
        // ignore
      }
      setAuthed(true);
    } else {
      setAuthError("Invalid username or password. Please try again.");
    }
  };

  const handleLogout = () => {
    try {
      sessionStorage.removeItem(SESSION_KEY);
    } catch {
      // ignore
    }
    setAuthed(false);
    setPw("");
    setAuthError("");
    setSidebarOpen(false);
    setTab("leads");
  };

  const goTab = (id: Tab) => {
    setTab(id);
    setSidebarOpen(false);
  };

  const handleExportCSV = async () => {
    const csv = await exportLeadsCSV();
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `itoi_leads_${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // ── Stats ──
  const newLeadsCount = leads.filter((l) => l.status === "New Lead").length;
  const confirmedCount = leads.filter((l) => l.status === "Admission Confirmed").length;
  const activeBulletins = bulletins.filter((b) => b.active).length;

  const filteredLeads = leads.filter((l) => {
    const q = leadSearch.trim().toLowerCase();
    const matchesQ =
      !q ||
      l.candidateName.toLowerCase().includes(q) ||
      l.mobile.includes(q) ||
      l.id.toLowerCase().includes(q) ||
      l.airRank.toLowerCase().includes(q) ||
      (l.parentName ?? "").toLowerCase().includes(q);
    const matchesDomain = domainFilter === "All Domains" || l.domain === domainFilter;
    const matchesMode = modeFilter === "All Modes" || l.mode === modeFilter;
    return matchesQ && matchesDomain && matchesMode;
  });

  const domainCounts = (["NEET PG", "NEET UG", "NEET MDS"] as const).map((d) => ({
    label: d,
    count: leads.filter((l) => l.domain === d).length,
  }));
  const modeCounts = [
    { label: "In-Person", count: leads.filter((l) => l.mode.startsWith("In-Person")).length },
    { label: "Video / Phone", count: leads.filter((l) => l.mode.startsWith("Live")).length },
  ];
  const maxDomain = Math.max(1, ...domainCounts.map((d) => d.count));
  const maxMode = Math.max(1, ...modeCounts.map((m) => m.count));
  const recentLeads = [...leads]
    .sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1))
    .slice(0, 5);

  // ── Login Screen ──
  if (!sessionReady) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-navy">
        <p className="text-sm font-semibold text-slate-400">Loading session…</p>
      </div>
    );
  }

  if (!authed) {
    return (
      <div className="min-h-screen bg-navy">
        <div className="grid min-h-screen lg:grid-cols-2">
          {/* Brand panel */}
          <div className="relative hidden overflow-hidden bg-navy lg:flex lg:flex-col lg:justify-between lg:p-12">
            <div
              className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-blue-600/20 blur-3xl"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -bottom-40 -left-24 h-[380px] w-[380px] rounded-full bg-emerald-500/10 blur-3xl"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.07]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.35) 1px, transparent 1px)",
                backgroundSize: "48px 48px",
              }}
              aria-hidden
            />

            <div className="relative z-10">
              <Image src="/itoilogo.png" alt="India To International" width={140} height={142} className="brightness-0 invert" />
              <p className="mt-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
                Counsellor Portal
              </p>
            </div>

            <div className="relative z-10 max-w-md">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-blue-200">
                <LockIcon className="h-3.5 w-3.5" />
                Restricted Access
              </div>
              <h1 className="text-3xl font-extrabold leading-tight text-white xl:text-[36px]">
                NEET Admission
                <br />
                Operations Desk
              </h1>
              <p className="mt-4 text-sm leading-relaxed text-slate-300/90">
                Manage counselling leads, publish bulletin advisories, run seat-matrix
                predictors, and generate candidate audit dossiers — all from one secure console.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-3">
                {[
                  ["Leads CRM", "Live"],
                  ["Dossier PDF", "1-Click"],
                  ["Cross-tab", "Sync"],
                ].map(([label, badge]) => (
                  <div key={label} className="rounded-xl border border-white/10 bg-white/5 px-3 py-3">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-blue-300">{badge}</p>
                    <p className="mt-1 text-xs font-semibold text-white">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            <p className="relative z-10 text-xs text-slate-400">
              India To International · Swargate, Pune · Navin Harjwani Desk
            </p>
          </div>

          {/* Form panel */}
          <div className="flex items-center justify-center bg-[#0b1a2e] px-4 py-12 sm:px-8 lg:bg-[#0b1a2e]">
            <div className="w-full max-w-[420px]">
              <div className="mb-8 text-center lg:hidden">
                <Image src="/itoilogo.png" alt="India To International" width={120} height={122} className="mx-auto brightness-0 invert" />
                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">
                  Counsellor Portal
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-7 shadow-2xl backdrop-blur-xl sm:p-9">
                <div className="mb-7">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/30">
                    <LockIcon className="h-5 w-5" />
                  </div>
                  <h2 className="text-xl font-extrabold text-white">Welcome back</h2>
                  <p className="mt-1.5 text-sm text-slate-400">
                    Sign in with your counsellor username and password.
                  </p>
                </div>

                <form onSubmit={handleLogin} className="space-y-5">
                  <div>
                    <label htmlFor="admin-username" className="mb-1.5 block text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Username
                    </label>
                    <div className="relative">
                      <UserIcon className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
                      <input
                        id="admin-username"
                        type="text"
                        autoComplete="username"
                        autoCapitalize="none"
                        spellCheck={false}
                        value={username}
                        onChange={(e) => {
                          setUsername(e.target.value);
                          setAuthError("");
                        }}
                        placeholder="admin"
                        className={`w-full rounded-xl border bg-white/5 py-3 pl-11 pr-4 text-sm text-white placeholder:text-white/30 focus:outline-none focus:ring-2 ${
                          authError
                            ? "border-red-500/50 focus:ring-red-500/30"
                            : "border-white/15 focus:border-blue-500/40 focus:ring-blue-500/30"
                        }`}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="admin-password" className="mb-1.5 block text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Password
                    </label>
                    <div className="relative">
                      <LockIcon className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
                      <input
                        id="admin-password"
                        type={showPw ? "text" : "password"}
                        autoComplete="current-password"
                        value={pw}
                        onChange={(e) => {
                          setPw(e.target.value);
                          setAuthError("");
                        }}
                        placeholder="••••••••"
                        className={`w-full rounded-xl border bg-white/5 py-3 pl-11 pr-12 text-sm text-white placeholder:text-white/30 focus:outline-none focus:ring-2 ${
                          authError
                            ? "border-red-500/50 focus:ring-red-500/30"
                            : "border-white/15 focus:border-blue-500/40 focus:ring-blue-500/30"
                        }`}
                      />
                      <button
                        type="button"
                        aria-label={showPw ? "Hide password" : "Show password"}
                        onClick={() => setShowPw((v) => !v)}
                        className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-lg text-slate-400 transition hover:bg-white/10 hover:text-white"
                      >
                        {showPw ? <EyeOffIcon className="h-4 w-4" /> : <EyeIcon className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>

                  {authError && (
                    <p className="rounded-lg border border-red-500/30 bg-red-500/10 px-3 py-2.5 text-xs font-medium text-red-300">
                      {authError}
                    </p>
                  )}

                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/25 transition hover:bg-blue-500"
                  >
                    Sign In to Dashboard
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden>
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>
                </form>
              </div>

              <p className="mt-6 text-center text-xs text-slate-500">
                <Link href="/" className="inline-flex items-center gap-1.5 text-blue-400 transition hover:text-blue-300 hover:underline">
                  ← Back to Landing Page
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const activeNav = NAV_ITEMS.find((n) => n.id === tab) ?? NAV_ITEMS[0];
  const pageTitle = activeNav.label;
  const pageHint = activeNav.hint;

  const sidebarNav = (
    <nav className="flex-1 space-y-1 px-3 py-4" aria-label="Admin sections">
      {NAV_ITEMS.map((item) => {
        const Icon = item.icon;
        const active = tab === item.id;
        return (
          <button
            key={item.id}
            type="button"
            onClick={() => goTab(item.id)}
            className={`group flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left transition ${
              active
                ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25"
                : "text-slate-300 hover:bg-white/5 hover:text-white"
            }`}
          >
            <span
              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition ${
                active ? "bg-white/15" : "bg-white/5 group-hover:bg-white/10"
              }`}
            >
              <Icon className="h-[18px] w-[18px]" />
            </span>
            <span className="min-w-0">
              <span className="block truncate text-sm font-bold">{item.label}</span>
              <span className={`block truncate text-[11px] ${active ? "text-blue-100/80" : "text-slate-500"}`}>
                {item.hint}
              </span>
            </span>
          </button>
        );
      })}
    </nav>
  );

  const sidebarFooter = (
    <div className="space-y-2 border-t border-white/10 px-3 py-4">
      <Link
        href="/"
        className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold text-slate-300 transition hover:bg-white/5 hover:text-white"
        onClick={() => setSidebarOpen(false)}
      >
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden>
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
        </span>
        View Site
      </Link>
      <button
        type="button"
        onClick={handleLogout}
        className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold text-slate-300 transition hover:bg-red-500/10 hover:text-red-300"
      >
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5">
          <LogOutIcon className="h-4 w-4" />
        </span>
        Sign Out
      </button>
    </div>
  );

  // ── Dashboard with sidebar shell ──
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Desktop sidebar */}
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-[264px] flex-col border-r border-white/5 bg-navy lg:flex">
        <div className="flex items-center gap-3 border-b border-white/10 px-5 py-5">
          <Image src="/itoilogo.png" alt="" width={79} height={80} className="h-10 w-10 rounded-lg brightness-0 invert object-contain" style={{ width: "auto", height: "auto" }} />
          <div className="min-w-0">
            <p className="truncate text-sm font-extrabold text-white">India To International</p>
            <p className="truncate text-[11px] font-semibold uppercase tracking-wider text-blue-300">Admin Console</p>
          </div>
        </div>
        {sidebarNav}
        {sidebarFooter}
      </aside>

      {/* Mobile sidebar */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true" aria-label="Admin menu">
          <button
            type="button"
            aria-label="Close menu"
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setSidebarOpen(false)}
          />
          <aside className="absolute inset-y-0 left-0 flex w-[280px] max-w-[85vw] flex-col bg-navy shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-4">
              <div className="flex items-center gap-2.5">
                <Image src="/itoilogo.png" alt="" width={79} height={80} className="h-8 w-8 rounded-md brightness-0 invert object-contain" style={{ width: "auto", height: "auto" }} />
                <span className="text-sm font-extrabold text-white">Admin Console</span>
              </div>
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setSidebarOpen(false)}
                className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-300 hover:bg-white/10 hover:text-white"
              >
                <CloseIcon className="h-5 w-5" />
              </button>
            </div>
            {sidebarNav}
            {sidebarFooter}
          </aside>
        </div>
      )}

      {/* Main column */}
      <div className="lg:pl-[264px]">
        <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
          <div className="flex items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-3.5">
            <div className="flex min-w-0 items-center gap-3">
              <button
                type="button"
                aria-label="Open menu"
                onClick={() => setSidebarOpen(true)}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-700 transition hover:bg-slate-50 lg:hidden"
              >
                <MenuIcon className="h-5 w-5" />
              </button>
              <div className="min-w-0">
                <h1 className="truncate text-base font-extrabold text-slate-900 sm:text-lg">{pageTitle}</h1>
                <p className="hidden truncate text-xs text-slate-500 sm:block">{pageHint}</p>
              </div>
            </div>
            <div className="flex shrink-0 items-center gap-2">
              <span className="hidden items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-[11px] font-bold text-blue-700 sm:inline-flex">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Live Store
              </span>
              <div className="hidden items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-1.5 sm:flex">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-navy text-[11px] font-bold text-white">
                  A
                </span>
                <span className="text-xs font-bold text-slate-800">admin</span>
              </div>
              <Link
                href="/"
                className="hidden rounded-xl border border-slate-200 px-3.5 py-2 text-xs font-semibold text-slate-600 transition hover:bg-slate-50 md:block"
              >
                View Site
              </Link>
              <button
                type="button"
                onClick={handleLogout}
                className="flex min-h-[40px] items-center gap-1.5 rounded-xl border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-600 transition hover:border-red-200 hover:bg-red-50 hover:text-red-600"
              >
                <LogOutIcon className="h-4 w-4" />
                <span className="hidden sm:inline">Sign Out</span>
              </button>
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-[1400px] px-4 py-6 pb-28 sm:px-6 lg:pb-6">
          {/* ── Stats Row ── */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 sm:grid-cols-4 lg:grid-cols-4">
            {[
              { label: "Total Leads", value: leads.length, icon: UsersIcon, iconClass: "bg-blue-50 text-blue-600" },
              { label: "New / Unread", value: newLeadsCount, icon: BellIcon, iconClass: "bg-amber-50 text-amber-600" },
              { label: "Confirmed Admissions", value: confirmedCount, icon: CheckCircleIcon, iconClass: "bg-green-50 text-green-600" },
              { label: "Active Bulletins", value: activeBulletins, icon: ClipboardCheckIcon, iconClass: "bg-violet-50 text-violet-600" },
            ].map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.label} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-xs sm:p-5">
                  <div className={`mb-2.5 flex h-9 w-9 items-center justify-center rounded-xl sm:mb-3 ${s.iconClass}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="text-xl font-extrabold text-slate-900 sm:text-2xl">{s.value}</p>
                  <p className="mt-0.5 text-[11px] font-medium leading-snug text-slate-500 sm:text-xs">{s.label}</p>
                </div>
              );
            })}
          </div>

        {/* ══ OVERVIEW TAB ══ */}
        {tab === "overview" && (
          <div className="mt-5 space-y-5">
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs">
                <h3 className="text-sm font-bold text-slate-900 mb-4">Leads by Domain</h3>
                <div className="space-y-3">
                  {domainCounts.map((d) => (
                    <div key={d.label}>
                      <div className="flex justify-between text-xs font-semibold text-slate-600 mb-1">
                        <span>{d.label}</span>
                        <span>{d.count}</span>
                      </div>
                      <div className="h-2 rounded-full bg-slate-100">
                        <div
                          className="h-2 rounded-full bg-blue-600 transition-all duration-500"
                          style={{ width: `${(d.count / maxDomain) * 100}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs">
                <h3 className="text-sm font-bold text-slate-900 mb-4">Consultation Mode Split</h3>
                <div className="space-y-3">
                  {modeCounts.map((m) => (
                    <div key={m.label}>
                      <div className="flex justify-between text-xs font-semibold text-slate-600 mb-1">
                        <span>{m.label}</span>
                        <span>{m.count}</span>
                      </div>
                      <div className="h-2 rounded-full bg-slate-100">
                        <div
                          className="h-2 rounded-full bg-emerald-500 transition-all duration-500"
                          style={{ width: `${(m.count / maxMode) * 100}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-5 grid grid-cols-2 gap-2 sm:gap-3">
                  {ALL_STATUSES.map((s) => (
                    <div key={s} className="min-w-0 rounded-lg border border-slate-100 bg-slate-50 px-2.5 py-2">
                      <p className="truncate text-[9px] font-bold uppercase tracking-wider text-slate-400 sm:text-[10px]">{s}</p>
                      <p className="text-base font-extrabold text-slate-900 sm:text-lg">{leads.filter((l) => l.status === s).length}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-sm font-bold text-slate-900">Recent Lead Stream</h3>
                <button
                  type="button"
                  onClick={() => goTab("leads")}
                  className="text-xs font-semibold text-blue-600 hover:underline"
                >
                  View all →
                </button>
              </div>
              {recentLeads.length === 0 && (
                <p className="py-6 text-center text-sm text-slate-400">No leads yet.</p>
              )}
              <div className="divide-y divide-slate-100">
                {recentLeads.map((l) => (
                  <div key={l.id} className="flex items-center justify-between gap-4 py-3">
                    <div className="min-w-0">
                      <p className="truncate text-sm font-bold text-slate-900">{l.candidateName}</p>
                      <p className="text-xs text-slate-500">{l.id} · {l.domain} · {l.airRank}</p>
                    </div>
                    <span className={`shrink-0 rounded-md border px-2 py-0.5 text-[11px] font-bold ${STATUS_COLORS[l.status]}`}>
                      {l.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ══ DOSSIER GENERATOR TAB ══ */}
        {tab === "dossier" && <DossierGenerator />}

        {/* ══ LEADS TAB ══ */}
        {tab === "leads" && (
          <div className="mt-5">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
              <h2 className="text-base font-bold text-slate-900 sm:text-lg">
                Leads &amp; Enquiries ({filteredLeads.length}{filteredLeads.length !== leads.length ? ` / ${leads.length}` : ""})
              </h2>
              <div className="flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  onClick={() => setShowAddLead(true)}
                  className="flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-xs font-bold text-white transition hover:bg-blue-700"
                >
                  <PlusIcon className="h-4 w-4" />
                  Add Lead
                </button>
                <button
                  type="button"
                  onClick={handleExportCSV}
                  className="flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-xs font-bold text-white transition hover:bg-slate-700"
                >
                  <DownloadIcon className="h-4 w-4" />
                  Export CSV
                </button>
              </div>
            </div>

            <div className="mb-4 flex flex-wrap items-center gap-3">
              <div className="relative min-w-[200px] flex-1">
                <SearchIcon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input
                  value={leadSearch}
                  onChange={(e) => setLeadSearch(e.target.value)}
                  placeholder="Search name, mobile, rank, ID…"
                  className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-9 pr-3 text-sm focus:border-blue-500 focus:outline-none"
                />
              </div>
              <select
                value={domainFilter}
                onChange={(e) => setDomainFilter(e.target.value)}
                className="max-w-[160px] rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-xs font-semibold text-slate-700 focus:outline-none"
              >
                {DOMAIN_OPTIONS.map((o) => <option key={o} value={o}>{o}</option>)}
              </select>
              <select
                value={modeFilter}
                onChange={(e) => setModeFilter(e.target.value)}
                className="max-w-[180px] rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-xs font-semibold text-slate-700 focus:outline-none"
              >
                {MODE_OPTIONS.map((o) => <option key={o} value={o}>{o}</option>)}
              </select>
            </div>

            {showAddLead && (
              <div className="mb-5 rounded-2xl border border-blue-100 bg-white p-4 shadow-sm sm:p-6">
                <h3 className="mb-4 text-sm font-bold text-slate-900">Manual In-Person / Phone Lead</h3>
                <AddLeadForm onDone={async () => { setShowAddLead(false); await refresh(); }} />
              </div>
            )}

            <div className="rounded-2xl border border-slate-200 bg-white shadow-xs overflow-hidden">
              {filteredLeads.length === 0 && (
                <p className="py-12 text-center text-sm text-slate-400">
                  {leads.length === 0
                    ? "No leads yet. They will appear here once candidates submit the booking form."
                    : "No leads match the current search / filters."}
                </p>
              )}

              {/* Desktop / tablet table */}
              {filteredLeads.length > 0 && (
                <div className="hidden overflow-x-auto lg:block">
                  <div className="min-w-[880px]">
                    <div className="grid grid-cols-[minmax(0,1fr)_110px_90px_170px_130px_64px] gap-3 border-b border-slate-100 bg-slate-50 px-5 py-3 text-[11px] font-bold uppercase tracking-wider text-slate-500">
                      <span>Candidate</span>
                      <span>Rank / Domain</span>
                      <span>Mode</span>
                      <span>Status</span>
                      <span>Date</span>
                      <span>Actions</span>
                    </div>

                    {filteredLeads.map((lead) => (
                      <div key={lead.id} className="border-b border-slate-100 last:border-0">
                        <div
                          className="grid grid-cols-[minmax(0,1fr)_110px_90px_170px_130px_64px] items-center gap-3 px-5 py-4 transition hover:bg-slate-50/60 cursor-pointer"
                          onClick={() => setExpandedLeadId(expandedLeadId === lead.id ? null : lead.id)}
                        >
                          <div className="min-w-0">
                            <p className="truncate text-sm font-bold text-slate-900">{lead.candidateName}</p>
                            <p className="mt-0.5 truncate text-xs text-slate-500">
                              {lead.id} · {lead.mobile}
                            </p>
                          </div>

                          <div className="min-w-0">
                            <p className="text-xs font-bold text-slate-800">{lead.airRank}</p>
                            <p className="text-[11px] text-slate-500">{lead.domain}</p>
                          </div>

                          <div className="min-w-0 truncate text-xs text-slate-600">{lead.mode.split(" ")[0]}</div>

                          <div className="min-w-0">
                            <select
                              value={lead.status}
                              onChange={async (e) => {
                                e.stopPropagation();
                                await updateLeadStatus(lead.id, e.target.value as Lead["status"]);
                                await refresh();
                              }}
                              onClick={(e) => e.stopPropagation()}
                              className={`max-w-full w-auto min-w-0 rounded-md border px-2 py-1 text-[11px] leading-tight font-bold focus:outline-none ${STATUS_COLORS[lead.status]}`}
                            >
                              {ALL_STATUSES.map((s) => (
                                <option key={s} value={s}>{s}</option>
                              ))}
                            </select>
                          </div>

                          <div className="min-w-0 truncate text-xs text-slate-500" title={lead.createdAt}>
                            {lead.createdAt}
                          </div>

                          <div className="flex items-center justify-end gap-1">
                            <button
                              type="button"
                              title="Delete Lead"
                              onClick={async (e) => {
                                e.stopPropagation();
                                if (confirm(`Delete lead for ${lead.candidateName}?`)) {
                                  await deleteLead(lead.id);
                                  await refresh();
                                }
                              }}
                              className="flex h-7 w-7 items-center justify-center rounded-lg text-slate-400 transition hover:bg-red-50 hover:text-red-500"
                            >
                              <TrashIcon className="h-4 w-4" />
                            </button>
                          </div>
                        </div>

                        {expandedLeadId === lead.id && (
                          <div className="mx-5 mb-4 rounded-xl border border-slate-200 bg-slate-50 p-4">
                            <div className="grid grid-cols-2 gap-3 text-xs sm:grid-cols-3">
                              {[
                                ["Parent/Guardian", lead.parentName || "–"],
                                ["WhatsApp", lead.whatsapp],
                                ["Target Branch", lead.targetStateBranch],
                                ["Mode", lead.mode],
                                ["Status", lead.status],
                                ["Enrolled", lead.createdAt],
                              ].map(([k, v]) => (
                                <div key={k}>
                                  <p className="font-bold uppercase tracking-wider text-slate-400">{k}</p>
                                  <p className="mt-0.5 text-slate-700">{v}</p>
                                </div>
                              ))}
                            </div>
                            {lead.notes && (
                              <div className="mt-3 border-t border-slate-200 pt-3">
                                <p className="mb-1 text-xs font-bold uppercase tracking-wider text-slate-400">Notes</p>
                                <p className="text-xs text-slate-600">{lead.notes}</p>
                              </div>
                            )}
                            <div className="mt-3 flex flex-wrap gap-2">
                              <a
                                href={`https://wa.me/${lead.whatsapp.replace(/\D/g, "")}?text=Hello%20${encodeURIComponent(lead.candidateName)}%2C%20this%20is%20India%20To%20International.%20Your%20counselling%20slot%20is%20confirmed!`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700 transition hover:bg-emerald-100"
                              >
                                WhatsApp Candidate
                              </a>
                              <select
                                value={lead.status}
                                onChange={async (e) => {
                                  await updateLeadStatus(lead.id, e.target.value as Lead["status"]);
                                  await refresh();
                                }}
                                className={`max-w-full w-auto rounded-lg border px-2.5 py-1.5 text-[11px] font-bold focus:outline-none ${STATUS_COLORS[lead.status]}`}
                              >
                                {ALL_STATUSES.map((s) => (
                                  <option key={s} value={s}>{s}</option>
                                ))}
                              </select>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Mobile cards */}
              {filteredLeads.length > 0 && (
                <div className="divide-y divide-slate-100 lg:hidden">
                  {filteredLeads.map((lead) => (
                    <div key={lead.id}>
                      <div
                        className="cursor-pointer px-4 py-4 transition hover:bg-slate-50/60"
                        onClick={() => setExpandedLeadId(expandedLeadId === lead.id ? null : lead.id)}
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div className="min-w-0">
                            <p className="truncate text-sm font-bold text-slate-900">{lead.candidateName}</p>
                            <p className="mt-0.5 truncate text-xs text-slate-500">
                              {lead.id} · {lead.mobile}
                            </p>
                            <div className="mt-1.5 flex flex-wrap items-center gap-1.5">
                              <span className={`rounded-md border px-2 py-0.5 text-[10px] font-bold ${STATUS_COLORS[lead.status]}`}>
                                {lead.status}
                              </span>
                              <span className="text-[11px] font-semibold text-slate-500">{lead.domain}</span>
                              <span className="text-[11px] text-slate-400">{lead.airRank}</span>
                            </div>
                          </div>
                          <button
                            type="button"
                            title="Delete Lead"
                            onClick={async (e) => {
                              e.stopPropagation();
                              if (confirm(`Delete lead for ${lead.candidateName}?`)) {
                                await deleteLead(lead.id);
                                await refresh();
                              }
                            }}
                            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-slate-400 transition hover:bg-red-50 hover:text-red-500"
                          >
                            <TrashIcon className="h-4 w-4" />
                          </button>
                        </div>
                      </div>

                      {expandedLeadId === lead.id && (
                        <div className="mx-4 mb-4 rounded-xl border border-slate-200 bg-slate-50 p-4">
                          <div className="grid grid-cols-2 gap-3 text-xs">
                            {[
                              ["Parent/Guardian", lead.parentName || "–"],
                              ["WhatsApp", lead.whatsapp],
                              ["Target Branch", lead.targetStateBranch],
                              ["Mode", lead.mode],
                              ["Status", lead.status],
                              ["Enrolled", lead.createdAt],
                            ].map(([k, v]) => (
                              <div key={k}>
                                <p className="font-bold uppercase tracking-wider text-slate-400">{k}</p>
                                <p className="mt-0.5 text-slate-700">{v}</p>
                              </div>
                            ))}
                          </div>
                          {lead.notes && (
                            <div className="mt-3 border-t border-slate-200 pt-3">
                              <p className="mb-1 text-xs font-bold uppercase tracking-wider text-slate-400">Notes</p>
                              <p className="text-xs text-slate-600">{lead.notes}</p>
                            </div>
                          )}
                          <div className="mt-3 flex flex-wrap gap-2">
                            <a
                              href={`https://wa.me/${lead.whatsapp.replace(/\D/g, "")}?text=Hello%20${encodeURIComponent(lead.candidateName)}%2C%20this%20is%20India%20To%20International.%20Your%20counselling%20slot%20is%20confirmed!`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700 transition hover:bg-emerald-100"
                            >
                              WhatsApp Candidate
                            </a>
                            <select
                              value={lead.status}
                              onChange={async (e) => {
                                await updateLeadStatus(lead.id, e.target.value as Lead["status"]);
                                await refresh();
                              }}
                              className={`max-w-full w-auto rounded-lg border px-2.5 py-1.5 text-[11px] font-bold focus:outline-none ${STATUS_COLORS[lead.status]}`}
                            >
                              {ALL_STATUSES.map((s) => (
                                <option key={s} value={s}>{s}</option>
                              ))}
                            </select>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* ══ BULLETINS TAB ══ */}
        {tab === "bulletins" && (
          <div className="mt-5">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
              <h2 className="text-base font-bold text-slate-900 sm:text-lg">
                Bulletins &amp; Advisories ({bulletins.length})
              </h2>
              <button
                type="button"
                onClick={() => { setEditingBulletin(null); setShowAddBulletin(true); }}
                className="flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-xs font-bold text-white transition hover:bg-blue-700"
              >
                <PlusIcon className="h-4 w-4" />
                Add Bulletin
              </button>
            </div>

            {(showAddBulletin || editingBulletin) && (
              <div className="mb-5 rounded-2xl border border-blue-100 bg-white p-4 shadow-sm sm:p-6">
                <h3 className="mb-4 text-sm font-bold text-slate-900">{editingBulletin ? "Edit Bulletin" : "New Bulletin"}</h3>
                <AddBulletinForm
                  key={editingBulletin?.id ?? "new"}
                  initial={editingBulletin ?? undefined}
                  onDone={async () => { setShowAddBulletin(false); setEditingBulletin(null); await refresh(); }}
                />
              </div>
            )}

            <div className="space-y-3">
              {bulletins.map((b) => (
                <div key={b.id} className="flex items-start justify-between gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-xs sm:p-5">
                  <div className="flex min-w-0 items-start gap-3">
                    <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${b.active ? "bg-emerald-100 text-emerald-600" : "bg-slate-100 text-slate-400"}`}>
                      <span className={`h-2 w-2 rounded-full ${b.active ? "bg-emerald-500" : "bg-slate-400"}`} />
                    </span>
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="rounded bg-blue-50 px-2 py-0.5 text-[11px] font-bold uppercase tracking-wider text-blue-700">{b.badge}</span>
                        <span className="text-xs text-slate-500">{b.category}</span>
                        <span className="text-xs text-slate-400">{b.timestamp}</span>
                      </div>
                      <p className="text-sm font-bold text-slate-900">{b.title}</p>
                      <p className="mt-0.5 text-xs text-slate-500 line-clamp-2">{b.description}</p>
                    </div>
                  </div>
                  <div className="flex shrink-0 items-center gap-1">
                    <button
                      type="button"
                      title="Edit"
                      onClick={() => { setShowAddBulletin(false); setEditingBulletin(b); }}
                      className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 transition hover:bg-blue-50 hover:text-blue-600"
                    >
                      <PencilIcon className="h-4 w-4" />
                    </button>
                    <button
                      type="button"
                      title="Delete"
                      onClick={async () => {
                        if (confirm("Delete this bulletin?")) {
                          await deleteBulletin(b.id);
                          await refresh();
                        }
                      }}
                      className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 transition hover:bg-red-50 hover:text-red-500"
                    >
                      <TrashIcon className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
              {bulletins.length === 0 && (
                <p className="py-10 text-center text-sm text-slate-400">No bulletins yet. Add one to display it on the landing page.</p>
              )}
            </div>
          </div>
        )}

        {/* ══ COLLEGES TAB ══ */}
        {tab === "colleges" && (
          <div className="mt-5">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
              <h2 className="text-base font-bold text-slate-900 sm:text-lg">
                College Cutoff Data ({colleges.length})
              </h2>
              <button
                type="button"
                onClick={() => setShowAddCollege(true)}
                className="flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-xs font-bold text-white transition hover:bg-blue-700"
              >
                <PlusIcon className="h-4 w-4" />
                Add College
              </button>
            </div>

            {showAddCollege && (
              <div className="mb-5 rounded-2xl border border-blue-100 bg-white p-4 shadow-sm sm:p-6">
                <h3 className="mb-4 text-sm font-bold text-slate-900">Add College Entry</h3>
                <AddCollegeForm onDone={async () => { setShowAddCollege(false); await refresh(); }} />
              </div>
            )}

            <div className="rounded-2xl border border-slate-200 bg-white shadow-xs overflow-x-auto">
              <table className="w-full min-w-[700px] text-sm">
                <thead>
                  <tr className="border-b border-slate-100 bg-slate-50 text-[11px] font-bold uppercase tracking-wider text-slate-500">
                    <th className="px-5 py-3 text-left">College</th>
                    <th className="px-4 py-3 text-left">Domain</th>
                    <th className="px-4 py-3 text-left">Quota</th>
                    <th className="px-4 py-3 text-right">Closing Rank</th>
                    <th className="px-4 py-3 text-left">Fees</th>
                    <th className="px-4 py-3 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {colleges.map((c) => (
                    <tr key={c.id} className="border-b border-slate-100 last:border-0 hover:bg-slate-50/60 transition">
                      <td className="px-5 py-3.5">
                        <p className="font-semibold text-slate-900">{c.collegeName}</p>
                        <p className="text-[11px] text-slate-500">{c.state} · {c.branch}</p>
                      </td>
                      <td className="px-4 py-3.5">
                        <span className="rounded-full border border-blue-200 bg-blue-50 px-2 py-0.5 text-[11px] font-bold text-blue-700">{c.domain}</span>
                      </td>
                      <td className="px-4 py-3.5 text-xs text-slate-600">{c.quota}</td>
                      <td className="px-4 py-3.5 text-right font-bold text-slate-900">{c.closingRank.toLocaleString()}</td>
                      <td className="px-4 py-3.5 text-xs text-slate-600">{c.annualFees || "–"}</td>
                      <td className="px-4 py-3.5 text-center">
                        <button
                          type="button"
                          title="Delete"
                          onClick={async () => {
                            if (confirm(`Delete ${c.collegeName}?`)) {
                              await deleteCollege(c.id);
                              await refresh();
                            }
                          }}
                          className="inline-flex h-7 w-7 items-center justify-center rounded-lg text-slate-400 transition hover:bg-red-50 hover:text-red-500"
                        >
                          <TrashIcon className="h-4 w-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                  {colleges.length === 0 && (
                    <tr>
                      <td colSpan={6} className="py-12 text-center text-sm text-slate-400">No colleges yet. Add one to power the admission predictors.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            <p className="mt-3 text-xs text-slate-400">
              ℹ️ Changes take effect immediately — the predictor tool on the landing page reads this data live from Supabase.
            </p>
          </div>
        )}

        {/* ══ SETTINGS TAB ══ */}
        {tab === "settings" && (
          <SettingsTab onSaved={() => {}} />
        )}
        </div>

        {/* Mobile bottom tab bar */}
        <nav
          aria-label="Admin mobile tabs"
          className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 pb-[env(safe-area-inset-bottom)] backdrop-blur supports-[backdrop-filter]:bg-white/90 lg:hidden"
        >
          <div className="mx-auto flex max-w-lg items-stretch justify-around px-1">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const active = tab === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => goTab(item.id)}
                  className={`flex min-h-[56px] min-w-0 flex-1 flex-col items-center justify-center gap-0.5 px-1 py-1.5 transition ${
                    active ? "text-blue-600" : "text-slate-500"
                  }`}
                >
                  <span
                    className={`flex h-7 w-7 items-center justify-center rounded-lg transition ${
                      active ? "bg-blue-50" : ""
                    }`}
                  >
                    <Icon className="h-[18px] w-[18px]" />
                  </span>
                  <span className="w-full truncate text-center text-[10px] font-bold leading-tight">
                    {item.label.split(" ")[0]}
                  </span>
                </button>
              );
            })}
          </div>
        </nav>
      </div>
    </div>
  );
}

// ── Settings Tab Component ──
function SettingsTab({ onSaved }: { onSaved: () => void }) {
  const [newUsername, setNewUsername] = useState("");
  const [currentPw, setCurrentPw] = useState("");
  const [newPw, setNewPw] = useState("");
  const [confirmPw, setConfirmPw] = useState("");
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState<{ type: "success" | "error"; text: string } | null>(null);
  const currentUsernameRef = useRef("");

  useEffect(() => {
    let cancelled = false;
    getAdminUsername().then((name) => {
      if (!cancelled) {
        currentUsernameRef.current = name;
        setNewUsername(name);
      }
    });
    return () => {
      cancelled = true;
    };
  }, []);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setMsg(null);

    const u = newUsername.trim();
    if (!u || u.length < 3) {
      setMsg({ type: "error", text: "Username must be at least 3 characters." });
      return;
    }

    if (newPw) {
      if (newPw.length < 4) {
        setMsg({ type: "error", text: "New password must be at least 4 characters." });
        return;
      }
      if (newPw !== confirmPw) {
        setMsg({ type: "error", text: "New passwords do not match." });
        return;
      }
    }

    setSaving(true);
    const result = await saveAdminCreds({
      currentUsername: currentUsernameRef.current || u,
      currentPassword: currentPw,
      newUsername: u,
      newPassword: newPw || undefined,
    });
    setSaving(false);

    if (!result.ok) {
      setMsg({ type: "error", text: result.message });
      return;
    }

    currentUsernameRef.current = u;
    setCurrentPw("");
    setNewPw("");
    setConfirmPw("");
    setMsg({
      type: "success",
      text: `${result.message} Use your new login details next time.`,
    });
    onSaved();
  };

  return (
    <div className="mt-5 max-w-lg">
      <h2 className="text-base font-bold text-slate-900 sm:text-lg mb-1">Account Settings</h2>
      <p className="text-xs text-slate-500 mb-6">
        Change your admin username and password. Changes take effect immediately.
      </p>

      <form onSubmit={handleSave} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-xs space-y-5 sm:p-6">
        {/* Username */}
        <div>
          <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">
            New Username
          </label>
          <input
            type="text"
            value={newUsername}
            onChange={(e) => setNewUsername(e.target.value)}
            autoComplete="off"
            spellCheck={false}
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
          />
        </div>

        <div className="border-t border-slate-100 pt-5">
          <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-4">Change Password</p>

          {/* Current Password */}
          <div className="mb-4">
            <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">
              Current Password *
            </label>
            <div className="relative">
              <input
                type={showCurrent ? "text" : "password"}
                value={currentPw}
                onChange={(e) => setCurrentPw(e.target.value)}
                placeholder="Enter current password to confirm"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 pr-11 text-sm text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              />
              <button
                type="button"
                onClick={() => setShowCurrent(v => !v)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <EyeIcon className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* New Password */}
          <div className="mb-4">
            <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">
              New Password <span className="normal-case text-slate-400">(leave blank to keep current)</span>
            </label>
            <div className="relative">
              <input
                type={showNew ? "text" : "password"}
                value={newPw}
                onChange={(e) => setNewPw(e.target.value)}
                placeholder="Min 4 characters"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 pr-11 text-sm text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              />
              <button
                type="button"
                onClick={() => setShowNew(v => !v)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <EyeIcon className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Confirm New Password */}
          {newPw && (
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                Confirm New Password *
              </label>
              <input
                type="password"
                value={confirmPw}
                onChange={(e) => setConfirmPw(e.target.value)}
                placeholder="Repeat new password"
                className={`w-full rounded-xl border px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 ${
                  confirmPw && confirmPw !== newPw
                    ? "border-red-300 bg-red-50 focus:ring-red-500/20"
                    : "border-slate-200 bg-slate-50 focus:border-blue-500 focus:ring-blue-500/20"
                }`}
              />
              {confirmPw && confirmPw !== newPw && (
                <p className="mt-1 text-xs text-red-500">Passwords do not match</p>
              )}
            </div>
          )}
        </div>

        {/* Message */}
        {msg && (
          <div className={`rounded-xl border px-4 py-3 text-sm font-medium ${
            msg.type === "success"
              ? "border-emerald-200 bg-emerald-50 text-emerald-700"
              : "border-red-200 bg-red-50 text-red-700"
          }`}>
            {msg.text}
          </div>
        )}

        <button
          type="submit"
          disabled={saving}
          className="w-full rounded-xl bg-blue-600 py-3 text-sm font-bold text-white transition hover:bg-blue-700 disabled:opacity-60"
        >
          {saving ? "Saving…" : "Save Changes"}
        </button>
      </form>

      <p className="mt-4 text-xs text-slate-400">
        Credentials are stored in Supabase (password saved as SHA-256 hash).
      </p>
    </div>
  );
}

