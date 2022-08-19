import React from "react"
import * as style from "./Header.module.css"
import TwitterIcon from "../../images/twitter.svg"
import GithubIcon from "../../images/github.svg"
import LinkedinIcon from "../../images/linkedin.svg"

export const Header = () => {
  return (
    <div style={{ marginBottom: "35px" }}>
      <div style={{ display: "flex" }}>
        <img src="https://metadata.ens.domains/mainnet/avatar/stephancill.eth" className={style.avatar}></img>
        <div style={{ marginLeft: "10px" }}>
          <div className={`${style.line}`} style={{ fontSize: "24px" }}>
            Stephan Cilliers
          </div>
          <div className={`${style.line} ${style.subheading}`}>Builder, thinker, tech optimist</div>
          <div className={`${style.line} ${style.subheading}`}>@stephancill</div>
          <div style={{ marginTop: "6px" }}>
            <a href="https://twitter.com/stephancill" target="_blank" rel="noopener noreferrer">
              <span style={{ marginRight: "5px" }}>
                <TwitterIcon />
              </span>
            </a>
            <a href="https://github.com/stephancill" target="_blank" rel="noopener noreferrer">
              <span>
                <GithubIcon />
              </span>
            </a>
            <a href="https://linkedin.com/in/stephancill" target="_blank" rel="noopener noreferrer">
              <span style={{ marginLeft: "6px" }}>
                <LinkedinIcon />
              </span>
            </a>
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
