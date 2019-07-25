import React, { Component } from 'react'
import { connect } from 'react-redux'
import { closeModal } from '../../actions/'
 
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
      <div className="modal" style={{ display: 'block' }}>
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
