import React from 'react';
import DateDiff from 'date-diff';

export default class Days extends React.Component {
  constructor() {
    super();
    this.state = {
      time : null,
    }
  }

  componentDidMount() {
    this.setState({
      time : new DateDiff(new Date(2021, 6, 7), new Date()).days(),
    });
  }

  render () {
  return (
      <div className='days'>
        <h1>Days To Bac : {this.state.time}</h1>
      </div>
    )
  }
}
