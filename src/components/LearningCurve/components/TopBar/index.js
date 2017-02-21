import React from 'react'
import classnames from 'classnames'

import style from './style.css'

export default function TopBar (props) {
  return (
    <div>
      <div role="banner" className={classnames(style.container, {[style.containerPreview]: props.isPreview})}>
          {props.children}
      </div>
      <div className={style.spacer} />
    </div>
  )
}
TopBar.propTypes = {
  children: React.PropTypes.node.isRequired,
  splitPane: React.PropTypes.bool,
  isPreview: React.PropTypes.bool
}
