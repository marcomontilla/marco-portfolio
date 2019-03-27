import React, { Fragment } from "react";
import Header from "../shared/Header";
import "../../styles/main.scss";

const BaseLayout = props => {
	return (
		<Fragment>
			<Header />
			<div className="content">
				{props.children}
			</div>
		</Fragment>
	);
};

export default BaseLayout;
