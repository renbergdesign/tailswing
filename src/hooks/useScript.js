import { useEffect } from "react";

var myDialog = document.getElementsByClassName("ren2233");

const useScript = (url) => {
	useEffect(() => {
		const script = document.createElement("script");

		script.src = url;
		script.async = true;

		myDialog[0].appendChild(script);

		return () => {
			myDialog[0].removeChild(script);
		};
	}, [url]);
};

export default useScript;
