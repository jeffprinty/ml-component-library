import React from 'react'
import classnames from 'classnames'

import style from './style.css'

export default function Clickable (props) {
  if (props.disabled) {
    return (
      <span {...props}>
        {props.children}
      </span>
    )
  }
  else {
    return (
      <a
        {...props}
        className={classnames(style.base, props.className, style.colorInherit)}
        role="button"
        tabIndex="1"
        onKeyDown={(event) => onKeyDown(event, this)}
      >
        {props.children}
      </a>
    )
  }
}

function onKeyDown (event, ovj) {
  if (event.keyCode === 13) {
    event.target.click()
  }
}

Clickable.propTypes = {
  className: React.PropTypes.string,
  children: React.PropTypes.node.isRequired,
  disabled: React.PropTypes.bool
}
