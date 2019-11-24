import React from "react";
import { connect } from "react-redux";
import { addItem, toggleRemoveItem } from "../actions";

const Total = props => {
  return (
    <div className="content">
      <h4>Total Amount: ${props.car.price + props.additionalPrice}</h4>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    additionalPrice: state.additionalPrice
  };
};

export default connect(
  mapStateToProps,
  { addItem, toggleRemoveItem }
)(Total);

// const mapStateToProps = state => {
//   return {
//     car: state.car,
//     features: state.car.features,
//     additionalPrice: state.additionalPrice,
//     additionalFeatures: state.additionalFeatures
//   };
// };

// export default connect(
//   mapStateToProps,
//   {}
// )(AdditionalFeatures);
