
var React = require('react');

module.exports = function() {
  return React.createElement(
	"svg",
	{ viewBox: "0 0 64 64" },
	React.createElement("circle", { cx: "32", cy: "32", fill: "#eda454", r: "30" }),
	React.createElement(
		"g",
		{ fill: "#fff" },
		React.createElement("path", { d: "m32 37c-2.8 0-5-2.2-5-5 0-2.8 2.2-5 5-5s5 2.2 5 5c0 2.8-2.2 5-5 5m0-8.6c-2 0-3.6 1.6-3.6 3.6s1.6 3.6 3.6 3.6 3.6-1.6 3.6-3.6-1.6-3.6-3.6-3.6" }),
		React.createElement("path", { d: "m39.5 37v-4.3h6.5v-1.4h-6.5v-2.9h6.5v-1.4h-8v10z" }),
		React.createElement("path", { d: "m48.5 37v-4.3h6.5v-1.4h-6.5v-2.9h6.5v-1.4h-8v10z" }),
		React.createElement("path", { d: "m42.4 39.8v6.8h-20.8v-32h20.8v9.8h2.6v-9.8c0-2.8-2.3-5-5.2-5h-15.6c-2.9 0-5.2 2.2-5.2 5v35c0 2.8 2.3 5 5.2 5h15.6c2.9 0 5.2-2.2 5.2-5v-9.8h-2.6m-10.4 12.2c-.9 0-1.6-.7-1.6-1.5s.7-1.5 1.6-1.5c.9 0 1.6.7 1.6 1.5s-.7 1.5-1.6 1.5" })
	)
);
};
