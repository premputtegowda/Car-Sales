import React from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

import { connect } from 'react-redux';
import { addFeature, removeFeature} from './actions/additionalFeatureActions'





const App = (props) => {
  // const state = {
  //   additionalPrice: 0,
  //   car: {
  //     price: 26395,
  //     name: '2019 Ford Mustang',
  //     image:
  //       'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
  //     features: []
  //   },
  //   additionalFeatures: [
  //     { id: 1, name: 'V-6 engine', price: 1500 },
  //     { id: 2, name: 'Racing detail package', price: 1500 },
  //     { id: 3, name: 'Premium sound system', price: 500 },
  //     { id: 4, name: 'Rear spoiler', price: 250 }
  //   ]
  // };
  console.log(props)
  const removeFeature = item => {
    // dispatch an action here to remove an item
    return {type: 'REMOVE_FEATURE', payload: item}
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
    return {type: 'ADD_FEATURE', payload: item}
    
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.vehicle.car} />
        <AddedFeatures car={props.vehicle.car} removeFeature={props.removeFeature}/>
        
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={props.vehicle.additionalFeatures} addFeature = {props.addFeature}/>
        <Total car={props.vehicle.car} additionalPrice={props.vehicle.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps= (state) => {
  return {
      vehicle: state.additionalFeaturesReducer
  }
}

export default connect(mapStateToProps,{ addFeature, removeFeature })(App);
