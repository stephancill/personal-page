import React from "react"
import * as style from "./Header.module.css"
import TwitterIcon from "../../images/twitter.svg"
import GithubIcon from "../../images/github.svg"
import LinkedinIcon from "../../images/linkedin.svg"
import { StaticImage } from "gatsby-plugin-image"

export const Header = () => {
  return (
    <div style={{ marginBottom: "35px" }}>
      <div style={{ display: "flex" }}>
        <StaticImage src="../../images/avatar.jpg" className={style.avatar} alt="avatar" />
        <div style={{ marginLeft: "10px" }}>
          <div className={`${style.line}`} style={{ fontSize: "24px" }}>
            Stephan Cilliers
          </div>
          <div className={`${style.line}`} style={{ color: "rgba(49, 49, 49, 1)" }}>
            Builder, thinker, tech optimist
          </div>
          <div className={`${style.line}`} style={{ color: "rgba(135, 135, 135, 1)" }}>
            @stephancill
          </div>
        </div>
      </div>
    </div>
  )
}
