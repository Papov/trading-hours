import React from "react";

import tranding_hours_data from "../../data/trading-hours.json";
import { TableRow } from "./TableRow";

const currentDate = new Date();

const TableContainer = (Component) =>
	class Table extends React.Component {
		_getHours = (number) => new Date(number).getHours();
		_getDay = (number) => new Date(number).getDay();

		isOpenNow = (arr) => {
			let currentDay = this._getDay(currentDate);
			let currentHours = this._getHours(currentDate);
			let isOpen = arr.some(
				(item) =>
					this._getHours(item.from) <= currentHours &&
					this._getHours(item.to) >= currentHours &&
					this._getDay(item.from) === currentDay
			);
			return isOpen;
		};

		mapTrandingData = () =>
			tranding_hours_data.map((item, index) => {
				let isOpen = this.isOpenNow(item.tradingHours);
				let onlyOpen = this.props.onlyOpen && !isOpen;
				if (onlyOpen) {
					return null;
				}
				return (
					<TableRow
						key={`id${item.instrumentID}`}
						item={item}
						index={index}
						isOpen={isOpen}
						onlyOpen={onlyOpen}
					/>
				);
			});

		render() {
			return <Component>{this.mapTrandingData()}</Component>;
		}
	};
export { TableContainer };
