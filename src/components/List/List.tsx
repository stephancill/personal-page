import React from "react"
import { IItem } from "../../interfaces/IItem"
import { LineItem } from "../LineItem/LineItem"

interface IListProps {
  heading: string
  years: {
    year: string
    items: IItem[]
  }[]
  lineItemBuilder: (item: IItem, index: number) => JSX.Element
}

export const List = ({ heading, years, lineItemBuilder }: IListProps) => {
  return (
    <div>
      <div style={{ fontWeight: "500", marginBottom: "15px" }}>{heading}</div>
      <div>
        {years.map((yearItem, index) => {
          return (
            <div style={{ display: "flex" }} key={index}>
              <div
                style={{
                  maxWidth: "200px",
                  minWidth: "100px",
                  width: "10vw",
                  color: "rgba(49, 49, 49, 0.8)",
                  flexShrink: "0",
                }}
              >
                {yearItem.year}
              </div>
              <div style={{}}>
                {yearItem.items.map((item, index) => {
                  return lineItemBuilder(item, index)
                })}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
