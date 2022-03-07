import React from "react"
import { IItem } from "../../interfaces/IItem"
import ExternalLink from "../../images/external-link.svg"

interface ILineItemHeadingProps {
  item: IItem
}

export const LineItemHeading = ({item}: ILineItemHeadingProps) => {
  return <div style={{display: "flex", marginBottom: "6px"}}>
  <span style={{flexGrow: "1"}}>{item.heading}</span>
  {item.link && <span><ExternalLink/></span>}
</div>
}