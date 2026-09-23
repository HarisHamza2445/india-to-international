"use client";

export interface DossierData {
  candidateName: string;
  airRank: string;
  percentile: string;
  domicileCategory: string;
  cycle: string;
  targetBranch: string;
}

export function generateAndDownloadDossierPDF(data?: Partial<DossierData>) {
  const d: DossierData = {
    candidateName: data?.candidateName || "Dr. Vedika Kulkarni",
    airRank: data?.airRank || "AIR 12,450",
    percentile: data?.percentile || "98.42 %ile",
    domicileCategory: data?.domicileCategory || "MH / General",
    cycle: data?.cycle || "NEET PG 2025–26 CYCLE",
    targetBranch: data?.targetBranch || "General Medicine / Radio-Diagnosis",
  };

  const printWindow = window.open("", "_blank");
  if (!printWindow) {
    alert("Please allow popups to download/print the Admission Audit Dossier PDF.");
    return;
  }

  const html = `
<!DOCTYPE html>
<html>
<head>
  <title>Candidate Admission Matrix Dossier - ${d.candidateName}</title>
  <style>
    @page { size: A4; margin: 15mm; }
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; color: #0f172a; margin: 0; padding: 20px; line-height: 1.5; font-size: 13px; }
    .header { display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #0062ff; padding-bottom: 15px; margin-bottom: 20px; }
    .logo-area { display: flex; align-items: center; gap: 12px; }
    .logo-badge { background: #0062ff; color: white; padding: 8px 12px; border-radius: 8px; font-weight: 800; font-size: 16px; }
    .brand-title { font-size: 18px; font-weight: bold; color: #0f172a; margin: 0; }
    .brand-sub { font-size: 11px; color: #0062ff; font-weight: 700; text-transform: uppercase; margin-top: 2px; }
    .doc-meta { text-align: right; font-size: 11px; color: #64748b; }
    .dossier-card { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 16px; margin-bottom: 20px; }
    .stats-row { display: flex; justify-content: space-between; background: white; border: 1px solid #cbd5e1; border-radius: 8px; padding: 12px 20px; margin-top: 10px; }
    .stat-item { text-align: center; }
    .stat-label { font-size: 10px; font-weight: bold; color: #64748b; text-transform: uppercase; }
    .stat-val { font-size: 16px; font-weight: 800; color: #0f172a; margin-top: 2px; }
    .stat-val.blue { color: #0062ff; }
    h2 { font-size: 14px; font-weight: 700; color: #0f172a; margin: 20px 0 10px 0; border-bottom: 1px solid #e2e8f0; padding-bottom: 4px; }
    table { width: 100%; border-collapse: collapse; margin-bottom: 16px; font-size: 12px; }
    th { background: #f1f5f9; text-align: left; padding: 8px 10px; border: 1px solid #cbd5e1; font-weight: 700; color: #334155; }
    td { padding: 8px 10px; border: 1px solid #e2e8f0; }
    .badge { display: inline-block; padding: 2px 8px; border-radius: 4px; font-size: 10px; font-weight: 700; text-transform: uppercase; }
    .badge-high { background: #ecfdf5; color: #047857; border: 1px solid #a7f3d0; }
    .badge-mod { background: #fffbeb; color: #b45309; border: 1px solid #fde68a; }
    .badge-bord { background: #f1f5f9; color: #475569; border: 1px solid #cbd5e1; }
    .footer { margin-top: 30px; border-top: 1px dashed #cbd5e1; padding-top: 15px; display: flex; justify-content: space-between; font-size: 10px; color: #64748b; }
    .seal-box { border: 1px solid #0062ff; padding: 8px 14px; border-radius: 6px; text-align: center; color: #0062ff; font-weight: 700; font-size: 10px; }
    @media print {
      body { padding: 0; }
      .no-print { display: none; }
    }
  </style>
</head>
<body>
  <div class="header">
    <div class="logo-area">
      <div class="logo-badge">ITOI</div>
      <div>
        <h1 class="brand-title">India To International</h1>
        <div class="brand-sub">Medical Admission & Counselling Desk • Pune</div>
      </div>
    </div>
    <div class="doc-meta">
      <div><strong>File:</strong> VEDIKASAMPLE.PDF</div>
      <div><strong>Authorized Desk:</strong> Swargate, Pune</div>
      <div><strong>Supervision:</strong> Navin Harjwani</div>
    </div>
  </div>

  <div class="dossier-card">
    <div style="display:flex; justify-content:space-between; align-items:center;">
      <div>
        <span style="background:#eaf2ff; color:#0062ff; font-size:10px; font-weight:bold; padding:3px 8px; border-radius:4px; text-transform:uppercase;">
          ${d.cycle}
        </span>
        <h2 style="margin:6px 0 2px 0; font-size:17px; border:none; padding:0;">${d.candidateName}</h2>
        <div style="color:#64748b; font-size:11px;">Target: ${d.targetBranch}</div>
      </div>
    </div>

    <div class="stats-row">
      <div class="stat-item">
        <div class="stat-label">All India Rank</div>
        <div class="stat-val">${d.airRank}</div>
      </div>
      <div class="stat-item">
        <div class="stat-label">NEET Percentile</div>
        <div class="stat-val blue">${d.percentile}</div>
      </div>
      <div class="stat-item">
        <div class="stat-label">Domicile / Category</div>
        <div class="stat-val">${d.domicileCategory}</div>
      </div>
    </div>
  </div>

  <h2>1. Eligible Medical Institutions & Round-Wise Admission Probability</h2>
  <table>
    <thead>
      <tr>
        <th>College / Hospital Name</th>
        <th>Quota Type</th>
        <th>Historical Cutoff</th>
        <th>Admission Probability</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>B.J. Govt Medical College, Pune</strong></td>
        <td>85% State Merit</td>
        <td>~13,100</td>
        <td><span class="badge badge-high">High (94%)</span></td>
      </tr>
      <tr>
        <td><strong>Grant Govt Medical College, Mumbai</strong></td>
        <td>50% AIQ Central</td>
        <td>~11,800</td>
        <td><span class="badge badge-mod">Moderate (68%)</span></td>
      </tr>
      <tr>
        <td><strong>Kasturba Medical College, Manipal</strong></td>
        <td>Deemed Management</td>
        <td>~14,800</td>
        <td><span class="badge badge-high">High (98%)</span></td>
      </tr>
      <tr>
        <td><strong>KEM Hospital & Seth GS Medical College, Mumbai</strong></td>
        <td>50% AIQ</td>
        <td>~9,200</td>
        <td><span class="badge badge-bord">Borderline (42%)</span></td>
      </tr>
      <tr>
        <td><strong>D.Y. Patil Medical College, Pune</strong></td>
        <td>Institutional / Management</td>
        <td>~32,000</td>
        <td><span class="badge badge-high">High (99%)</span></td>
      </tr>
    </tbody>
  </table>

  <h2>2. Clinical Branch Preference & Seat Matrix Analysis</h2>
  <table>
    <thead>
      <tr>
        <th>Specialty Branch</th>
        <th>Total Analyzed Seats</th>
        <th>Allotment Forecast</th>
        <th>Recommended Route</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>General Medicine</td>
        <td>42 Seats</td>
        <td><strong style="color:#047857;">Confirmed Round 2</strong></td>
        <td>State Domicile 85%</td>
      </tr>
      <tr>
        <td>Radio-Diagnosis</td>
        <td>18 Seats</td>
        <td><strong style="color:#b45309;">Target Deemed</strong></td>
        <td>Institutional Tiered Choice</td>
      </tr>
      <tr>
        <td>Paediatrics</td>
        <td>31 Seats</td>
        <td><strong style="color:#047857;">Likely Round 1</strong></td>
        <td>Govt Medical + DNB Hospitals</td>
      </tr>
      <tr>
        <td>Orthopaedics</td>
        <td>26 Seats</td>
        <td><strong style="color:#047857;">High Probability</strong></td>
        <td>Govt Merit Open</td>
      </tr>
    </tbody>
  </table>

  <h2>3. Bond Liabilities, Stipend & Choice Locking Rules</h2>
  <table>
    <thead>
      <tr>
        <th>Regulatory Clause</th>
        <th>Financial Liability / Value</th>
        <th>Audit Findings & Risk Prevention</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Maharashtra Service Bond</strong></td>
        <td><strong style="color:#e11d48;">₹50 Lakhs</strong></td>
        <td>1-year mandatory government service. Seat cannot be vacated post Round 2 without penalty.</td>
      </tr>
      <tr>
        <td><strong>DNB Stipend Matrix</strong></td>
        <td><strong style="color:#047857;">₹65,000 to ₹72,000/mo</strong></td>
        <td>NBE mandated stipend audited against actual resident bank credit records.</td>
      </tr>
      <tr>
        <td><strong>Choice Strategy Sequence</strong></td>
        <td><strong>Tiered 68-Choice Lock</strong></td>
        <td>Engineered to prevent stray round forfeiture and protect refundable security deposits.</td>
      </tr>
    </tbody>
  </table>

  <div class="footer">
    <div>
      <div>India To International Medical Admission Advisory</div>
      <div>Sadashiv Peth, Swargate, Pune | Helpline: +91-93595 44396</div>
    </div>
    <div class="seal-box">
      OFFICIALLY AUDITED<br>NAVIN HARJWANI DESK
    </div>
  </div>

  <div class="no-print" style="margin-top:20px; text-align:center;">
    <button onclick="window.print()" style="background:#0062ff; color:white; border:none; padding:10px 24px; border-radius:8px; font-weight:bold; cursor:pointer; font-size:14px;">
      Print / Save as PDF
    </button>
  </div>

  <script>
    window.onload = function() {
      // Auto trigger print dialogue for seamless PDF saving
      setTimeout(function() { window.print(); }, 400);
    }
  </script>
</body>
</html>
  `;

  printWindow.document.open();
  printWindow.document.write(html);
  printWindow.document.close();
}
