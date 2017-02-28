import React, { Component } from 'react';

class Calendar extends Component {

  render() {
    var days=[];
    for(var i=1; i<=31; i++){
      days.push(i)
    }
    var hideDays=[];
    for(var j=1; j<=6; j++){
      hideDays.push(j)
    }
    return (
      <div className="leftDiv">
        <h2>Январь</h2>
        {
          hideDays.map(function(hideDay, index){
            return <div className="hide" key={index}></div>
          })
        }
        {
          days.map(function(day, index){
            return <div key={index}>{day}</div>
          })
        }

      </div>
    )
  }
}

export default Calendar
