import React, { Component } from "react";
import Link from "next/link";

class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <Link href="/">
          <a>Home</a>
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
      </React.Fragment>
    );
  }
}
export default Header;
