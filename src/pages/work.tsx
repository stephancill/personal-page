import React from "react"
import { LineItem } from "../components/LineItem/LineItem"
import { List } from "../components/List/List"
import { PageTemplate } from "../components/PageTemplate/PageTemplate"
import items from "./../items.json"

export default function Work() {
  return (
    <PageTemplate>
      <List
        heading="Experience"
        years={items.Current}
        lineItemBuilder={(item, index) => {
          return (
            <div style={{ paddingBottom: "35px" }}>
              <LineItem item={item} key={index} />
            </div>
          )
        }}
      />
    </PageTemplate>
  )
}
