import React from 'react'
import { Card } from 'react-bootstrap'

const ScoreItem = ({score}) => {
  return (
    <Card.Text>
       {score.text}
    </Card.Text>
  )
}

export default ScoreItem