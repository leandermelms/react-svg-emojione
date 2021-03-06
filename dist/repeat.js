
var React = require('react');

module.exports = function() {
  return React.createElement(
	"svg",
	{ viewBox: "0 0 64 64" },
	React.createElement("circle", { cx: "32", cy: "32", fill: "#4fd1d9", r: "30" }),
	React.createElement(
		"g",
		{ fill: "#fff" },
		React.createElement("path", { d: "m49.4 29l-5.3 3.1c0 .1 0 .2 0 .4 0 2.7-2.2 4.9-4.8 4.9h-11.7v-3.8l-11.6 6.6 11.6 6.8v-3.8h11.7c2.8 0 5.5-1.1 7.5-3.1 2-2 3.1-4.7 3.1-7.6.1-1.3-.1-2.4-.5-3.5" }),
		React.createElement("path", { d: "m19.8 31.5c0-2.7 2.2-4.9 4.8-4.9h11.8v3.8l11.6-6.6-11.6-6.8v3.8h-11.8c-2.8 0-5.5 1.1-7.5 3.1-2 2-3.1 4.7-3.1 7.6 0 1.2.2 2.4.6 3.5l5.3-3.1c-.1-.1-.1-.2-.1-.4" })
	)
);
};
