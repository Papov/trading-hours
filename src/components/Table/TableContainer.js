import React from "react";

import { TableRow } from "./TableRow";

const currentDate = new Date();

const TableContainer = (Component) =>
	class Table extends React.Component {
		state = {
			tranding_hours_data: [],
			children: null
		};

		getHours = (number) => new Date(number).getHours();
		getDay = (number) => new Date(number).getDay();

		isOpenNow = (arr) => {
			let currentDay = this.getDay(currentDate);
			let currentHours = this.getHours(currentDate);
			let isOpen = arr.some(
				(item) =>
					this.getDay(item.from) === currentDay &&
					this.getHours(item.from) <= currentHours &&
					this.getHours(item.to) >= currentHours
			);
			return isOpen;
		};

		mapTrandingData = () => {
			let data = this.state.tranding_hours_data.map((item, index) => {
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
			this.setState(
				{
					children: data
				},
				() => {
					this.updateData = setTimeout(this.mapTrandingData, 1000);
				}
			);
		};

		getTradingHoursData = () => {
			fetch("/trading-hours.json")
				.then((response) => response.json())
				.then((data) => {
					this.setState(
						{
							tranding_hours_data: data
						},
						() => {
							this.mapTrandingData();
						}
					);
				});
		};

		componentDidUpdate(prevProps, prevState) {
			if (prevProps.onlyOpen === true && this.props.onlyOpen === false) {
				clearTimeout(this.updateData);
				this.getTradingHoursData();
			}
		}

		componentDidMount() {
			this.getTradingHoursData();
		}

		render() {
			console.log("render");
			return <Component>{this.state.children}</Component>;
		}
	};
export { TableContainer };
