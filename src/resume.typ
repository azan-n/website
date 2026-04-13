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

Product-minded engineer with 4+ years at early-stage B2B startups. Comfortable owning the full arc from customer conversation to shipped feature. Builds and ships open-source tools.
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
    - Built and open-sourced websites for music festivals like #link("https://sultrymist.com")[Sultry Mist] using *Astro* and *WordPress*.
    - Developed an open-source executive function application #link("https://github.com/kaafihai/baajit")[Baajit] for neurodivergent people using *Tauri* and *React*.

    #sectionHeading(
      heading: [#link("cryptlex.com")[Cryptlex]],
      location: [Remote],
      role: [Staff Engineer],
      time: [2021.09 – Present],
    )
    Early-stage bootstrapped B2B SaaS startup (\~3 people at joining); wore many hats across the full business lifecycle.
    - *Sales & Growth:* Conducted product demos, qualified inbound leads, drafted proposals, and assisted in closing deals, contributing directly to *\$12,000 in MRR growth* and a customer base of *27,000+ users*.
    - *Product:* Gathered customer feedback through support and sales touchpoints, translated recurring pain points into feature specs, prioritized the backlog, and wrote documentation to reduce inbound friction.
    - *Engineering:* Standardized sentinel values, built a subscription management system, developed a reusable component library, introduced integration tests, implemented feature flags, added Rust and Android SDK support, and built a server licensing portal.
    - *Observability & Data:* Enhanced monitoring with OpenTelemetry, and enabled data-driven decisions using Metabase and PostHog.
    - *Team:* Hired and led a team of *7 engineers* using Agile processes as the company scaled.

    #sectionHeading(
      heading: [Independent Contractor],
      location: [Remote],
      role: [Software Engineer / Designer],
      time: [2021.09 – Present],
    )
    End-to-end design, development, and research for early-stage startups without dedicated product or design teams.
    - Designed and built features using Django, HTMX, and AlpineJS for ed-tech startup Goodly; conducted user research to inform feature direction.
    - Automated workflows with Docker and GitHub Actions, reducing manual overhead for small teams operating lean.
  ],
)

#sectionBlock(
  [Talks and Workshops],
  [
    #sectionHeading(
      heading: [#link("https://azan-n.com/notes/20260228-music-at-hack4play-with-strudelcc/")[Live Coding Music with strudel.cc]],
      location: [Kochi],
      role: [Kochi Biennale],
      time: [2026.02],
    )
    Hands-on workshop introducing algorithmic music creation using strudel.cc. Covered drum synthesis, pattern syntax (replication, elongation, alternation), tempo control, and pattern layering; culminating in a collaborative live jam session using Flok.

    #sectionHeading(
      heading: [#link("https://azan-n.com/projects/20250924-music-at-indiafoss-with-strudelcc/")[Live Coding Music with strudel.cc]],
      location: [Bangalore],
      role: [IndiaFOSS],
      time: [2025.09],
    )
    Workshop that expanded last-minute into a mainstage talk in front of a general open-source audience. Covered the conceptual foundations of music, genre-specific rhythmic patterns, humanization techniques (`late()`, `early()`, `sometimes()`), and live performance using device sensors and the Flok collaborative platform.
  ],
)

#sectionBlock(
  [Projects],
  [
    #sectionHeading(
      heading: [#link("https://github.com/azan-n/reportoire")[reportoire]],
      role: [TypeScript, React, DuckDB WASM],
    )
    Open-source test report aggregation tool that runs entirely in the browser. Parses and standardizes JUnit XML reports from multiple frameworks (Maven Surefire, JUnit, Jenkins) using schema validation, enabling unified analysis without a backend.
    #colbreak()
    #sectionHeading(
      heading: [#link("https://github.com/azan-n/halfsies")[halfsies]],
      role: [TypeScript, React],
    )
    Open-source, local-first expense splitter that encodes all state into shareable URLs. Licensed under AGPL-3.0.
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
    / Product: Enterprise Design Thinking (IBM), The Delft Design Approach (DelftX)
    / Web: #link("https://coursera.org/share/d583a9072aaf69d01de11672336cf815")[Web Design: Strategy and Information Architecture] (CalArts), #link("https://coursera.org/share/695a28ab50d2a4a6057b5ca9ba1bf519")[Web Design: Wireframes to Prototypes] (CalArts), #link("https://coursera.org/share/048c2c9177ed355932c3dde707da1bae")[UX Design Fundamentals] (CalArts)
    / Design: #link("https://coursera.org/share/7c5bee15bdc998e6b4fe9b452451e955")[Visual Elements of UI Design] (CalArts), #link("https://coursera.org/share/b0ac9cc193d9c16a27ef937f30d347bf")[Introduction to Typography] (CalArts), #link("https://coursera.org/share/2ff80087738cd90fd53fd83c192dbd4e")[Ideas from the History of Graphic Design] (CalArts), #link("https://coursera.org/share/5265373ab2dd96dbf8f1208aa5080a18")[Introduction to Imagemaking] (CalArts)
    / Music: #link("https://coursera.org/share/b2c2cae8d8571caa23184d7c6fcdcad4")[Approaching Music Theory: Melodic Forms and Simple Harmony] (Coursera)
  ],
)
