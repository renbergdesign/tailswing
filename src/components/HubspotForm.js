import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

const hubspotForm = () => {
	useEffect(() => {
		if (window.hbspt) {
			window.hbspt.forms.create({
				portalId: "YOUR-PORTAL-ID",
				formId: "YOUR-FORM-ID",
				target: "YOUR-FORM-CONTAINER-ID",
			});
		}
	}, [window.hbspt]);
	return (
		<>
			<Helmet>
				<script
					charset="utf-8"
					type="text/javascript"
					src="//js.hsforms.net/forms/v2.js"
				>
					{" "}
				</script>
			</Helmet>
		</>
	);
};

export default hubspotForm;
