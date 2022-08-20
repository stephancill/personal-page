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
      <div style={{ marginTop: "20px" }}>
        <div style={{ fontWeight: "500", marginBottom: "15px" }}>About</div>
        Hi, I'm Stephan. I enjoy solving problems by shipping products with an obsessive attention to detail. I am
        interested in decentralisation and how distributed technology can be leveraged to improve the lives of billions
        of people.
      </div>
    </div>
  )
}
