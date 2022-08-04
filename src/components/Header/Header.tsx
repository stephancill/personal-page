import React from "react"
import * as style from "./Header.module.css"
import TwitterIcon from "../../images/twitter.svg"
import GithubIcon from "../../images/github.svg"
import LinkedinIcon from "../../images/linkedin.svg"

export const Header = () => {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <div className={style.avatar}></div>
        <div style={{ marginLeft: "10px" }}>
          <div style={{ fontSize: "24px" }}>Stephan</div>
          <div className="subheading">@stephancill</div>
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
        Builder, thinker, tech optimist. Interested in <i>decentralized technology</i> and{" "}
        <i>personal crypto hardware</i>.
      </div>
    </div>
  )
}
