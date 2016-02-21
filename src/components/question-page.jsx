import React from 'react';
import {browserHistory} from 'react-router';
import Timer from './timer.jsx';
import Question from './question.jsx';

var QuestionPage = React.createClass({

    getInitialState: function() {
        return {
            startTimer: false,
            timerPosition: -200,
            step: 0
        };
    },

    startTest: function() {
        this.setState({
            startTimer: true,
            timerPosition: 20,
            step: 1
        });
    },

    render: function() {

        var timerWrapStyle = {
            right: this.state.timerPosition + 'px'
        };

        var startButton;
        var currentQuestion;

        if (this.state.step === 1) {
            currentQuestion = <Question question="Are you a Canuck fan, yes or no?"/>;
        } else if (this.state.step === 2) {
            currentQuestion = <Question question="Mars is what number planet from the sun?"/>;
        } else if (this.state.step === 3) {
            currentQuestion = <Question question="How many seconds can you hold your breath?"/>;
        } else if (this.state.step === 0) {
            startButton = <button className="begin-eval-button" onClick={this.startTest}>Begin Evaluation</button>;
        }

        return (
            <div>
                <div className="timer-wrap" style={timerWrapStyle}>
                    <Timer isEnabled={this.state.startTimer}/>
                </div>
                <div className="questions-wrap">
                    {currentQuestion}
                    {startButton}
                </div>
            </div>
        );
    }
});

module.exports = QuestionPage;
