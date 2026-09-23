-- Run in Supabase SQL Editor (one-shot full schema):
-- https://supabase.com/dashboard/project/tlilveykssiwmencwwkp/sql/new

-- ── Admin credentials ──
create table if not exists public.admin_credentials (
  id text primary key default 'default',
  username text not null,
  password_hash text not null,
  updated_at timestamptz not null default now()
);

alter table public.admin_credentials enable row level security;

drop policy if exists "anon_read_admin_credentials" on public.admin_credentials;
drop policy if exists "anon_update_admin_credentials" on public.admin_credentials;
drop policy if exists "anon_insert_admin_credentials" on public.admin_credentials;

create policy "anon_read_admin_credentials"
  on public.admin_credentials for select to anon using (id = 'default');
create policy "anon_update_admin_credentials"
  on public.admin_credentials for update to anon
  using (id = 'default') with check (id = 'default');
create policy "anon_insert_admin_credentials"
  on public.admin_credentials for insert to anon
  with check (id = 'default');

insert into public.admin_credentials (id, username, password_hash)
values (
  'default',
  'admin',
  '8c84ece6c165f4f50ec1285212d86fc858f9347dd585cd1269f4b98770f81cee'
)
on conflict (id) do nothing;

-- ── Leads ──
create table if not exists public.leads (
  id text primary key,
  candidate_name text not null,
  parent_name text,
  mobile text not null,
  whatsapp text not null,
  air_rank text not null,
  target_state_branch text not null,
  domain text not null,
  mode text not null,
  status text not null,
  notes text,
  created_at text not null
);

alter table public.leads enable row level security;

drop policy if exists "anon_all_leads" on public.leads;
create policy "anon_all_leads"
  on public.leads for all to anon
  using (true) with check (true);

-- ── Bulletins ──
create table if not exists public.bulletins (
  id text primary key,
  badge text not null,
  category text not null default '',
  title text not null,
  description text not null,
  full_content text,
  timestamp text not null,
  active boolean not null default true
);

alter table public.bulletins enable row level security;

drop policy if exists "anon_all_bulletins" on public.bulletins;
create policy "anon_all_bulletins"
  on public.bulletins for all to anon
  using (true) with check (true);

-- ── College cutoffs ──
create table if not exists public.colleges (
  id text primary key,
  college_name text not null,
  state text not null,
  quota text not null,
  closing_rank integer not null,
  domain text not null,
  branch text not null,
  annual_fees text not null,
  bond_penalty text not null,
  stipend text not null
);

alter table public.colleges enable row level security;

drop policy if exists "anon_all_colleges" on public.colleges;
create policy "anon_all_colleges"
  on public.colleges for all to anon
  using (true) with check (true);

-- ── Seed defaults (idempotent) ──
insert into public.leads (id, candidate_name, parent_name, mobile, whatsapp, air_rank, target_state_branch, domain, mode, status, notes, created_at) values
('LEAD-101', 'Dr. Vedika Kulkarni', 'Sudhir Kulkarni', '+91 93595 44396', '+91 93595 44396', '12,450', 'Maharashtra / General Medicine', 'NEET PG', 'In-Person (Swargate Desk)', 'Audit Generated', 'Targeting B.J. Pune or KEM Mumbai. Budget flexible for deemed general medicine.', '2026-09-23 18:30'),
('LEAD-102', 'Ananya Deshmukh', 'Dr. Ravindra Deshmukh', '+91 98220 18452', '+91 98220 18452', '34,200', 'Maharashtra State / MBBS Govt', 'NEET UG', 'In-Person (Swargate Desk)', 'Slot Confirmed', 'First generation medical aspirant. Domicile scrutiny pending at Pune nodal center.', '2026-09-23 14:15'),
('LEAD-103', 'Dr. Rahul Joshi', 'Prakash Joshi', '+91 94225 67891', '+91 94225 67891', '8,920', 'Radio-Diagnosis / AIQ DNB', 'NEET PG', 'Live Video / Phone', 'Contacted', 'Outstation candidate from Aurangabad. Prefers high surgical hospital flow.', '2026-09-22 19:40'),
('LEAD-104', 'Siddharth Patil', 'Suresh Patil', '+91 97118 57351', '+91 97118 57351', '4,150', 'Orthodontics / Karnataka Open', 'NEET MDS', 'Live Video / Phone', 'New Lead', 'KEA registration verified. Needs institutional round conversion roadmap.', '2026-09-22 11:20')
on conflict (id) do nothing;

insert into public.bulletins (id, badge, category, title, description, full_content, timestamp, active) values
('mcc-round2', 'MCC AIQ', 'NEET PG 2025', 'MCC AIQ Round 2 Seat Matrix & Vacancy Announced', 'Verification of clinical branch vacancies across top central medical institutions.', 'The Medical Counselling Committee (MCC) has published the official Round 2 seat matrix for 50% All India Quota, Deemed, and Central Universities. Fresh choice filling is mandatory. Candidates holding a Round 1 allotted seat who did not opt for willingness to upgrade risk security deposit forfeiture if unallotted in Round 2. India To International has completed department-wise bed audits for all 42 listed clinical colleges.', 'Updated Today', true),
('maha-cet-verification', 'MAHARASHTRA CET CELL', 'State Merit Portal', 'Maharashtra State PG & UG Document Verification Schedule', 'Physical scrutiny timeline and nodal center list published for registered candidates.', 'State Common Entrance Test Cell, Maharashtra has designated 14 regional nodal scrutiny centers (including B.J. Govt Medical College, Pune) for document verification. Original Domicile, Non-Creamy Layer, and Internship Completion Certificates must be verified in person before merit list release. Ensure affidavit stamp dates precede registration closure.', 'Yesterday', true),
('neet-ug-stray', 'NEET UG', 'Advisory Notice', 'NEET UG Stray Vacancy Rules & Penalty Guidelines', 'Comprehensive compliance rules for institutional level round participation without debarment.', 'Under Supreme Court and NMC directive, any candidate who joins an allotted seat in AIQ or State Round 3 cannot participate in the Stray Vacancy Round. Candidates who are allotted a seat in the Stray Vacancy Round and fail to join will be debarred from NEET examination for 2 consecutive years and their security deposit will be forfeited.', '3 Days Ago', true)
on conflict (id) do nothing;

insert into public.colleges (id, college_name, state, quota, closing_rank, domain, branch, annual_fees, bond_penalty, stipend) values
('col-1', 'B.J. Govt Medical College, Pune', 'Maharashtra', '85% State Merit', 13100, 'NEET PG', 'General Medicine', '₹1,44,000', '₹50 Lakhs (1 Year)', '₹72,000/mo'),
('col-2', 'Grant Govt Medical College, Mumbai', 'Maharashtra', '50% AIQ Central', 11800, 'NEET PG', 'General Medicine', '₹1,44,000', '₹50 Lakhs (1 Year)', '₹72,000/mo'),
('col-3', 'Kasturba Medical College, Manipal', 'Karnataka', 'Deemed Management', 14800, 'NEET PG', 'Radio-Diagnosis', '₹24,50,000', 'No Service Bond', '₹65,000/mo'),
('col-4', 'KEM Hospital & Seth GS Medical College, Mumbai', 'Maharashtra', '50% AIQ', 9200, 'NEET PG', 'Paediatrics', '₹1,44,000', '₹50 Lakhs (1 Year)', '₹72,000/mo'),
('col-5', 'D.Y. Patil Medical College, Pune', 'Maharashtra', 'Deemed Management', 32000, 'NEET PG', 'Orthopaedics', '₹38,00,000', 'No Service Bond', '₹60,000/mo'),
('col-6', 'Government Medical College, Miraj', 'Maharashtra', '85% State Merit', 24500, 'NEET UG', 'MBBS', '₹1,25,000', '₹10 Lakhs (1 Year)', '₹18,000/mo (Intern)'),
('col-7', 'Bharati Vidyapeeth Dental College, Pune', 'Maharashtra', 'Deemed Management', 6500, 'NEET MDS', 'Orthodontics', '₹12,00,000', 'No Service Bond', '₹35,000/mo')
on conflict (id) do nothing;
