import React from "react";
import { connect } from "react-redux";
import { toggleRemoveItem } from "../actions";

import AddedFeature from "./AddedFeature";

const AddedFeatures = props => {
  console.log(props.features);
  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.features.length ? (
        <ol type="1">
          {props.car.features.map(item => (
            <AddedFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

const mapPropsToState = state => {
  return {
    car: state.car,
    features: state.car.features,
    additionalPrice: state.additionalPrice,
    additionalFeatures: state.additionalFeatures
  };
};

export default connect(
  mapPropsToState,
  { toggleRemoveItem }
)(AddedFeatures);
