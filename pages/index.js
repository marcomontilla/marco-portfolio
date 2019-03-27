import React, { Component } from "react";
import axios from "axios";
import BaseLayout from "../components/layouts/BaseLayout";

class Index extends Component {
	state = {
		title: "Index Page"
	};

	static async getInitialProps({ req }) {
		let userData = {};
		try {
			const response = await axios.get(
				"https://jsonplaceholder.typicode.com/todos/1"
			);
			userData = response.data;
		} catch (err) {
			console.error(err);
		}

		return { userData };
	}

	updateTitle = () => {
		this.setState({ title: "Updated Index Page" });
	};

	render() {
		const { title } = this.state;
		const { userData } = this.props;

		return (
			<BaseLayout>
				<h1>This is the Index Page</h1>
				<h2>{`This is the ${title}`}</h2>
				<h2>{`User title: ${userData.title}`}</h2>
				<button onClick={this.updateTitle}>Change Title</button>
			</BaseLayout>
		);
	}
}

export default Index;
