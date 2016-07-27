import React, { Component } from 'react';
import { connect } from 'react-apollo';
import { Meteor } from 'meteor/meteor';
import gql from 'graphql-tag';

const App = () => {
  return (
    <div>
      <p>Apollo-Meteor Starter Boilerplate!</p>
    </div>
  )
}

// This container brings in Apollo GraphQL data
const AppWithData = connect({
  mapQueriesToProps({ ownProps }) {

  },
})(App);


export default AppWithData;
