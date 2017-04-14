import React from 'react'
import { Link } from 'react-router'
import moment from 'moment'
import constants from 'helpers/constants'
import About from 'components/About'
import Button from 'components/Button'
import Legend from 'components/Legend'
import Person from 'components/Person'
import SpeakerData from '../../../api/speakers'

export default () => {
  return (
    <div className="Home">
      <div className="Home__About">
        <h2>What is React Rally?</h2>
        <About/>
        <Link to="/about" className="Button medium">More about React Rally &raquo;</Link>
      </div>
      <div className="Home__Dates">
        <h2>Upcoming Dates</h2>
        <ul>
          <li><strong>CFP Opens</strong> {moment.utc(constants.Dates.CFP_OPEN).format('[12:00am MDT], MMMM DD, YYYY')}</li>
          <li><strong>CFP Closes</strong> {moment.utc(constants.Dates.CFP_CLOSE).format('[11:59pm MDT], MMMM DD, YYYY')}</li>
          <li><strong>Early Bird Tickets - Round One</strong> {moment.utc(constants.Dates.TICKET_RELEASE).format('[12:00pm MDT], MMMM DD, YYYY')} ($300)</li>
          <li><strong>Early Bird Tickets - Round Two</strong> {moment.utc(constants.Dates.TICKET_RELEASE).add(7, 'days').format('[12:00pm MDT], MMMM DD, YYYY')} ($350)</li>
          <li><strong>Standard Tickets</strong> {moment.utc(constants.Dates.TICKET_RELEASE).add(14, 'days').format('[12:00pm MDT], MMMM DD, YYYY')} ($400)</li>
        </ul>
      </div>
    {Object.keys(SpeakerData).length > 0 ? (
      <div className="align-center">
        <Legend>Keynote Speakers</Legend>
        {Object.keys(SpeakerData).map(key => {
          return SpeakerData[key].keynote ? <Person {...SpeakerData[key]} key={key}/> : null
        })}
      </div>
    ) : null}
    </div>
  )
}
