import React from "react"
import { LargeIconLineItem } from "../components/LargeIconLineItem/LargeIconLineItem"
import { List } from "../components/List/List"
import { PageTemplate } from "../components/PageTemplate/PageTemplate"
import items from "./../items.json"

export default function Projects() {
  return (
    <PageTemplate>
      <List
        heading="Achievements"
        years={items.Achievements}
        lineItemBuilder={(item, index) => {
          return (
            <div style={{ paddingBottom: "26px" }}>
              <LargeIconLineItem item={item} key={index} />
            </div>
          )
        }}
      />
    </PageTemplate>
  )
}
