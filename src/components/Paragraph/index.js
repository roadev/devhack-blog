import React, { Component } from 'react';

class Paragraph extends Component {

  state = {
    color: ''
  };

  onColorChange = () => {
    const color = this.state.color === 'red' ? 'blue' : 'red';
    this.setState({ color  });
  }

  render() {

    const { styles, body } = this.props;
    const { color } = this.state;
    console.log(color);

    return (
      <h1
        style={{ ...styles, color: color, fontSize: '60px' }}
        onClick={this.onColorChange}
      >
        {body}
      </h1>
    );
  }

}

export default Paragraph;
