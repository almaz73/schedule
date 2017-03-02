import React, { Component } from 'react';
import moment from 'moment';

class Recordings extends Component {
  render() {
    return(
      <div>
        <button className="addButton">Добавить встречу</button>
        <div className="rightDiv">
          <h2>12 февраля </h2>
          <span>
            {this.props.meetings.map(function(rec, index){

              var date1 = moment(rec.date).format('HH:mm')
              var date2 = moment(rec.date).add('minutes', rec.minutes).format('HH:mm')

                return (
                  <div key={index} className="recordings">
                    <div className="recordings_title">
                      <span>{date1} - {date2}</span>
                      <span className="editButtons">
                      <button>редактировать</button>
                      <button>удалить</button>
                      </span>
                    </div>
                    {rec.content}
                  </div>
                )
              })
            }
          </span>

        </div>
      </div>
    )
  }
}

export default Recordings
