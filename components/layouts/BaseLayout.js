import React from "react";
import Header from "../shared/Header";

const BaseLayout = ({ children }) => {
	return (
		<div className="main">
			<Header />
			<main>
				{children}
			</main>
		</div>
	);
};

export default BaseLayout;
