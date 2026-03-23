#set page(paper: "a4", margin: 18mm)
#set text(font: "Liberation Sans", size: 9pt, fill: rgb("#374151"))
#set par(leading: 0.55em)

#let ink    = rgb("#111827")
#let muted  = rgb("#6b7280")
#let subtle = rgb("#374151")
#let rule-c = rgb("#999999")
#let link-c = rgb("#2563eb")

#show link: set text(fill: link-c)

#let section(title) = {
  v(8pt)
  text(size: 12pt, weight: "thin", fill: ink, title)
  line(length: 100%, stroke: 0.5pt + rule-c)
  v(8pt)
}

#let subtitle(company, role, period, first: false) = {
  if not first { v(8pt) }
  grid(
    columns: (1fr, auto),
    text(size: 10pt, weight: "bold",bottom-edge: 0.1em, fill: ink, company),
    text(size: 9pt, fill: muted, bottom-edge: 0.1em, role+" | "+period),
  )
}


#let kv(key, value) = {
  text(key + " - ")
  text(fill: subtle, value)
  linebreak()
}

#let oss-item(name, url, desc) = {
  [#link(url)[#text(name)]#text(fill: subtle)[ \- #desc]]
  linebreak()
}

// Document start!

#text(size: 20pt, weight: "bold", fill: ink)[Azan]

#let sep = text(fill: muted)[#h(4pt) · #h(4pt)]
#link("https://azan-n.com")[azan-n.com]#sep#link("mailto:work@azan-n.com")[work\@azan-n.com]#sep#link("https://github.com/azan-n")[github.com/azan-n]
#v(6pt)

#section("Experience")
#subtitle("Kaafi Hai", "Remote - Consulting Software Engineer", "2025.12–Present", first: true)
Built websites for music festivals and artists using *Astro* and *WordPress*. Developed an executive function application for neurodivergent people using *Tauri* and *React*.

#subtitle([#link("cryptlex.com")[Cryptlex]], "Remote - Software Engineer", "2021.09–Present")
Standardized sentinel values, created a subscription management system, introduced integration tests, built a feature flagging system, added Rust and Android SDK support, and built a server licensing portal, collectively driving *\$12,000 in MRR growth* and adoption by *27,000+ users*
Enhanced monitoring with OpenTelemetry, developed a reusable component library, and empowered data-driven decisions using Metabase and PostHog.
Led a team of *7 engineers* using Agile processes to streamline project workflows.

#subtitle("Self-employed", "Remote - Freelance Software Engineer", "2019.01–Present")
Designed and built features using Django, HTMX, and AlpineJS for an ed-tech startup. Automated workflows with Docker and GitHub Actions.

#section("Open Source")
#oss-item("reportoire", "https://github.com/azan-n/reportoire", "Open-source project to analyze test reports in JUnit XML format using DuckDB")
#oss-item("halfsies", "https://github.com/azan-n/halfsies", "Privacy-preserving expense splitter in the browser")


#section("Skills")
#kv("Languages", "C#, JavaScript, Java, Rust, SQL, TypeScript, Go")
#kv("Software Development", "AWS, Angular, Astro, EF Core, Node.js, .NET Core, PostgreSQL, React, WordPress")
#kv("Tools", "Confluence, Docker, Figma, Git, GitHub Actions, Grafana, Metabase, Notion")

#section("Education")
#subtitle(
  "Jamia Hamdard University",
  first: true,
  "Bachelor of Technology, Computer Science and Engineering",
  "2017.06–2021.06"
)

#section("Certifications")
#kv("Management", "Professional Scrum Master I – Scrum.org")
#kv("Product", "Enterprise Design Thinking – IBM  ·  The Delft Design Approach – DelftX")
#kv("Web", "Web Design: Strategy and Information Architecture – CalArts  ·  UX Design Fundamentals – CalArts")
