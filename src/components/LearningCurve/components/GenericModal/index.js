import React from 'react'
import classnames from 'classnames'

import Modal from 'react-bootstrap/lib/Modal'

import style from './style.css'

export default function GenericModal (props) {
  return (
    <div>
      <Modal show={true} className={classnames(style.modalContainer)}>
        <Modal.Header className={classnames('modal-header', style.headerContainer)}>
          <Modal.Title>This is an example generic modal with a title:</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className={style.content} dangerouslySetInnerHTML={{__html: props.data}}>
          </p>
        </Modal.Body>
        <Modal.Footer className={classnames('modal-footer', style.footerContainer)}>
          <button
            aria-label="Close message"
            className={classnames('btn-cdl-main')}
            onClick={props.onClick}
          >
            OK
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

GenericModal.propTypes = {
  onClick: React.PropTypes.func.isRequired,
  data: React.PropTypes.string.isRequired
}
