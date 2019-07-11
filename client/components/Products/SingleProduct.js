import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import getSingleProductAction from '../../store/thunk/productThunk';

const SingleProduct = props => {
  const itemID = props.match.params.id

  useEffect(() => {
    props.getProduct(itemID)
  }, []);

  return <div>THIS IS MY SINGLE PRODUCT: {props.product.title}</div>;
};

const mapStateToProps = state => ({
  products: state.productsList.products,
  product: state.singleProduct.product,
});

const mapDispatchToProps = dispatch => ({
  getProduct: id => dispatch(getSingleProductAction(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SingleProduct);
