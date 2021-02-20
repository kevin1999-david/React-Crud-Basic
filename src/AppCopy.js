import React from "react";
import './App.css';



// function HelloWorld(props) {
//   console.log(props);
//   return (
//     <div id="hello">
//       <h3>Subtitle: {props.subtitle}</h3>
//       {props.myText}</div>
//   );
// }

// class App extends React.Component{
//   render(){
//     return <div>This is my compoenet</div>
//   }
// }


class HelloWorld extends React.Component {

  state = {
    show: true
  }


  // toggleShow() {
  //   this.setState({ show: false })
  // }

  toggleShow = () => {
    this.setState({ show: !this.state.show })
  }

  viewThis = () => {
    console.log(this)
  }

  render() {
    if (this.state.show) {
      return (
        <div id="hello">
          <h3>Subtitle: {this.props.subtitle}</h3>
          {this.props.myText}
          <button onClick={this.toggleShow}>Change state</button>
          <div>Show this class: <button onClick={this.viewThis}>View this</button></div>
        </div>

      );
    } else {
      return (
        <div>
          <h1>There are no props</h1>
          <button onClick={this.toggleShow}>Change state</button>
        </div>
      )
    }
  }
}

function App() {
  return (
    //Props:
    <div>This is my component:
      <HelloWorld myText="Hello Fazt" subtitle="LoremIpsum" />
      <HelloWorld myText="Hello Kevin" subtitle="Mariana x" />
      <HelloWorld myText="Hello Willi" subtitle="Component x" /></div>
  );
}

export default App;