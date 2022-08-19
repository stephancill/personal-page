import React from "react"
import { IItem } from "../../interfaces/IItem"
import ExternalLink from "../../images/external-link.svg"

interface ILineItemHeadingProps {
  item: IItem
}

export const LineItemHeading = ({ item }: ILineItemHeadingProps) => {
  return (
    <div style={{ display: "flex", fontWeight: "500", marginBottom: "-8px" }}>
      {item.icon && (
        <img
          style={{ width: "16px", height: "16px", marginRight: "5px", marginTop: "2px" }}
          src={item.icon}
          alt={item.heading}
        />
      )}
      <span style={{ flexGrow: "1" }}>{item.heading}</span>
      {item.link && (
        <span>
          <ExternalLink />
        </span>
      )}
    </div>
  )
}
