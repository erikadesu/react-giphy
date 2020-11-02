import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import '../assets/stylesheets/application.scss';

// const Hello = ({ name }) => {
//   return (
//     <div>
//       Hello,
//       {name}
//     </div>
//   );
// };

class Hello extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false
    };
  }

  handleClick = () => {
    // change the state
    this.setState({
      clicked: !this.state.clicked
  });
}
//to change the state i can only do that thru the method setState()
//i have to use the fat arrow function to bind my this to an instance of my component

  render() {
    //its goal is to build and return html
    return (
      <div className ={this.state.clicked ? 'clicked' : null}
      onClick={this.handleClick}>
      Hello {this.props.name} </div>
    )
  }
}
//the event here is click so for react all you need is to add an "on" before the name of the event ex: onClick

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(<Hello name="erika" />, root);
}
