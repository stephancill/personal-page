import { Link } from "gatsby"
import React from "react"
import { Helmet } from "react-helmet"
import { Header } from "../Header/Header"
import items from "./../../items.json"

export const PageTemplate = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <div style={{ display: "flex" }}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Stephan</title>
        <script async defer src="https://beampipe.io/js/tracker.js" data-beampipe-domain="stephancill.co.za"></script>
      </Helmet>
      <div style={{ marginLeft: "auto", marginRight: "auto", maxWidth: "600px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "35px" }}>
          <Link to="/">Home</Link>
          <Link to="/work">Work</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/achievements">Achievements</Link>
        </div>
        <div className="content">
          <Header />

          {children}
        </div>
        <div style={{ textAlign: "center" }}>
          <a
            style={{ color: "black" }}
            href="http://github.com/stephancill/personal-page"
            target="_blank"
            rel="noopener noreferrer"
          >
            src
          </a>{" "}
          © 2022
        </div>
      </div>
    </div>
  )
}
