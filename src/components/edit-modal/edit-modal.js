import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { closeModal } from '../../actions'

import Input from '../input'


class EditModal extends Component {
    
  close = () => {
    this.props.closeModal()
  }
  
  onSubmit = (e) => {
    e.preventDefault()
    this.props.onChangeData(e.target)
    this.props.closeModal()
  }
  
  render() {
    const { id, name, surname, position } = this.props.data
    
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div className="modal-body">
            <p>ID: {id}</p>
              <Input type="hidden" name="id" value={String(id)} />
              <Input name="name" value={name} />
              <Input name="surname" value={surname} />
              <Input name="position" value={position} />
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={this.close}>Отмена</button>
            <button className="btn btn-primary">Сохронить</button>
          </div>
        </form>
      </div>
    )
  }
}

EditModal.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(EditModal)
