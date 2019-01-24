import React from "react";
import PropTypes from "prop-types";
import { Input as InputStrap, Label } from "reactstrap";

const Input = ({
	left = null,
	right = null,
	label = null,
	id,
	type,
	placeholder = null,
	onChange,
	checked
}) => (
	<React.Fragment>
		{((label && left) || (label && !right)) && (
			<Label htmlFor={id}>{label}</Label>
		)}
		<InputStrap
			type={type}
			id={id}
			placeholder={placeholder}
			onChange={onChange}
			checked={checked}
		/>
		{label && right && <Label htmlFor={id}>{label}</Label>}
	</React.Fragment>
);

Input.propTypes = {
	label: PropTypes.string,
	id: PropTypes.string,
	type: PropTypes.string,
	placeholder: PropTypes.string,
	onChange: PropTypes.func
};

export { Input };
