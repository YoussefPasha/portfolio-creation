import React, { Component } from "react";
import Link from "next/link";
class Home extends Component {
  render() {
    return (
      <div>
        <h1> I am Indedx Paga</h1>
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
      </div>
    );
  }
}
export default Home;
