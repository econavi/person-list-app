import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Input extends Component {
    state = {
      value: this.props.value,
    }
    
    handleChange = ({ target }) => {
      const { value } = target
      this.setState({
        value,
      })
    }
  
    render() {
      const { type, name } = this.props
      return (
        <div className="form-group">
          <input 
            type={type}
            name={name}
            value={this.state.value}
            onChange={this.handleChange}
            className="form-control"
          />
        </div>
      )
    }
}

Input.propTypes = {
  value: PropTypes.string.isRequired,
  type: PropTypes.string,
}

Input.defaultProps = {
  type: 'text',
}

export default Input
