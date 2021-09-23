import "./App.css";
import { Component } from "react";

class Subject extends Component {
  render() {
    return (
      <header>
        <h1>WEB</h1>
        <p>World wide web!</p>
      </header>
    );
  }
}

class Toc extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <a href="1.html">HTML</a>
          </li>
          <li>
            <a href="2.html">CSS</a>
          </li>
          <li>
            <a href="3.html">JavaScript</a>
          </li>
        </ul>
      </nav>
    );
  }
}

class Content extends Component {
  render() {
    return (
      <article>
        <h2>HTML</h2>
        <p>HTML is HyperText Markup Language.</p>
      </article>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Subject></Subject>
        <Toc></Toc>
        <Content></Content>
      </div>
    );
  }
}

export default App;
