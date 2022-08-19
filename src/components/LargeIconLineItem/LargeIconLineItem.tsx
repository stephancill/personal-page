import React from "react"
import { IItem } from "../../interfaces/IItem"
import { LineItemHeading } from "../LineItemHeading/LineItemHeading"
import ReactMarkdown from "react-markdown"
import ExternalLink from "../../images/external-link.svg"
import * as style from "./../LineItem/LineItem.module.css"

interface ILargeLineItemProps {
  item: IItem
}

export const LargeIconLineItem = ({ item }: ILargeLineItemProps) => {
  const headingElement = (
    <div style={{ marginBottom: "-8px" }}>
      {item.icon && (
        <img
          style={{ width: "24px", height: "24px", marginRight: "5px", marginTop: "2px", marginBottom: "11px" }}
          src={item.icon}
          alt={item.heading}
        />
      )}
      <div style={{ display: "flex", fontWeight: "500" }}>
        <span style={{ flexGrow: "1" }}>{item.heading}</span>
        {item.link && (
          <span>
            <ExternalLink />
          </span>
        )}
      </div>
    </div>
  )
  return (
    <div className={style.item}>
      <div className={style.line}>
        {item.link ? (
          <a style={{ textDecoration: "none" }} href={item.link} target="_blank" rel="noopener noreferrer">
            {headingElement}
          </a>
        ) : (
          headingElement
        )}
      </div>

      {item.body && (
        <div className={`${style.body} ${style.line}`}>
          <ReactMarkdown>{item.body}</ReactMarkdown>
        </div>
      )}
      {item.tags && <div className={`${style.tags} ${style.line}`}>{item.tags.join(" • ")}</div>}
    </div>
  )
}
