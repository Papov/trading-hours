import React from "react";
import PropTypes from "prop-types";

import { Input } from "./ui/Input";

export class HeaderControl extends React.PureComponent {
	static propTypes = {
		onlyOpen: PropTypes.bool,
		handleChangeChecked: PropTypes.func
	};
	render() {
		let { handleChangeChecked, onlyOpen } = this.props;
		return (
			<div className="h-25 pt-4 pb-4 w-75">
				<Input
					id="onlyOpen"
					type="checkbox"
					label="Show only open instruments"
					onChange={handleChangeChecked}
					checked={onlyOpen}
					right
				/>
			</div>
		);
	}
}
