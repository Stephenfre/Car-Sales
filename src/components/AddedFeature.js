import React from "react";
import { connect } from "react-redux";
import { toggleRemoveItem } from "../actions";

const AddedFeature = props => {
  const handleRemoveItem = e => {
    e.preventDefault();
    props.toggleRemoveItem(props.feature);
  };

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={handleRemoveItem} className="button">
        X
      </button>
      {props.feature.name}
    </li>
  );
};

export default connect(
  null,
  { toggleRemoveItem }
)(AddedFeature);
