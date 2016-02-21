import React from 'react';
import {browserHistory} from 'react-router';

var Question = React.createClass({

    submitAnswer: function() {

    },

    render: function() {
        return (
            <div className="test-questions-wrap">
                <p>{this.props.question}</p>
                <input type="text"/>
                <button className="submitButton" onClick={this.submitAnswer}>Submit</button>
            </div>
        );
    }
});

module.exports = Question;
