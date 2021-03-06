
var React = require('react');

module.exports = function() {
  return React.createElement(
	"svg",
	{ viewBox: "0 0 64 64" },
	React.createElement(
		"g",
		{ fill: "#2a5f9e" },
		React.createElement("path", { d: "m62 32c0-16.6-13.4-30-30-30s-30 13.4-30 30c0 4.3.9 8.3 2.5 12h55c1.6-3.7 2.5-7.7 2.5-12" }),
		React.createElement("path", { d: "m32 62c9.8 0 18.5-4.7 24-12h-48c5.5 7.3 14.2 12 24 12" })
	),
	React.createElement("path", { d: "m4.5 44c.9 2.1 2.1 4.2 3.5 6h48c1.4-1.8 2.6-3.9 3.5-6h-55", fill: "#ffce31" }),
	React.createElement(
		"g",
		{ fill: "#fff" },
		React.createElement("path", { d: "m11.4 15.5l1.3 3.8h4l-3.3 2.4 1.3 3.8-3.3-2.4-3.2 2.4 1.2-3.8-3.2-2.4h4z" }),
		React.createElement("path", { d: "m22.8 24.5l1.8 5.3h5.6l-4.6 3.3 1.8 5.4-4.6-3.3-4.5 3.3 1.7-5.4-4.5-3.3h5.6z" })
	)
);
};
