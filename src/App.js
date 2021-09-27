import "./App.css";
import { Component } from "react";
import Subject from "./components/Subject";
import Toc from "./components/TOC";
import Content from "./components/Content";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Subject title="WEB" sub="World wide web!"></Subject>
        <Toc></Toc>
        <Content
          title="HTML"
          desc="HTML is HyperText Markup Language."
        ></Content>
      </div>
    );
  }
}

export default App;
