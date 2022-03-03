import React from 'react'
import ReactDOM from 'react-dom'

import classes from './Modal.module.css'

const Backdrop = () => <div className={classes.backdrop} />

const ModalOverlay = ({ children }) => (
  <div className={classes.modal}>
    <div className={classes.content}>{children}</div>
  </div>
)

const portalElement = document.getElementById('overlays')

const Modal = ({ children }) => (
  <>
    {ReactDOM.createPortal(<Backdrop />, portalElement)}
    {ReactDOM.createPortal(
      <ModalOverlay>{children}</ModalOverlay>,
      portalElement
    )}
  </>
)

export default Modal
