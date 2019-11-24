import React from "react";
import { connect } from "react-redux";
import { addItem } from "../actions";

const AdditionalFeature = props => {
  // handleAddMember = e => {
  //   e.preventDefault();
  //   this.props.addMember(this.state.newMember);
  // };

  const handleAddItem = e => {
    e.preventDefault();
    props.addItem(props.feature);
  };

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={handleAddItem} className="button">
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default connect(
  null,
  { addItem }
)(AdditionalFeature);

// const mapPropsToState = state => {
//   return {
//     members: state.members
//   };
// };

// export default connect(
//   mapPropsToState,
//   { addMember, toggleDragon }
// )(DragonList);
