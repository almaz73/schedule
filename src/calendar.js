import React, { Component } from 'react';
// import moment from 'moment';
import {connect} from 'react-redux';

class Calendar extends Component {

  handlerWin(val) {
    this.props.onGetRec(val)
  }

  render() {
    var
      self = this,
      days=[],
      hideDays=[],
      dayWithMeet = [];
    for(var i=1; i<=31; i++){
      days.push(i)
    }

    for(var j=1; j<=2; j++){
      hideDays.push(j)
    }

    this.props.meetings.map(function(rec){
      var day = new Date(rec.date).getDate();
      if(dayWithMeet.indexOf(day))dayWithMeet.push(day);
    })

    return (
      <div className="leftDiv">
        <h4>февраль 2017</h4>
        {
          hideDays.map(function(hideDay, index){
            return <div className="hide" key={index}></div>
          })
        }
        {
          days.map(function(day, index){
            return (<div key={index}  onClick={self.handlerWin.bind(self, day)}>
              {day}

              {dayWithMeet.indexOf(day)>-1?<span className="dot"></span>:""}
              </div>)
          })
        }

      </div>
    )
  }
}

// export default Calendar

export default connect(
  state=>({
     meetings: state.meetings
  }),
  dispatch=>({
    onGetRec: (val)=>{
      console.log(" 9 9 9 9 val = ", val);
      dispatch({type:"GET_REC_BYDATE", payload:val});
    }
  })
)(Calendar);
