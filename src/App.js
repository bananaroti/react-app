import "./App.css";
import { Component } from "react";
import Subject from "./components/Subject";
import Toc from "./components/TOC";
import Content from "./components/Content";

class App extends Component {
  // 컴포넌트가 실행돨 때 컨스트럭터가 실행되서 초기화를 담당함
  constructor(props) {
    super(props);

    this.state = {
      Subject: {
        title: "WEB",
        sub: "World wide Web!",
      },
      Toc: [
        { id: 1, title: "HTML", desc: "HTML is for information" },
        { id: 2, title: "CSS", desc: "CSS is for design" },
        { id: 3, title: "JavaScript", desc: "JavaScript is for interactive" },
      ],
      Content: {
        title: "HTML",
        desc: "HTML is HyperText Markup Language.",
      },
    };
  }
  render() {
    return (
      <div className="App">
        <Subject
          title={this.state.Subject.title}
          sub={this.state.Subject.sub}
        ></Subject>
        <Toc data={this.state.Toc}> </Toc>
        <Content
          title={this.state.Content.title}
          desc={this.state.Content.desc}
        ></Content>
      </div>
    );
  }
}

export default App;
