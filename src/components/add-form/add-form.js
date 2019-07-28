import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { closeModal } from '../../actions'

import Input from '../input'

import './add-form.css'

class AddForm extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      surname: '',
      position: '',
      info: '',
      errors: {
        name: { mess: '', valid: true },
        surname: { mess: '', valid: true },
        position: { mess: '', valid: true },
      }
    }
  }
  
  validateForm = () => {
    const { name, surname, position } = this.state
    if (!name || !surname || !position) {
      this.setState((prevState) => {
        return {
          errors: {
            name: { valid: !!prevState.name, mess: 'Укажите имя' },
            surname: { valid: !!prevState.surname, mess: 'Укажите фамилию' },
            position: { valid: !!prevState.position, mess: 'Укажите должность' },
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
    
    const { name, surname, position, info } = this.state
    this.props.addNewData({
      name, surname, position, info,
    })
    
    this.props.closeModal()
  }
  
  inputOnChange = (input) => {
    const { name, value } = input
    this.setState({ [name]: value })
  }
  
  textareaOnChange = (event) => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }
  
  render() {
    const { name, surname, position, info, errors } = this.state
    return (
      <div className="add-form">
        <form>
          <div className="modal-body">
            <Input error={!errors.name.valid ? errors.name.mess : null} onChange={this.inputOnChange} name="name" value={name} placeholder="Имя" />
            <Input error={!errors.surname.valid ? errors.surname.mess : null} onChange={this.inputOnChange} name="surname" value={surname} placeholder="Фамилия" />
            <Input error={!errors.position.valid ? errors.position.mess : null} onChange={this.inputOnChange} name="position" value={position} placeholder="Должность" />
            <textarea name="info" value={info} onChange={this.textareaOnChange} placeholder="Описание" className="form-control" />
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
