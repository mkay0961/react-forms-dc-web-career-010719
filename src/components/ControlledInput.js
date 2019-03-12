// // Code ControlledInput Component Here
// import React from 'react';
//
// export default class Form extends React.Component {
//   state = {
//     firstName: "John",
//     lastName: "Henry"
//   }
//   handleFirstNameChange = event => {
//   this.setState({
//     firstName: event.target.value
//   })
// }
//
// handleLastNameChange = event => {
//   this.setState({
//     lastName: event.target.value
//   })
// }
//
//   render() {
//     return (
//       <form>
//       <input type="text" id="firstName" onChange={event => this.handleFirstNameChange(event)} value={this.state.firstName} />
// <input type="text" id="lastName" onChange={event => this.handleLastNameChange(event)} value={this.state.lastName} />
//       </form>
//     )
//   }
// }
import React from 'react';

class ControlledInput extends React.Component {
  state = {
    value: '',
  }
  handleSubmit = event => {
    event.preventDefault()
    const firstName = event.target.children[0].value
    const lasstName = event.target.children[1].value
    this.sendFormDataSomewhere({ firstName, lastName })
  }

  handleChange = event => {
    this.setState({
      value: event.target.value,
    });
  }

  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

export default ControlledInput;
