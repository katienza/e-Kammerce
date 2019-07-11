import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';
import getProductsAction from '../../store/thunk/productsThunk';
import ProductsList from './ProductsList';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

const Products = props => {
  useEffect(() => {
    props.getProducts();
  }, []);

  const { products } = props;

  return (
    <div className='products-container'>
      <Navbar />
      <GridList className='products-grid' cols={3}>
        {products.map(collection => {
          const timestamp = new Date(
            Date.parse(collection.created_at),
          );
          const date =
            timestamp.toLocaleTimeString() +
            ' on ' +
            timestamp.toLocaleDateString();

          return (
            <GridListTile key={collection.product_id}>
              <NavLink
                to={`/products/${collection.product_id}`}
                style={{
                  textDecoration: 'none',
                  color: 'unset',
                }}>
                <ProductsList
                  key={collection.product_id}
                  productsTitle={collection.title}
                  productsPrice={collection.price_str}
                  productsCreatedAt={date}
                  productsImage={
                    collection.media[0].sizes[0].url
                  }
                />
              </NavLink>
            </GridListTile>
          );
        })}
      </GridList>
    </div>
  );
};

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
