import * as React from "react"
import "./index.css"
import { Header } from "../components/Header/Header"
import { List } from "../components/List/List"
import items from "./../items.json"
import { Helmet } from "react-helmet"

const IndexPage = () => {
  return (
    <div style={{display: "flex"}}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Stephan</title>
      </Helmet>
      <div style={{marginLeft: "auto", marginRight: "auto", maxWidth: "390px"}}>
        <div style={{marginTop: "120px", marginBottom: "120px"}}>
          <Header/>
          <List heading="Current" items={items.Current}/>
          <List heading="Past" items={items.Past}/>
        </div>
        <div style={{textAlign: "center"}}>© 2022</div>
      </div>
    </div>
  )
}

export default IndexPage
