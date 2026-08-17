#let sectionBlock(title, content) = [
  #grid(
    columns: (2.8fr, 13.8fr),
    smallcaps(text(font: "Liberation Serif", size: 14.5pt, title)), content,
  )
  #v(20pt)
]

#let sectionHeading(heading: [], location: [], role: [], time: []) = [
  #grid(
    columns: (3fr, 1fr),
    align: (left, right),
    row-gutter: 16pt,
    [#strong(heading) \ #emph(role)], [#location \ #time],
  )
]
