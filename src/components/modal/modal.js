import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { closeModal } from '../../actions/'

import './modal.css'

class Modal extends Component {
  
  close = () => {
    const { closeModal } = this.props
    closeModal();
  }
  
  render() {
    const { 
      modalIsOpen, 
      modalTitle,
      modalContent, 
    } = this.props

    if (!modalIsOpen) return null

    return (
      <div className="modal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{modalTitle}</h5>
              <button className="close" onClick={this.close}>
                <span>&times;</span>
              </button>
            </div>
            <div className="modal-body">
              {modalContent}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  modalIsOpen: PropTypes.bool,
  modalTitle: PropTypes.string,
  modalContent: PropTypes.element,
}

const mapStateToProps = ({ modalIsOpen, modalTitle, modalContent }) => {
  return {
    modalIsOpen,
    modalTitle,
    modalContent,
  }
}

const mapDispatchToProps = {
  closeModal,
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal)
