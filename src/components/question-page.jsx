import React from 'react';
import {browserHistory} from 'react-router';
import Timer from './timer.jsx';
import Question from './question.jsx';

var QuestionPage = React.createClass({  //Question-Page component

    getInitialState: function() {       // The initial state: At step 0, the timer is off the page and it does not count
        return {
            startTimer: false,
            timerPosition: -200,
            step: 0
        };
    },

    startTest: function() {             // The startTest state: At step 1, the timer is in view and is counting down
        this.setState({
            startTimer: true,
            timerPosition: 20,
            step: 1
        });
    },

    render: function() {                            // rendering 1: timerWrapStyle swinging in the timer
                                                    // rendering 2: when step is at 0, eval button disappears
        var timerWrapStyle = {                      // rendering 3: when at step 1, 2 or 3, brings up question 1, 2, or 3
            right: this.state.timerPosition + 'px'   // return
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
                    {currentQuestion}
                    {startButton}
            </div>
        );
    }
});

module.exports = QuestionPage;
