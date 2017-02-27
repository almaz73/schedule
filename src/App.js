import React, { Component } from 'react';
import './App.css';
import Calendar from './calendar'
import Recordings from './recordings'

class App extends Component {
  render() {
    return (
      // <div className="root">
      <table className="root">
        <tbody>
          <tr>
            <td>
              <Calendar/>
            </td><td>
              <Recordings/>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default App;
