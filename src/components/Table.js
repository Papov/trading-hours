import React from "react";
import { Table as TableStrap } from "reactstrap";

import tranding_hours_data from "../data/trading-hours.json";
import { TableRow } from "./TableRow";

const currentDate = new Date();

const getHours = (number) => new Date(number).getHours();
const getDay = (number) => new Date(number).getDay();

const isOpenNow = (arr) => {
	let currentDay = currentDate.getDay();
	let currentHours = currentDate.getHours();
	let isOpen = arr.some(
		(item) =>
			getHours(item.from) <= currentHours &&
			getHours(item.to) >= currentHours &&
			getDay(item.from) === currentDay
	);
	return isOpen;
};

export class Table extends React.Component {
	render() {
		return (
			<TableStrap hover className="w-75 ">
				<thead>
					<tr>
						<th>#</th>
						<th>Name</th>
						<th>id</th>
						<th>state</th>
					</tr>
				</thead>
				<tbody>
					{tranding_hours_data.map((item, index) => {
						let isOpen = isOpenNow(item.tradingHours);
						let onlyOpen = this.props.onlyOpen && !isOpen;
						return (
							<TableRow
								key={`id${item.instrumentID}`}
								item={item}
								index={index}
								isOpen={isOpen}
								onlyOpen={onlyOpen}
							/>
						);
					})}
				</tbody>
			</TableStrap>
		);
	}
}
