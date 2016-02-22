import React from 'react';

var Timer = React.createClass({

    getInitialState() {
        if (this.props.isEnabled) {
            this.startTimer();
        }

        return {
            secondsRemaining: 60
        };
    },

    componentWillReceiveProps(props) {
        if (props.isEnabled) {
            this.startTimer();
        }
    },

    resetTimer() {
        clearInterval(this.interval);
    },

    startTimer() {
        if (!this.interval) {
            this.interval = setInterval(this.tick, 1000);
        }
    },

    tick() {
        this.setState({
            secondsRemaining: this.state.secondsRemaining - 1
        });

        if (this.state.secondsRemaining <= 0 ) {
            this.resetTimer();
        }
    },

    render() {
        return (
            <div className="timer">
                {this.state.secondsRemaining}
            </div>
        );
    }
});

module.exports = Timer;
