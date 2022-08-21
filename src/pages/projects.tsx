import React from "react"
import { LargeIconLineItem } from "../components/LargeIconLineItem/LargeIconLineItem"
import { LineItem } from "../components/LineItem/LineItem"
import { List } from "../components/List/List"
import { PageTemplate } from "../components/PageTemplate/PageTemplate"
import items from "./../items.json"

export default function Projects() {
  return (
    <PageTemplate>
      <List
        heading="Projects"
        years={items.Projects}
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
