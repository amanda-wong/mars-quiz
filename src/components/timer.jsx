    import React from 'react';

    var Timer = React.createClass({

      getInitialState: function() {
        return {
            secondsRemaining: 60
        }
      },

      resetTimer: function(){
        clearInterval(this.interval);
      },

      tick: function(){
        this.setState({secondsRemaining: this.state.secondsRemaining - 1});
        if (this.state.secondsRemaining <= 0 ) {
            this.resetTimer();
        }
      },

      startTimer: function() {
        this.interval = setInterval(this.tick, 1000);
      },

      componentWillReceiveProps: function(props) {
          if(props.startCountDown === true) {
              this.startTimer();
          }
      },

      render: function() {
        return (
            <div>
              <p className="timer">{this.state.secondsRemaining}</p>
            </div>
        );
      }
    });

    module.exports = Timer;
