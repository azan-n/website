import { jsPDF } from "jspdf";

// ── layout constants (mm) ────────────────────────────────────────────────────
const ML = 18; // left margin
const MT = 18; // top margin
const PW = 210; // A4 page width
const W = PW - ML - ML; // content width = 174mm

// ── colours (r, g, b) ────────────────────────────────────────────────────────
type RGB = [number, number, number];
const C: Record<string, RGB> = {
  ink: [17, 24, 39],
  muted: [107, 114, 128],
  subtle: [55, 65, 81],
  rule: [229, 231, 235],
  link: [37, 99, 235],
};

export async function GET() {
  const doc = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });

  // ── accessibility metadata ──────────────────────────────────────────────
  doc.setProperties({
    title: "Azan – Resume",
    author: "Azan",
    subject: "Software Engineer Resume",
    creator: "azan-n.com",
  });
  doc.setLanguage("en");

  // ── state ───────────────────────────────────────────────────────────────
  let y = MT;
  const LH = 5; // standard line height mm
  const LHS = 4.2; // small line height mm

  // ── helpers ─────────────────────────────────────────────────────────────

  function tc(c: RGB) {
    doc.setTextColor(c[0], c[1], c[2]);
  }

  function sectionHeading(text: string) {
    y += 3;
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8);
    tc(C.ink);
    doc.text(text, ML, y);
    y += LHS;
  }

  function bulletLine(text: string) {
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    tc(C.subtle);
    const lines: string[] = doc.splitTextToSize(`\u2022  ${text}`, W - 4);
    doc.text(lines, ML + 3, y, { lineHeightFactor: 1.45 });
    y += lines.length * LHS;
  }

  function kvLine(key: string, value: string) {
    doc.setFontSize(9);
    doc.setFont("helvetica", "bold");
    tc(C.ink);
    const kw = doc.getTextWidth(`${key}: `);
    doc.text(`${key}: `, ML, y);
    doc.setFont("helvetica", "normal");
    tc(C.subtle);
    const lines: string[] = doc.splitTextToSize(value, W - kw);
    doc.text(lines, ML + kw, y, { lineHeightFactor: 1.45 });
    y += lines.length * LHS;
  }

  function jobEntry(
    company: string,
    role: string,
    period: string,
    bullets: string[],
  ) {
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    tc(C.ink);
    doc.text(company, ML, y);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    tc(C.muted);
    doc.text(period, ML + W, y, { align: "right" });
    y += LH;

    doc.setFont("helvetica", "italic");
    doc.setFontSize(9);
    tc(C.subtle);
    doc.text(role, ML, y);
    y += LHS + 1;

    for (const b of bullets) bulletLine(b);
    y += 3;
  }

  // ── header ───────────────────────────────────────────────────────────────

  doc.setFont("helvetica", "bold");
  doc.setFontSize(22);
  tc(C.ink);
  doc.text("Azan", ML, y);
  y += 8;

  const contactItems: [string, string][] = [
    ["azan-n.com", "https://azan-n.com"],
    ["work@azan-n.com", "mailto:work@azan-n.com"],
    ["github.com/azan-n", "https://github.com/azan-n"],
    ["linkedin.com/in/azan-n", "https://www.linkedin.com/in/azan-n"],
  ];

  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  let cx = ML;
  for (let i = 0; i < contactItems.length; i++) {
    const [label, url] = contactItems[i];
    tc(C.link);
    doc.textWithLink(label, cx, y, { url });
    cx += doc.getTextWidth(label);
    if (i < contactItems.length - 1) {
      const sep = "  ·  ";
      tc(C.muted);
      doc.text(sep, cx, y);
      cx += doc.getTextWidth(sep);
    }
  }
  y += 8;

  // ── experience ───────────────────────────────────────────────────────────

  sectionHeading("Experience");

  jobEntry(
    "Kaafi Hai",
    "Remote Consulting Software Engineer",
    "2025.12–Present",
    [
      "Built websites for music festivals and artists using Astro and WordPress",
      "Developed an executive function application for neurodivergent people using Tauri and React",
    ],
  );

  jobEntry("Cryptlex", "Remote Software Engineer", "2021.09–Present", [
    "Led a team of 7 engineers using Agile processes and Notion to streamline project workflows",
    "Standardized sentinel values for unlimited usage plans, leading to a $8,000 increase in MRR",
    "Created a subscription management system with over 50% customer adoption",
    "Developed customer-facing payment integration libraries for Stripe and FastSpring",
    "Introduced backend integration tests, accelerating development velocity and reducing MTTR",
    "Enhanced monitoring of backend services using OpenTelemetry and Grafana",
    "Developed a reusable component library and design guidelines for consistent UIs",
    "Redesigned the marketing website to better represent the brand",
    "Empowered data-driven decision-making using Metabase and PostHog to track feature adoption",
    "Designed and implemented a feature flagging system adopted by over 40% of the customer base",
    "Increased product adoption by introducing SDK support for Rust, contributing to a $4,000 increase in MRR",
    "Managed client-facing SDKs in Java and Node.js",
    "Built a web portal for server licensing, streamlining server management for 24,000 users",
    "Introduced Android support for native SDKs, driving adoption by 3,000 new users",
  ]);

  jobEntry(
    "Self-employed",
    "Remote Freelance Software Engineer",
    "2019.01–Present",
    [
      "Designed and built features using Django, HTMX, and AlpineJS for an ed-tech startup",
      "Automated workflows with Docker and GitHub Actions",
    ],
  );

  // ── open source ──────────────────────────────────────────────────────────

  sectionHeading("Open Source");

  const ossItems: [string, string, string][] = [
    [
      "reportoire",
      "Open-source project to analyze test reports in JUnit XML format using DuckDB",
      "https://github.com/azan-n/reportoire",
    ],
    [
      "halfsies",
      "Privacy-preserving expense splitter in the browser",
      "https://github.com/azan-n/halfsies",
    ],
  ];

  for (const [name, desc, url] of ossItems) {
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9);
    tc(C.link);
    doc.textWithLink(`\u2022  ${name}`, ML + 3, y, { url });
    const nw = doc.getTextWidth(`\u2022  ${name}`);
    doc.setFont("helvetica", "normal");
    tc(C.subtle);
    const rest = ` – ${desc}`;
    const restLines: string[] = doc.splitTextToSize(rest, W - nw - 3);
    doc.text(restLines[0], ML + 3 + nw, y);
    if (restLines.length > 1) {
      y += LHS;
      doc.text(restLines.slice(1), ML + 3, y, { lineHeightFactor: 1.45 });
      y += (restLines.length - 1) * LHS;
    } else {
      y += LHS;
    }
  }
  y += 3;

  // ── skills ───────────────────────────────────────────────────────────────

  sectionHeading("Skills");

  kvLine("Languages", "C#, JavaScript, Java, Rust, SQL, TypeScript, Go");
  kvLine(
    "Software Development",
    "AWS, Angular, Astro, EF Core, Node.js, .NET Core, PostgreSQL, React, WordPress",
  );
  kvLine(
    "Tools",
    "Confluence, Docker, Figma, Git, GitHub Actions, Grafana, Metabase, Notion",
  );
  y += 3;

  // ── education ────────────────────────────────────────────────────────────

  sectionHeading("Education");

  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  tc(C.ink);
  doc.text("Jamia Hamdard University", ML, y);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  tc(C.muted);
  doc.text("2017.06–2021.06", ML + W, y, { align: "right" });
  y += LH;

  doc.setFont("helvetica", "italic");
  doc.setFontSize(9);
  tc(C.subtle);
  doc.text("Bachelor of Technology, Computer Science and Engineering", ML, y);
  y += LH + 3;

  // ── certifications ───────────────────────────────────────────────────────

  sectionHeading("Certifications");

  kvLine("Management", "Professional Scrum Master I – Scrum.org");
  kvLine(
    "Product",
    "Enterprise Design Thinking – IBM  ·  The Delft Design Approach – DelftX",
  );
  kvLine(
    "Web",
    "Web Design: Strategy and Information Architecture – CalArts  ·  UX Design Fundamentals – CalArts",
  );

  // ── response ─────────────────────────────────────────────────────────────

  const buffer = Buffer.from(doc.output("arraybuffer"));

  return new Response(buffer, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": "inline; filename=azan-n-resume.pdf",
    },
  });
}
