import * as React from "react";
import "./index.css";
import { Header } from "../components/Header/Header";
import { List } from "../components/List/List";
import items from "./../items.json";
import { Helmet } from "react-helmet";

const IndexPage = () => {
  return (
    <div style={{ display: "flex" }}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Stephan</title>
        <script
          async
          defer
          src="https://beampipe.io/js/tracker.js"
          data-beampipe-domain="stephancill.co.za"
        ></script>
      </Helmet>
      <div
        style={{ marginLeft: "auto", marginRight: "auto", maxWidth: "390px" }}
      >
        <div className="content">
          <Header />
          <List heading="Current" items={items.Current} />
          <List heading="Past" items={items.Past} />
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
  );
};

export default IndexPage;
