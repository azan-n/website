#import "functions.typ": *

#set page(paper: "a4", margin: 12mm)
#set text(font: "Liberation Sans", 10pt)
#let link-c = rgb("#2563eb")
#show link: set text(fill: link-c)

#grid(
  columns: (3fr, 1fr),
  align: (left + bottom, right + bottom),
  smallcaps[
    #text(font: "Liberation Serif", size: 30pt)[Azan]
  ],
  [
    work\@azan-n.com \
    https://azan-n.com
  ],
)

#line(length: 100%, stroke: 0.4pt)

#sectionBlock(
  [Experience],
  [
    #sectionHeading(
      heading: [#link("kaafihai.com")[Kaafi Hai]],
      location: [Remote],
      role: [Consulting Software Engineer],
      time: [2025.12 – Present],
    )
    - Built websites for music festivals and artists using *Astro* and *WordPress*.
    - Developed an executive function application for neurodivergent people using *Tauri* and *React*.

    #sectionHeading(
      heading: [#link("cryptlex.com")[Cryptlex]],
      location: [Remote],
      role: [Software Engineer],
      time: [2021.09 – Present],
    )
    - Standardized sentinel values, created a subscription management system, introduced integration tests, built a feature flagging system, added Rust and Android SDK support, and built a server licensing portal, collectively driving *\$12,000 in MRR growth* and adoption by *27,000+ users*
    - Enhanced monitoring with OpenTelemetry, developed a reusable component library, and empowered data-driven decisions using Metabase and PostHog.
    - Led a team of *7 engineers* using Agile processes to streamline project workflows.

    #sectionHeading(
      heading: [Independent Contractor],
      location: [Remote],
      role: [Software Engineer],
      time: [2021.09 – Present],
    )
    - Designed and built features using Django, HTMX, and AlpineJS for ed-tech startup Goodly.
    - Automated workflows with Docker and GitHub Actions.
  ],
)

#sectionBlock(
  [Talks and Workshops],
  [
    #sectionHeading(
      heading: [#link("https://azan-n.com/notes/20260228-music-at-hack4play-with-strudelcc/")[Sampling using strudel.cc]],
      location: [Kochi Bienalle],
      time: [2026.03],
    )
    #sectionHeading(
      heading: [#link("https://azan-n.com/projects/20250924-music-at-indiafoss-with-strudelcc/")[Music using strudel.cc]],
      location: [IndiaFOSS],
      time: [2025.09],
    )
  ],
)

#sectionBlock(
  [Projects],
  [
    #sectionHeading(
      heading: [#link("https://github.com/azan-n/reportoire")[reportoire]],
    )
    Open-source tool to analyze test reports in JUnit XML format in the browser using DuckDB WASM

    #sectionHeading(
      heading: [#link("https://github.com/azan-n/halfsies")[halfsies]],
    )
    Open-source, local-first, privacy-preserving expense splitter in the browser
  ],
)


#sectionBlock(
  [Skills],
  [
    #set terms(separator: [: ])
    / Programming: C\#, JavaScript, Java, Rust, SQL, TypeScript, Go
    / Software: AWS, Angular, Astro, Docker, EF Core, Figma, Node.js, Git, GitHub Actions, Grafana, Metabase, .NET Core, PostgreSQL, React, WordPress
  ],
)

#sectionBlock(
  [Education],
  [
    #sectionHeading(
      heading: [Takshashila Institution],
      location: [Bangalore, India],
      role: [Graduate Certificate in Public Policy (Tech and Policy)],
      time: [2025.09 – 2026.02],
    )
    #sectionHeading(
      heading: [Jamia Hamdard University],
      location: [New Delhi, India],
      role: [Bachelor of Technology, Computer Science and Engineering],
      time: [2017.06 – 2021.06],
    )
  ],
)

#sectionBlock(
  [Certifications],
  [
    #set terms(separator: [: ])
    / Management: Professional Scrum Master I (Scrum.org)
    / Product: Enterprise Design Thinking (IBM),  The Delft Design Approach (DelftX)
    / Web: Web Design: Strategy and Information Architecture (CalArts), UX Design Fundamentals (CalArts)
  ],
)

// #section("Certifications")
// #kv("Management", "")
// #kv("", "")
// #kv("Web", )
