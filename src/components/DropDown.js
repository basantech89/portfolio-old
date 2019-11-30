import React, { Component } from 'react';
import '../assets/styles/components/_dropdown.scss';

export default class DropDown extends Component {
  state = {
    display: false,
  };
  showDropdown = event => {
    event.preventDefault();
    this.setState({ display: true });
    document.addEventListener('click', this.hideDropdown);
  };
  hideDropdown = event => {
    event.preventDefault();
    this.setState({ display: false });
    document.removeEventListener('click', this.hideDropdown);
  }
  render() {
    const ShowDropdown = () => {
      if (this.state.display) {
        return (
          <ul>
            <li> <a className="active" href="#projects"> Projects </a> </li> 
            <li> <a href="#skills"> Skills </a> </li> 
          </ul>
        )
      } else {
        return <div/>
      }
    };
    return (
      <div className="dropdown">
        <div className="button" onClick={this.showDropdown}> Basant@Machine
          <svg aria-hidden="true" focusable="false"
               className="icon" role="img" xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 320 512">
            <path fill="currentColor"
                  d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"/>
          </svg>
          ~/{this.props.cwd}
        </div>
        <ShowDropdown/>
      </div>
    )
  }
}
