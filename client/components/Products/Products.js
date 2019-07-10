import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Navbar from './Navbar';
import getProductsAction from '../../store/thunk/productsThunk';
class Products extends PureComponent {
  constructor() {
    super();
  }

  componentDidMount() {
    const {getProducts} = this.props;
    getProducts();
  }

  render() {
    const { products } = this.props;
    // const productsTitle = products.data.map((productsList) => {return productsList.data.map((product, idx) => {return product.title})});
    // const productsPrice = products.map((productsList) => {return productsList.data.map((product, idx) => {return product.price_str})});
    // const productsCreatedAt = products.map((productsList) => {return productsList.data.map((product, idx) => {return product.created_at})});
    // const productsImg = products.map((productsList) => {return productsList.data.map((product, idx) => {return product.media.map((shirt, idx) => {return shirt.sizes[0].url})})})
    return (
      <div>
        <Navbar />
        <div>
          <h1>PRODUCTS LIST:</h1>
          <div>
            {/* {productsCreatedAt} */}
            {/* {productsTitle} */}
            {/* {productsPrice}
            <img src={productsImg} alt='products' /> */}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.productsList.products,
});

const mapDispatchToProps = dispatch => ({
  getProducts: () => dispatch(getProductsAction()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Products);
