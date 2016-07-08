
var React = require('react');

module.exports = function() {
  return React.createElement(
	"svg",
	{ viewBox: "0 0 64 64" },
	React.createElement("circle", { cx: "32", cy: "32", fill: "#c28fef", r: "30" }),
	React.createElement(
		"g",
		{ fill: "#fff" },
		React.createElement("path", { d: "m32 54c-9.4 0-17-7.6-17-17v-23h6v23c0 6.1 4.9 11 11 11s11-4.9 11-11v-23h6v23c0 9.4-7.6 17-17 17" }),
		React.createElement("path", { d: "m56 22c-2.6 4.1-6.1 6-8.4 7.2-3.5 2-7.9-.2-11.7-2.1-1.2-.6-2.3-1.1-3.3-1.5-10.9-4.2-19.1-.5-24.6 4.9v7.5c3.6-4.8 12.1-10.3 22.5-6.2.8.3 1.8.8 2.8 1.3 4 2 9.2 4.6 14.5 3 .8-.2 1.7-.6 2.5-1.1 2-1.2 4-2.1 5.6-4.5l.1-8.5" })
	)
);
};