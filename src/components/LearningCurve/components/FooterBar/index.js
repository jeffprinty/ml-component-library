import React from 'react'
import classnames from 'classnames'

import Grid from 'react-bootstrap/lib/Grid'

import style from './style.css'

export default function FooterBar (props) {

  let styleContainer

  if (props.legacyEbook === true) {
    styleContainer = style.legacySplitContainer
  }
  else if (props.splitPane) {
    styleContainer = style.splitContainer
  }
  else {
    styleContainer = style.container
  }
  return (
    <div className={classnames(styleContainer, props.className)}>
      <Grid>
        {props.children}
      </Grid>
    </div>
  )
}
FooterBar.propTypes = {
  children: React.PropTypes.node,
  className: React.PropTypes.string,
  splitPane: React.PropTypes.bool,
  legacyEbook: React.PropTypes.bool
}

export function CenterRoundButton (props) {
  const {children, className, ...restProps} = props
  return (
    <button
      {...restProps}
      className={classnames(style.centerRoundButton, className)}
    >
      {children}
    </button>
  )
}
CenterRoundButton.propTypes = {
  children: React.PropTypes.node,
  className: React.PropTypes.string
}
