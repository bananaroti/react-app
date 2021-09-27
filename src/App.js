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
      mode: "welcome",
      Subject: {
        title: "WEB",
        sub: "World wide Web!",
      },
      welcome: {
        title: "Welcome",
        desc: "Hello, React!!",
      },
      Toc: [
        { id: 1, title: "HTML", desc: "HTML is for information" },
        { id: 2, title: "CSS", desc: "CSS is for design" },
        { id: 3, title: "JavaScript", desc: "JavaScript is for interactive" },
      ],
    };
  }
  render() {
    var _title,
      _desc = null;
    if (this.state.mode === "welcome") {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if (this.state.mode === "read") {
      _title = this.state.Toc[0].title;
      _desc = this.state.Toc[0].desc;
    }
    return (
      <div className="App">
        <Subject
          title={this.state.Subject.title}
          sub={this.state.Subject.sub}
        ></Subject>
        <Toc data={this.state.Toc}> </Toc>
        <Content title={_title} desc={_desc}></Content>
      </div>
    );
  }
}

export default App;
