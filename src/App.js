import React, { Component } from 'react';
import {connect} from 'react-redux';
import './App.css';
import Calendar from './Calendar';
import Recordings from './Recordings';


class App extends Component {
  render() {
    {console.log(" 000 this.meetings = ", this.props.meetings)      }
    return (
      // <div className="root">
      <table className="root">
        <tbody>
          <tr>
            <td>
              <Calendar/>
            </td><td>
              <Recordings />
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

// export default App;
export default connect(
  state=>({
    meetings:state.meetings
  }),
  dispatch=>({
    onAdd: (val)=>{
      dispatch({type:"ADD_TEXT", text:val})
    },
    onSearch: (val)=>{
      dispatch({type:"ADD_SEARCH", text:val});
    }
  })
)(App);
