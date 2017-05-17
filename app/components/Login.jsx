// import React from 'react';
// import * as redux from 'react-redux';

// import * as actions from 'actions';

// export var Login = React.createClass({
//   onLogin() {
//     var {dispatch} = this.props;

//     dispatch(actions.startLogin());
//   },
//   render() {
//     return (
//       <div>
//         <h1 className="page-title">Alfred Todo</h1>

//         <div className="row">
//           <div className="columns small-centered small-10 medium-6 large-4">
//             <div className="callout callout-auth">
//               <h3>Please Login</h3>
//               <p>
//                 Login with your Github account below.
//               </p>
//               <button className="button" onClick={this.onLogin}>Login with Github</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// });

// export default redux.connect()(Login);


// Updated ES6 syntax

import React from 'react';
import * as redux from 'react-redux';

import * as actions from 'actions';

export class Login extends React.Component {
  constructor (props) {
    super(props);
    this.onLogin = this.onLogin.bind(this);
  }
  onLogin () {
    var {dispatch} = this.props;

    dispatch(actions.startLogin());
  }
  render () {
    return (
      <div>
        <h1 className="page-title">Alfred Todo</h1>

        <div className="row">
          <div className="columns small-centered small-10 medium-6 large-4">
            <div className="callout callout-auth">
              <h3>Please Login</h3>
              <p>
                Login with your Github account below.
              </p>
              <button className="button" onClick={this.onLogin}>Login with Github</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default redux.connect()(Login);