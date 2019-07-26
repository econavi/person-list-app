import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'


class Input extends Component {
  
    constructor(props) {
      super(props)
      this.state = {
        value: this.props.value,
      }
    }
    
    handleChange = (event) => {
      this.props.onChange(event.target)
      this.setState({
        value: event.target.value,
      })
    }
  
    render() {
      const { type, name, error } = this.props
      const inputClasses = classnames({
        'form-control': true,
        'is-invalid': !!error,
      })
      
      return (
        <div className="form-group">
          <input 
            type={type}
            name={name}
            value={this.state.value}
            onChange={this.handleChange}
            className={inputClasses}
          />
          { error && <span className="text-danger">{error}</span> }
        </div>
      )
    }
}

Input.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string,
}

Input.defaultProps = {
  type: 'text',
}

export default Input
