import React from "react";

import { Table } from "./Table";
import { HeaderControl } from "./HeaderControl";

export class App extends React.Component {
	state = {
		onlyOpen: false
	};

	handleChangeChecked = () => {
		this.setState((prevState) => ({
			onlyOpen: !prevState.onlyOpen
		}));
	};

	render() {
		return (
			<div className="d-flex flex-column align-items-center justify-content-center">
				<HeaderControl
					handleChangeChecked={this.handleChangeChecked}
					onlyOpen={this.state.onlyOpen}
				/>
				<Table onlyOpen={this.state.onlyOpen} />
			</div>
		);
	}
}
