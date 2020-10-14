import React, { Component } from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import SuperComponent from "../components/SuperComponent";
class Home extends SuperComponent {
  render() {
    return (
      <BaseLayout>
        <h1>Index</h1>
      </BaseLayout>
    );
  }
}
export default Home;
