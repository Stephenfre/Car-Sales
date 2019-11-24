import React from "react";
import AdditionalFeature from "./AdditionalFeature";
import { connect } from "react-redux";
import { addItem } from "../actions";

const AdditionalFeatures = props => {
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.additionalFeatures.length ? (
        <ol type="1">
          {props.additionalFeatures.map(item => (
            <AdditionalFeature key={item.id} feature={item} addItem={addItem} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

// export default AdditionalFeatures;
const mapStateToProps = state => {
  return {
    car: state.car,
    features: state.car.features,
    additionalPrice: state.additionalPrice,
    additionalFeatures: state.additionalFeatures
  };
};

export default connect(
  mapStateToProps,
  {}
)(AdditionalFeatures);
