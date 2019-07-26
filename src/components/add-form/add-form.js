import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { closeModal } from '../../actions'

import Input from '../input'

class AddForm extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      surname: '',
      position: '',
      errors: {
        name: { mass: '', valid: true },
        surname: { mass: '', valid: true },
        position: { mass: '', valid: true },
      }
    }
  }
  
  validateForm = () => {
    const { name, surname, position } = this.state
    if (!name || !surname || !position) {
      this.setState((prevState) => {
        return {
          errors: {
            name: { valid: !!prevState.name, mass: 'Укажите имя' },
            surname: { valid: !!prevState.surname, mass: 'Укажите фамилию' },
            position: { valid: !!prevState.position, mass: 'Укажите должность' },
          }
        }
      })
      return false
    }
    return true
  }

  onCancel = () => {
    this.props.closeModal()
  }
  
  onSave = (e) => {
    e.preventDefault()
    
    if (!this.validateForm()) {
      return
    }
    
    const { name, surname, position } = this.state
    this.props.addNewData({
      name, surname, position
    })
    
    this.props.closeModal()
  }
  
  inputOnChange = (input) => {
    const { name, value } = input
    this.setState({ [name]: value })
  }
  
  render() {
    const { name, surname, position, errors } = this.state
    return (
      <div>
        <form>
          <div className="modal-body">
            <Input error={!errors.name.valid ? errors.name.mass : null} onChange={this.inputOnChange} name="name" value={name} />
            <Input error={!errors.surname.valid ? errors.surname.mass : null} onChange={this.inputOnChange} name="surname" value={surname} />
            <Input error={!errors.position.valid ? errors.position.mass : null} onChange={this.inputOnChange} name="position" value={position} />
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={this.onCancel}>Отмена</button>
            <button className="btn btn-primary" onClick={this.onSave}>Добавить</button>
          </div>
        </form>
      </div>
    )
  }
}

AddForm.propTypes = {
  closeModal: PropTypes.func.isRequired,
  addNewData: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = {
  closeModal,
}

export default connect(mapStateToProps, mapDispatchToProps)(AddForm)
