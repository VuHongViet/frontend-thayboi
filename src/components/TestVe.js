import React, { Component } from "react";
import { Paper, Set } from "react-raphael";
export class TestVe extends Component {
  render() {
    return (
      <Paper
        className={"paper"}
        width={this.state.paperWidth}
        height={this.state.paperHeight}
      >
        <Set>{this.drawTasks()}</Set>
      </Paper>
    );
  }
}

export default TestVe;
