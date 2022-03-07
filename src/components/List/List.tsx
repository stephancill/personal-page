import React from "react"
import { IItem } from "../../interfaces/IItem"
import { LineItem } from "../LineItem/LineItem"

interface IListProps {
  heading: string
  items: IItem[]
}

export const List = ({heading, items}: IListProps) => {
  return <div style={{marginTop: "37px"}}>
    <div style={{fontWeight: "bold", marginBottom: "19px"}}>{heading}</div>
    <div>
      {items.map((item, index) => {
        return <div key={index} style={{marginBottom: "29px"}}><LineItem item={item}/></div>
      })}
    </div>
  </div>
}