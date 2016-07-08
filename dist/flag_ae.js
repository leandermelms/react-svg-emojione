
var React = require('react');

module.exports = function() {
  return React.createElement(
	"svg",
	{ viewBox: "0 0 64 64" },
	React.createElement("path", { d: "M2,32c0,13.1,8.4,24.2,20,28.3V3.7C10.4,7.8,2,18.9,2,32z", fill: "#ed4c5c" }),
	React.createElement("path", { d: "M32,2c-3.5,0-6.9,0.6-10,1.7V22h38.3C56.2,10.4,45.1,2,32,2z", fill: "#699635" }),
	React.createElement("path", { d: "m60.3 22h-38.3v20h38.3c1.1-3.1 1.7-6.5 1.7-10s-.6-6.9-1.7-10", fill: "#f9f9f9" }),
	React.createElement("path", { d: "M22,42v18.3c3.1,1.1,6.5,1.7,10,1.7c13.1,0,24.2-8.3,28.3-20H22z", fill: "#3e4347" })
);
};