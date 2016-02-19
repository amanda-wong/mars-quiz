import React from 'react';

var Timer = React.createClass({

  getInitialState: function() {
    return {
    secondsElapsed: 0
    }
  },

  resetTimer: function(){
    clearInterval(this.interval);
    this.setState({ secondsElapsed: 0 });
    this.start();
  },

  tick: function(){
    this.setState({
    secondsElapsed: this.state.secondsElapsed +1});
  },

  start: function() {
    this.interval = setInterval(this.tick, 1000);
  },

  componentDidMount: function(){
     setTimeout(this.start, this.props.timeout);
  }

  render: function() {
    return (
    <div>
      <Timer timeout={0} onClick={this.begin-eval-button} />
    </div>
    )
  }
});




module.exports = Timer;
