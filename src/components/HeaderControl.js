import React from "react";

import { Input } from "./ui/Input";

export class HeaderControl extends React.PureComponent {
	render() {
		let { handleChangeChecked, onlyOpen } = this.props;
		return (
			<div className="h-25 p-4 w-75">
				<Input
					id="onlyOpen"
					type="checkbox"
					label="Only open"
					onChange={handleChangeChecked}
					checked={onlyOpen}
					right
				/>
			</div>
		);
	}
}
