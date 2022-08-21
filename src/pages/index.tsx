import React from "react"
import "./index.css"
import { LargeIconLineItem } from "../components/LargeIconLineItem/LargeIconLineItem"
import { List } from "../components/List/List"
import { PageTemplate } from "../components/PageTemplate/PageTemplate"
import items from "./../items.json"
import { LinksSection } from "../components/LinksSection/LinksSection"

const skills = [
  items.Projects.map((item) => item.items.map((project) => project.tags)),
  items.Current.map((item) => item.items.map((project) => project.tags)),
  items.Achievements.map((item) => item.items.map((project) => project.tags)),
].flat(3)
// Count occurances of each skill
const skillCounts = skills.reduce((acc: { [key: string]: number }, skill: string) => {
  if (acc[skill]) {
    acc[skill]++
  } else {
    acc[skill] = 1
  }
  return acc
}, {})
const skillsSorted = Object.keys(skillCounts).sort((a, b) => skillCounts[b] - skillCounts[a])
const skillsFiltered = skillsSorted.filter((skill) => skillCounts[skill] > 1)

export default function About() {
  return (
    <PageTemplate>
      <div style={{ marginBottom: "35px" }}>
        <div style={{ fontWeight: "bold", marginBottom: "15px" }}>About</div>
        Hi, I'm Stephan. I enjoy solving problems by shipping products with an obsessive attention to detail. I am
        interested in decentralisation and how distributed technology can be leveraged to improve the lives of billions
        of people.
      </div>

      <div style={{ marginBottom: "35px" }}>
        <div style={{ fontWeight: "bold", marginBottom: "15px" }}>Skills</div>
        <div>{skillsFiltered.join(" • ")}</div>
      </div>

      <LinksSection links={items.Links} />
    </PageTemplate>
  )
}
