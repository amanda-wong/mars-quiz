import React from 'react';

var Welcome = React.createClass({
    render: function(){
        return (
            <div className="main-wrap">
                <div className="left-panel">
                    <h1>Mars</h1>
                    <div className="shuttle-wrap">
                        <i className="fa fa-space-shuttle"></i>
                    </div>
                </div>
                <div className="right-main">
                    <button className="take-test-button">Take Test</button>
                    <button className="begin-eval-button">Begin Evaluation</button>
                </div>
            </div>
        );
    }
});


module.exports = Welcome;
