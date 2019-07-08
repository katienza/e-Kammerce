import React, {Component} from 'react';
import Navbar from './Navbar'

class Products extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <Navbar />
        <div>
          <h1>
            Hello world this is a react app with babel loaded
          </h1>
        </div>
      </div>
    );
  }
};

export default Products;
