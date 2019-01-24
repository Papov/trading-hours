import React from "react";
import PropTypes from "prop-types";

class TableRow extends React.PureComponent {
	static propTypes = {
		item: PropTypes.object,
		isOpen: PropTypes.bool
	};

	render() {
		let { item, isOpen } = this.props;
		return (
			<tr>
				<th>{item.name}</th>
				<th className="text-center">{item.instrumentID}</th>
				<th className="text-center">
					{isOpen ? (
						<span className="text-success">Open</span>
					) : (
						<span className="text-danger">Close</span>
					)}
				</th>
			</tr>
		);
	}
}

export { TableRow };
