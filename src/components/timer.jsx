import React from 'react';

var Timer = React.createClass({

    getInitialState: function() {
        if (this.props.isEnabled) {
            this.startTimer();
        }

        return {
            secondsRemaining: 60
        };
    },

    componentWillReceiveProps: function(props) {
        if (props.isEnabled) {
            this.startTimer();
        }
    },

    resetTimer: function() {
        clearInterval(this.interval);
    },

    startTimer: function() {
        if (!this.interval) {
            this.interval = setInterval(this.tick, 1000);
        }
    },

    tick: function() {
        this.setState({
            secondsRemaining: this.state.secondsRemaining - 1
        });

        if (this.state.secondsRemaining <= 0 ) {
            this.resetTimer();
        }
    },

    render: function() {
        return (
            <div className="timer">
                {this.state.secondsRemaining}
            </div>
        );
    }
});

module.exports = Timer;
