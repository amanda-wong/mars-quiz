import React from 'react';
import {browserHistory} from 'react-router';
import Timer from './timer.jsx';
import Question from './question.jsx';

var myQuestions = [
    {question: 'Mars is what number planet from the sun?',
    answer: '4'
    },
    {question: 'Are you a Canucks fan?',
    answer: 'yes'
    },
    {question: 'Are you a Kenye West fan?',
    answer: 'no'
    }
];

var QuestionPage = React.createClass({  //Question-Page component

    getInitialState() {       // The initial state: At step 0, the timer is off the page and it does not count
        return {
            startTimer: false,
            timerPosition: -200,
            step: 0
        };
    },

    startTest() {             // The startTest state: At step 1, the timer is in view and is counting down
        this.setState({
            startTimer: true,
            timerPosition: 20,
            step: 1
        });
    },

    _handleSuccess() {

        var successCount = 0;

        if(userAnswer === answer) {
          successCount + 1
      }
      return successCount;
    },

    _handleFailure() {
        var failureCount = 0;

        if (!=== answer) {
            failureCount + 1
        };
        return failureCount;
    },

    _decision() {
        if (successCount === 3) {
            browserHistory.push('/accepted-page.jsx');
        } else {
            browserHistory.push('/rejected-page.jsx');
        }
    }


    render: function() {                                 // rendering 1: timerWrapStyle swinging in the timer
                                                        // rendering 2: when step is at 0, eval button disappears
        var timerWrapStyle = {                          // rendering 3: when at step 1, 2 or 3, brings up
            right: this.state.timerPosition + 'px'
        };

        var startButton;
        var currentQuestion;

        if (this.state.step === 1) {
            currentQuestion = <Question question={myQuestions[step]}/>;
        } else {
            startButton = <button className="begin-eval-button" onClick={this.startTest}>Begin Evaluation</button>;
        }
    },

        return (
            <div>
                <div className="timer-wrap" style={timerWrapStyle}>
                    <Timer isEnabled={this.state.startTimer}/>
                </div>
                <div>
                    <Question question={myQuestions[step]} handleSuccess={this._handleSuccess} handleFailure={this._handleFailure} />
                    {startButton}
                </div>
            </div>
        );
    }
});

module.exports = QuestionPage;
