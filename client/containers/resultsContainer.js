import React, { Component } from 'react';
import Results from '../components/results/Results';
import CardLabel from '../components/CardLabel';
import card from '../components/Card';

 class ResultsContainer extends Component {
  render() {
    let cardlabel = "shutup and drive"

     return (
      <Card>
        <CardLabel cardLabel={cardLabel} />
        <Results />
      </Card>
    )
  }
}

export default ResultsContainer;