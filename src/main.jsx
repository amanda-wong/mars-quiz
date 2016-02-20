import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, Redirect } from 'react-router';

import Question from './components/question-page.jsx';
import NotFound from './components/404-page.jsx';
import Welcome from './components/welcome-page.jsx';
import Timer from './components/timer.jsx';


// <Route path='/accepted' component={Accepted}/>
// <Route path='/rejected' component={Rejected}/>

var App = React.createClass({

    render: function(){
        return (
                <Router history={ browserHistory }>
                    <Redirect from='/' to='/welcome'/>
                        <Route path='/welcome' component={Welcome}/>
                        <Route path='/mars-quiz' component={Question}/>
                        <Route path='*' component={NotFound} />
                </Router>
        );
    }
});

ReactDOM.render(<App />, document.querySelector('#mars-quiz'));
