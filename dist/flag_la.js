
var React = require('react');

module.exports = function() {
  return React.createElement(
	"svg",
	{ viewBox: "0 0 64 64" },
	React.createElement("path", { d: "M2,32c0,5.9,1.7,11.4,4.6,16h50.7c2.9-4.6,4.6-10.1,4.6-16s-1.7-11.4-4.6-16H6.6C3.7,20.6,2,26.1,2,32z", fill: "#2a5f9e" }),
	React.createElement(
		"g",
		{ fill: "#ed4c5c" },
		React.createElement("path", { d: "M57.4,16C52.1,7.6,42.7,2,32,2C21.3,2,11.9,7.6,6.6,16H57.4z" }),
		React.createElement("path", { d: "M6.6,48c5.3,8.4,14.7,14,25.4,14c10.7,0,20.1-5.6,25.4-14H6.6z" })
	),
	React.createElement("circle", { cx: "32", cy: "32", fill: "#fff", r: "10" })
);
};
