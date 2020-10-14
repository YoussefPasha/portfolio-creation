import React, { Component } from "react";
import Link from "next/link";
import "../../styles/main.scss";
class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <Link href="/">
          <a className="ChengingColor">Home</a>
        </Link>
        <br />
        <Link href="/about">
          <a>About</a>
        </Link>
        <br />

        <Link href="/blog">
          <a>Blog</a>
        </Link>
        <br />

        <Link href="/cv">
          <a>CV</a>
        </Link>
        <br />

        <Link href="/portfolios">
          <a>Portfolios</a>
        </Link>
        <style jsx>
          {`
            a {
              font-size: 20px;
            }
          `}
        </style>
      </React.Fragment>
    );
  }
}
export default Header;
