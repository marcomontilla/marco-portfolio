import React, { Component, Fragment } from "react";
import "../../styles/main.scss"
import Link from "next/link";

class Header extends Component {
	render() {
		return (
			<header className="Header">
				<Link href="/">
					<a className="Item">
						{" "}
						<p>Home</p>{" "}
					</a>
				</Link>

				<Link href="/about">
					<a className="Item">
						{" "}
						<p>About</p>{" "}
					</a>
				</Link>

				<Link href="/portfolio">
					<a className="Item">
						{" "}
						<p>portfolio</p>{" "}
					</a>
				</Link>

				<Link href="/blog">
					<a className="Item">
						{" "}
						<p>Blog</p>{" "}
					</a>
				</Link>

				<Link href="/cv">
					<a className="Item">
						{" "}
						<p>CV</p>{" "}
					</a>
				</Link>

			</header>
		);
	}
}

export default Header;
