import React from "react";
import PropTypes from "prop-types";

class TableRow extends React.PureComponent {
	static propTypes = {
		item: PropTypes.object,
		index: PropTypes.number,
		isOpen: PropTypes.bool,
		onlyOpen: PropTypes.bool
	};

	render() {
		let { item, index, isOpen, onlyOpen } = this.props;
		if (onlyOpen) {
			return null;
		}
		console.log("render");
		return (
			<tr>
				<th scope="row">{index + 1}</th>
				<th>{item.name}</th>
				<th>{item.instrumentID}</th>
				<th>{isOpen ? <span>Open</span> : <span>Close</span>}</th>
			</tr>
		);
	}
}

export { TableRow };
