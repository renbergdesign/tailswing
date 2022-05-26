import React, { useEffect } from "react";

const HubspotContactForm = () => {
	useEffect(() => {
		const script = document.createElement("script");
		script.src = "https://js.hsforms.net/forms/v2.js";
		document.getElementById("hubspotForm").appendChild(script);

		script.addEventListener("load", () => {
			// @TS-ignore
			if (window.hbspt) {
				// @TS-ignore
				window.hbspt.forms.create({
					portalId: "8359990",
					formId: "330091e2-a85c-471b-9e0e-fdf5b8520279",
					target: "#hubspotForm",
					formInstanceId: "1",
				});
			}
		});
	}, []);

	return (
		<div>
			<div id="hubspotForm"></div>
		</div>
	);
};

export default HubspotContactForm;
