import React from "react";

import Title from "./Header/Title";

export default class Header extends React.Component {
  handleChangeOfHeadery(e) {
    const title = e.target.value;
    this.props.changeTitleOfLayout(title);
  }

  render() {
    return (
      <div>
        <Title titleOfTitle={this.props.titleOfHeader} />
        <input value={this.props.titleOfHeader} onChange={this.handleChangeOfHeadery.bind(this)} />
      </div>
    );
  }
}
