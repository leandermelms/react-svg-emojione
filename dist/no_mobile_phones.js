
var React = require('react');

module.exports = function() {
  return React.createElement(
	"svg",
	{ viewBox: "0 0 64 64" },
	React.createElement("circle", { cx: "32", cy: "32", fill: "#ff5a79", r: "30" }),
	React.createElement("circle", { cx: "32", cy: "32", fill: "#333", r: "24" }),
	React.createElement("path", { d: "m37.8 15h-11.6c-2.1 0-3.8 1.7-3.8 3.8v26.4c0 2.1 1.7 3.8 3.8 3.8h11.5c2.1 0 3.8-1.7 3.8-3.8v-26.4c.1-2.1-1.6-3.8-3.7-3.8m-7.7 1.4h3.8c.3 0 .5.2.5.5 0 .3-.2.5-.5.5h-3.8c-.3 0-.5-.2-.5-.5 0-.3.3-.5.5-.5m1.9 30.7c-.6 0-1.2-.5-1.2-1.1s.5-1.1 1.2-1.1c.6 0 1.2.5 1.2 1.1s-.6 1.1-1.2 1.1m7.7-4.1h-15.4v-24.2h15.4v24.2", fill: "#fff" }),
	React.createElement("path", { d: "m29 2.8h6v58.4h-6z", fill: "#ff5a79", transform: "matrix(.7071-.7071.7071.7071-13.255 31.9996)" })
);
};
