import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, Redirect } from 'react-router';

import QuestionPage from './components/question-page.jsx';
import NotFound from './components/404-page.jsx';
import WelcomePage from './components/welcome-page.jsx';

// <Route path='/accepted' component={Accepted}/>
// <Route path='/rejected' component={Rejected}/>

var App = React.createClass({

    render: function(){
        return (
                <Router history={ browserHistory }>
                    <Redirect from='/' to='/welcome'/>
                        <Route path='/welcome' component={WelcomePage}/>
                        <Route path='/mars-quiz' component={QuestionPage}/>
                        <Route path='*' component={NotFound} />
                </Router>
        );
    }
});

ReactDOM.render(<App />, document.querySelector('#mars-quiz'));
