import React from "react";
import PropTypes from "prop-types";
import Select from "react-select";
import Creatable from "react-select/creatable";

class MultiSelectTagList extends React.Component {
	static propTypes = {
		label: PropTypes.string,
		optionsList: PropTypes.array,
		handleSelectChange: PropTypes.func,
		createNewOption: PropTypes.func,
		selectedValue: PropTypes.array,
		tagCreatable: PropTypes.bool,
	};

	state = {
		disabled: false,
		stayOpen: false,
		multi: true,
		multiValue: [],
	};

	render() {
		const { disabled, stayOpen } = this.state;

		const options = this.props.optionsList;
		return (
			<div className="section">
				<h3 className="section-heading">{this.props.label}</h3>
				{this.props.tagCreatable ? (
					<Creatable
						className="form-input tag-list"
						classNamePrefix="react-select"
						closeOnSelect={true}
						isMulti={true}
						onNewOptionClick={this.props.createNewOption}
						onChange={this.props.handleSelectChange}
						options={options}
						placeholder="Choose your interest(s)"
						value={this.props.selectedValue}
					/>
				) : (
					<Select
						className="form-input tag-list"
						classNamePrefix="react-select"
						closeOnSelect={!stayOpen}
						disabled={disabled}
						onChange={this.props.handleSelectChange}
						options={options}
						value={this.props.selectedValue}
					/>
				)}
			</div>
		);
	}
}

export default MultiSelectTagList;
