import React, { Component } from 'react';
import Cat from './Cat';
import CatBoddy from './CatBoddy';
import catRequest from '../network/catRequest';

class CatList extends Component {
  // TODO: use proptypes checker.

  state = {
    catList: [],
  }

  async componentDidMount () {
    const data = await catRequest(9);

    this.setState({catList: data});
  }

  async componentDidUpdate (prevProps, prevState) {
    if (prevProps.requestId !== this.props.requestId) {
      const data = await catRequest(9);
      this.setState({catList: data});
    }
  }

  render() {
    return (
      <section className='wrapper'>
        {this.state.catList.map(cat => <Cat key={cat.id} url={cat.url} />)}
      </section>
    )
  }
}

export default CatBoddy(CatList);
