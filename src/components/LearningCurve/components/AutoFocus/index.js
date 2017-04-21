import React, { Component } from 'react'
import _ from 'lodash'
import classnames from 'classnames'

import style from './style.css'

/**
 * Use when you need the browser to focus on a container when it's mounted/updated.
 * Helpful for accessibility.
 * Not needed when using react-bootstrap/Modal.
 */
export default class AutoFocus extends Component {

  static propTypes = {
    children: React.PropTypes.node,
    alwaysFocusOnUpdate: React.PropTypes.bool,
    className: React.PropTypes.string,
    check: React.PropTypes.any // if the `check` value changes between renders, the component will re-focus
  }

  componentDidMount () {
    this.focus()
  }

  componentDidUpdate (prevProps) {
    if (this.props.alwaysFocusOnUpdate) {
      this.focus()
    }
    else if (_.has(this.props, 'check') && !_.isEqual(prevProps.check, this.props.check)) {
      this.focus()
    }
  }

  focus () {
    this.refs.container.focus()
  }

  render () {
    const restProps = _.omit(this.props, 'check')
    return (
      <div
        ref="container"
        tabIndex="-1"
        {...restProps}
        className={classnames(style.container, this.props.className)}
      >
        {this.props.children}
      </div>
    )
  }
}
