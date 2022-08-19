import React from "react"
import { IItem } from "../../interfaces/IItem"
import { LineItemHeading } from "../LineItemHeading/LineItemHeading"
import ReactMarkdown from "react-markdown"
import * as style from "./LineItem.module.css"

interface ILineItemProps {
  item: IItem
}

export const LineItem = ({ item }: ILineItemProps) => {
  return (
    <div className={style.item}>
      <div className={style.line}>
        {item.link ? (
          <a style={{ textDecoration: "none" }} href={item.link} target="_blank" rel="noopener noreferrer">
            <LineItemHeading item={item} />
          </a>
        ) : (
          <LineItemHeading item={item} />
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
