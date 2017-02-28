import React, { Component } from 'react';

class Recordings extends Component {
  render() {
    var txt = "Встреча с веселыми ребятами";
    var records = [1,2,3,4,5, 6,6,6,6,6];
    return(
      <div>
        <button className="addButton">Добавить встречу</button>
        <div className="rightDiv">
          <span>
            {records.map(function(rec, index){
                return (
                  <div key={index} className="recordings">
                    <div className="recordings_title">
                      <span>12:00 - 13:30</span>
                      <span className="editButtons">
                      <button>редактировать</button>
                      <button>удалить</button>
                      </span>
                    </div>
                    {txt}
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
