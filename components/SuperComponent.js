import React, { Component } from "react";

class SuperComponent extends Component {
  constructor() {
    super();
    this.someVariable = "just some variable";
  }
  alertName(title) {
    alert(title);
  }

  render() {
    return (
      <div>
        <h1>I am blog page</h1>
      </div>
    );
  }
}
export default SuperComponent;
