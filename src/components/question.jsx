import React from 'react';
import {browserHistory} from 'react-router';

var Question = React.createClass({

    submitAnswer() {
        const userAnswer = this.refs.answer.getValue();
        if (userAnswer === this.props.question.answer) {
            this.props.handleSuccess();
        } else {
            this.props.handleFailure();
        }
    },

    render() {
        return (
            <div className="test-questions-wrap">
                <p>{this.props.question}</p>
                <input ref="answer" type="text"/>
                <button className="submitButton" onClick={this.submitAnswer}>Submit</button>
            </div>
        );
    }
});

module.exports = Question;
