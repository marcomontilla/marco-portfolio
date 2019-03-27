import React, { Component } from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import { Link } from "../routes";

import axios from "axios";

class Portfolios extends Component {
	static async getInitialProps({ req }) {
		let portfolios = {};
		try {
			const response = await axios.get(
				"https://jsonplaceholder.typicode.com/posts/"
			);
			portfolios = response.data;
		} catch (err) {
			console.error(err);
		}

		return { portfolios: portfolios.splice(0, 15) };
	}

	renderPortfolios = portfolios =>
		portfolios.map(portfolio => {
			return (
				<li
					key={portfolio.id}
					style={{ textTransform: "capitalize" }}
					className="Item"
				>
					<Link
						route={`/portfolio/${portfolio.id}`}
						href={`/portfolio?id=${portfolio.id}`}
					>
						<a>
							<p>{portfolio.title}</p>
						</a>
					</Link>
				</li>
			);
		});

	render() {
		const { portfolios } = this.props;
		return (
			<BaseLayout>
				<h1>This is the Portfolios Page</h1>
				<hr />
				<br />
				<ul>{this.renderPortfolios(portfolios)}</ul>
			</BaseLayout>
		);
	}
}

export default Portfolios;
