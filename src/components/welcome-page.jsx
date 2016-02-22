import React from 'react';
import {browserHistory} from 'react-router';
var WelcomePage = React.createClass({

    takeQuiz() {
        browserHistory.push('/mars-quiz');
       },

    render(){
        return (
            <div>
                <button className="take-test-button" onClick={this.takeQuiz}>Take Test</button>
            </div>
            );
        }
    });

module.exports = WelcomePage;
