import React from "react";

import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";
import { connect } from "react-redux";
import { addItem, toggleRemoveItem } from "./actions";

const App = () => {
  const state = {};

  const removeFeature = item => {
    // dispatch an action here to remove an item
    this.props.toggleRemoveItem(item);
    console.log(item);
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
    this.props.addItem(item);
    console.log(item);
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={state.car} />
        <AddedFeatures
          car={state.car}
          addItem={buyItem}
          toggleRemoveItem={removeFeature}
        />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={state.additionalFeatures} />
        <Total car={state.car} additionalPrice={state.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    additionalFeatures: state.additionalFeatures
  };
};

export default connect(
  mapStateToProps,
  { addItem, toggleRemoveItem }
)(App);

// export default App;
