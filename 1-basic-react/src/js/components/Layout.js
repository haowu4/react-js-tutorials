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

  changeTitleOfLayout(some_new_value) {
    this.setState({title: some_new_value});
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
