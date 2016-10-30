import React from "react";

import Footer from "./Footer";
import Header from "./Header";

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Welcome",
    };
  }

  changeTitleOfLayout(title) {
    this.setState({title});
  }

  render() {
    return (
      <div>
        <Header changeTitleOfHeader={this.changeTitleOfLayout.bind(this)} titleOfHeader={this.state.title} />
        <Header changeTitleOfHeader={this.changeTitleOfLayout.bind(this)} titleOfHeader={"MyOtherTitle"} />
        <Footer />
      </div>
    );
  }
}
