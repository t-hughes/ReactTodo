// var React = require('react');
// var {connect} = require('react-redux');
// var moment = require('moment');
// var actions = require('actions');

// export var Todo = React.createClass({
//   render: function () {
//     var { id, text, completed, createdAt, completedAt, dispatch} = this.props;
//     var todoClassName = completed ? 'todo todo-completed' : 'todo';
//     var renderDate = () => {
//       var message = 'Created ';
//       var timeStamp = createdAt;

//       if (completed) {
//         message = 'Completed ';
//         timeStamp = completedAt;
//       }

//       return message + moment.unix(timeStamp).format('MMM Do, YYYY @ h:mm A');
//     };
    
//     return (
//       <div className={todoClassName} onClick={() => {
//         this.refs.todoCheck.checked = !completed;
//         dispatch(actions.startToggleTodo(id, !completed));
//       }}>
//         <div>
//           <input type="checkbox" defaultChecked={completed} ref="todoCheck"/>
//         </div>
//         <div>
//           <p>{text}</p>
//           <p className="todo__subtext">{renderDate()}</p>
//         </div>
//       </div>
//     );
//   }
// });

// export default connect()(Todo);

// Updated ES6 syntax

import React from 'react';
import {connect} from 'react-redux';
import moment from 'moment';

import * as actions from 'actions';

export class Todo extends React.Component{
  render () {
    var { id, text, completed, createdAt, completedAt, dispatch} = this.props;
    var todoClassName = completed ? 'todo todo-completed' : 'todo';
    var renderDate = () => {
      var message = 'Created ';
      var timeStamp = createdAt;

      if (completed) {
        message = 'Completed ';
        timeStamp = completedAt;
      }

      return message + moment.unix(timeStamp).format('MMM Do, YYYY @ h:mm A');
    };
    
    return (
      <div className={todoClassName} onClick={() => {
        this.refs.todoCheck.checked = !completed;
        dispatch(actions.startToggleTodo(id, !completed));
      }}>
        <div>
          <input type="checkbox" defaultChecked={completed} ref="todoCheck"/>
        </div>
        <div>
          <p>{text}</p>
          <p className="todo__subtext">{renderDate()}</p>
        </div>
      </div>
    );
  }
};

export default connect()(Todo);