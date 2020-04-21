import React, { Component } from 'react';
import Cat from './Cat';
import catRequest from '../network/catRequest';

export default class CatList extends Component {

  state = {
    catList: []
  }

  async componentDidMount () {
    const data = await catRequest(9);

    this.setState({catList: data});
  }

  render() {
    return (
      <section className='wrapper'>
        {this.state.catList.map(cat => <Cat key={cat.id} url={cat.url} />)}
      </section>
    )
  }
}
