
var React = require('react');

module.exports = function() {
  return React.createElement(
	"svg",
	{ viewBox: "0 0 64 64" },
	React.createElement("path", { d: "M2,32c0,16.6,13.4,30,30,30s30-13.4,30-30H2z", fill: "#ed4c5c" }),
	React.createElement("path", { d: "M32,2c16.6,0,30,13.4,30,30H32V2z", fill: "#f9f9f9" }),
	React.createElement("path", { d: "M32,2C15.4,2,2,15.4,2,32h30V2z", fill: "#2a5f9e" }),
	React.createElement("path", { d: "m20 21.7l4.9 3.3-1.8-5.3 4.9-3.5h-6.1l-1.9-5.2-1.8 5.2h-6.2l4.9 3.5-1.8 5.3z", fill: "#f9f9f9" })
);
};