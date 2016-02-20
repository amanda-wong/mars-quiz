import React from 'react';
import {browserHistory} from 'react-router';
import Timer from './timer.jsx';

var Question = React.createClass({

    getInitialState: function() {
        return {
            startTimer: false
        };
    },

    startTest: function(){
        this.setState({ startTimer: true
        })
    },

    render: function(){
        return (
            <div>
                <Timer startCountDown={this.state.startTimer}/>
                <button className="begin-eval-button" onClick={this.startTest}>Begin Evaluation</button>
            </div>
            );
        }
    });

module.exports = Question;
