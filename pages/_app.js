import React from 'react'
import App, { Container } from 'next/app'

// import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/main.scss";

class AppInit extends App {
	static async getInitialProps({ Component, ctx }) {
		let pageProps = {}

		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx)
		}

		return { pageProps }
	}

	render() {
		const { Component, pageProps } = this.props

		return (
			<Container>
				<Component {...pageProps} />
			</Container>
		)
	}
}

export default AppInit