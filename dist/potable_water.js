
var React = require('react');

module.exports = function() {
  return React.createElement(
	"svg",
	{ viewBox: "0 0 64 64" },
	React.createElement("circle", { cx: "32", cy: "32", fill: "#4fd1d9", r: "30" }),
	React.createElement(
		"g",
		{ fill: "#fff" },
		React.createElement("path", { d: "m36.6 24.1v-1h-7.6v1c0 .6-.5 1-1 1h-5c-2.3 0-4.2 1.9-4.2 4.3v5.1h5.7v-1.8c0-1 .8-1.8 1.8-1.8h.6c.2 0 .5.2.6.4 1 1.9 3 3.1 5.3 3.1 2.3 0 4.2-1.3 5.3-3.2.1-.2.4-.4.6-.4h4.8v-5.8h-5.9c-.6.2-1-.3-1-.9" }),
		React.createElement("path", { d: "m24.5 16.7c.2 0 1.5 0 1.6-.1.6 0 1.3-.1 4.4-.1.1.2.3.3.5.5v2.3h-1c-.6 0-1 .5-1 1s.5 1 1 1h1 3.5 1c.6 0 1-.5 1-1s-.5-1-1-1h-1v-2.3c.2-.1.3-.3.5-.5 3.1 0 3.8.1 4.4.1.2 0 1.5.1 1.6.1 1 0 1.9-.8 1.9-1.9s-.8-1.9-1.9-1.9c-.2 0-1.5 0-1.6.1-.6 0-1.3.1-4.4.1-.5-.7-1.3-1.1-2.2-1.1s-1.7.4-2.2 1.1c-3.1 0-3.8-.1-4.4-.1-.2 0-1.5-.1-1.6-.1-1 0-1.9.8-1.9 1.9s.8 1.9 1.8 1.9" }),
		React.createElement("path", { d: "m45.2 23.1h2.8v9.7h-2.8z" }),
		React.createElement("path", { d: "m17.5 52h8.3l1.5-14h-11.3l1.5 14m8.4-9h-8.4l-.4-4h9.3l-.5 4" })
	)
);
};
