import React from "react"
import { IItem } from "../../interfaces/IItem"
import { LineItemHeading } from "../LineItemHeading/LineItemHeading"

interface ILineItemProps {
  item: IItem
}

export const LineItem = ({ item }: ILineItemProps) => {
  return (
    <div>
      {item.link ? (
        <a
          style={{ textDecoration: "none", color: "black" }}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <LineItemHeading item={item} />
        </a>
      ) : (
        <LineItemHeading item={item} />
      )}
      <div className="subheading" style={{ marginBottom: "4px" }}>
        {item.subheading}
      </div>
      {item.extra && (
        <div className="subheading" style={{ fontStyle: "italic" }}>
          {item.extra}
        </div>
      )}
    </div>
  )
}
