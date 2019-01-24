import React from "react";
import { Table as TableStrap } from "reactstrap";
import { TableContainer } from "./TableContainer";

@TableContainer
class Table extends React.Component {
	render() {
		return (
			<TableStrap hover className="w-75 ">
				<thead className="h4">
					<tr>
						<th>Name</th>
						<th className="text-center">id</th>
						<th className="text-center">state</th>
					</tr>
				</thead>
				<tbody>{this.props.children}</tbody>
			</TableStrap>
		);
	}
}

export { Table };
