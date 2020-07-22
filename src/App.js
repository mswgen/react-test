import React from 'react';
import './App.css';
class Users extends React.Component {
  constructor(...args) {
    super (...args);
    this.state = {
      fool: this.props.isFool
    };
  }
  render () {
    return (
      <div>
        <h2>{this.props.nick}</h2>
    <button onClick={() => {
      let x = this.state.fool
      if (x === 'yes') {
        this.setState({fool: 'no'});
      } else {
        this.setState({fool: 'yes'});
      }
    }}>{(() => {
      if (this.state.fool === 'yes') {
        return '바보'
      } else {
        return '천재';
      }
      })()}</button>
      </div>
    )
  }
}
export default Users;
