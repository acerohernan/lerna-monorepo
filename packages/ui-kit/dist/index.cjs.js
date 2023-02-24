'use strict';

var React = require('react');

var Button = function (_a) {
    var label = _a.label;
    return (React.createElement("button", { style: {
            padding: "4px 10px",
            color: "blue",
        } }, label));
};

exports.Button = Button;
