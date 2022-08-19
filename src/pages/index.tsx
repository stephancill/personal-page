import * as React from "react"
import "./index.css"
import { Header } from "../components/Header/Header"
import { List } from "../components/List/List"
import items from "./../items.json"
import { Helmet } from "react-helmet"
import { LineItem } from "../components/LineItem/LineItem"
import { LargeIconLineItem } from "../components/LargeIconLineItem/LargeIconLineItem"

const IndexPage = () => {
  console.log(Object.keys(items.Current[0]))
  return (
    <div style={{ display: "flex" }}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Stephan</title>
        <script async defer src="https://beampipe.io/js/tracker.js" data-beampipe-domain="stephancill.co.za"></script>
      </Helmet>
      <div style={{ marginLeft: "auto", marginRight: "auto", maxWidth: "600px" }}>
        <div className="content">
          <Header />
          <List
            heading="Current"
            years={items.Current}
            lineItemBuilder={(item, index) => {
              return (
                <div style={{ paddingBottom: "35px" }}>
                  <LineItem item={item} key={index} />
                </div>
              )
            }}
          />

          <List
            heading="Projects"
            years={items.Projects}
            lineItemBuilder={(item, index) => {
              return (
                <div style={{ paddingBottom: "26px" }}>
                  <LargeIconLineItem item={item} key={index} />
                </div>
              )
            }}
          />

          <div>
            <div style={{ fontWeight: "500", marginBottom: "15px" }}>Links</div>
            <div>
              {items.Links.map(({ title, username, link }, index) => {
                return (
                  <div key={index} style={{ display: "flex", paddingBottom: "15px" }}>
                    <div
                      style={{
                        maxWidth: "200px",
                        minWidth: "100px",
                        width: "10vw",
                        color: "rgba(49, 49, 49, 0.8)",
                        flexShrink: "0",
                      }}
                    >
                      {title}
                    </div>
                    <div>
                      <a href={link} target="_blank" rel="noopener noreferrer">
                        {username}
                      </a>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* <List heading="Past" items={items.Past} /> */}
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

export default IndexPage
