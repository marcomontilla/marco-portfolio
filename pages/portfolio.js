import React, { Component } from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import { withRouter } from "next/router";
import axios from "axios";

class Portfolio extends Component {
	static async getInitialProps({ query }) {
		let portfolio = {};
		try {
			const response = await axios.get(
				`https://jsonplaceholder.typicode.com/posts/${query.id}`
			);
			portfolio = response.data;
		} catch (err) {
			console.error(err);
		}
		return { portfolio };
	}

	render() {
		const { id } = this.props.router.query;
		const { portfolio } = this.props;
		return (
			<BaseLayout>
				<h1>This is the Portfolio Page</h1>
				<hr />
				<br />
				<h2>{portfolio.title}</h2>
				<ul>
					<li>
						<b>userId:</b> {portfolio.userId}
					</li>
					<li>
						<b>id:</b> {portfolio.id}
					</li>
					<li>
						<b>title:</b> {portfolio.title}
					</li>
					<li>
						<b>body:</b> {portfolio.body}
					</li>
				</ul>
			</BaseLayout>
		);
	}
}

export default withRouter(Portfolio);
