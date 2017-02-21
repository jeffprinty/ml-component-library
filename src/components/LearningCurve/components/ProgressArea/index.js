import React, { PropTypes } from 'react'
import classnames from 'classnames'
import ProgressBar from 'react-bootstrap/lib/ProgressBar'

import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'

import panelStyle from '../../style/panel.css'
import progressBarStyle from '../../style/progress-bar.css'
import style from './style.css'


// Component for the progress area for the student start screen
function ProgressArea (props) {
  const { activityScore, scoreTarget } = props
  const completedActivity = activityScore >= scoreTarget
  const progressBarLabel = `You currently have ${activityScore} points out of a target total of ${scoreTarget} points.`
  return (
    <div data-test-id="progressArea" className={classnames(panelStyle.large)}>
      <h2 className={style.targetScoreHeader}>Target Score Progress</h2>
      <p aria-hidden="true" className={style.targetScoreLabel}>You have:</p>
        <Row>
          <Col sm={10} xs={10}>
            <ProgressBar
              data-test-id="progressBar"
              className={classnames('progress', progressBarStyle.base, style.progressBar)}
              bsClass={classnames('progress-bar', progressBarStyle.progressValueBase, style.progressBarValue)}
              now={activityScore}
              min={0}
              max={scoreTarget}
            />
            <span aria-label={progressBarLabel}>
              <span className={style.pointsText}>
                <span className={style.activityScoreValue}>{activityScore} pts</span>
              </span>
            </span>
          </Col>
          <Col sm={2} xs={2} className={style.targetScoreContainer}>
          <span className={style.targetScoreText}>
            Target <br /><span className={style.targetScoreValue}>{scoreTarget}</span>
          </span>
          </Col>
        </Row>
      {completedActivity
        ? (
          <div className={style.completedText}>
            <span className={style.congratulationText}>Congratulations! </span>
            You've completed the activity.
            <br />
            <span className={style.continueText}>
              But don't stop, you can continue answering questions for practice.
            </span>
          </div>
        )
        : null
      }
    </div>
  )
}

ProgressArea.propTypes = {
  activityScore: PropTypes.number.isRequired,
  scoreTarget: PropTypes.number.isRequired
}

export default ProgressArea
