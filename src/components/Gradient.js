import { Component } from "react";

var now = new Date();
var hours = now.getHours();

class Gradient extends Component {
	render() {
		if ((hours) => 5 && hours < 8) {
			//Morning
			document.body.classList.add("grd-morning");
			return;
		}
		if (8 <= hours && hours < 17) {
			//Day
			document.body.classList.add("grd-day");
			return;
		}
		if (17 <= hours && hours < 19) {
			//Evening
			document.body.classList.add("grd-evening");
			return;
		}
		if (19 <= hours && hours < 5) {
			//Night
			document.body.classList.add("grd-night");
			return;
		}
	}
}

export default Gradient;
