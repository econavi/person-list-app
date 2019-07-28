import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { closeModal } from '../../actions'

import Input from '../input'

import './edit-form.css'


class EditForm extends Component {
  
  constructor(props) {
    super(props)
    const { id, name, surname, position, info } = this.props.data
    this.state = {
      id,
      name,
      surname,
      position,
      info,
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
    
    const { id, name, surname, position, info } = this.state
    this.props.onChangeData({
      id, name, surname, position, info,
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
    const { id, name, surname, position, info, errors } = this.state
    return (
      <div className="edit-form">
        <form>
          <div className="modal-body">
            <p>ID: {id}</p>
            <Input error={!errors.name.valid ? errors.name.mess : null} onChange={this.inputOnChange} name="name" value={name} placeholder="Имя" />
            <Input error={!errors.surname.valid ? errors.surname.mess : null} onChange={this.inputOnChange} name="surname" value={surname} placeholder="Фамилия" />
            <Input error={!errors.position.valid ? errors.position.mess : null} onChange={this.inputOnChange} name="position" value={position} placeholder="Должность" />
            <textarea name="info" value={info} onChange={this.textareaOnChange} placeholder="Описание" className="form-control" />
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={this.onCancel}>Отмена</button>
            <button className="btn btn-primary" onClick={this.onSave}>Сохронить</button>
          </div>
        </form>
      </div>
    )
  }
}

EditForm.propTypes = {
  closeModal: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
  onChangeData: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = {
  closeModal,
}

export default connect(mapStateToProps, mapDispatchToProps)(EditForm)
