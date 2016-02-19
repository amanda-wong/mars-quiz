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
                    <h1>Welcome to NASA's official mission to Mars site! </h1>
                    <p>To find out whether you are eligible, take quiz now.</p>
                    <button className="take-test-button">Take Test</button>
                </div>
            </div>
        )
    }
});


module.exports = Welcome;
