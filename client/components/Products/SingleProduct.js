import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import getSingleProductAction from '../../store/thunk/productThunk';
import SingleProductList from './SingleProductList';
import Navbar from './Navbar';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles({
  card: {
    position: 'relative',
    maxWidth: 600,
    left: '5%',
    top: '15%',
    transform: 'translate(5%, 15%)',
  },
  txt: {
    display: 'inline-block',
    position: 'relative',
    bottom: '450px',
    left: '50%',
  },
});

const SingleProduct = props => {
  const classes = useStyles();
  const itemID = props.match.params.id;
  const { product } = props;
  const img =
    product.media &&
    product.media[0] &&
    product.media[0].sizes &&
    product.media[0].sizes[0] &&
    product.media[0].sizes[0].url;
  const sellerFName =
    product.seller && product.seller.first_name;
  const sellerCountry =
    product.seller && product.seller.country;
  const productID = product.product_id;
  const gender =
    product.category_data &&
    product.category_data[0] &&
    product.category_data[0].display_str;
  const itemSize =
    product.category_data &&
    product.category_data[1] &&
    product.category_data[1].display_str;
  const itemPrice = product.price_str;
  const timestamp = new Date(
    Date.parse(product.created_at),
  );
  const date =
    timestamp.toLocaleTimeString() +
    ' on ' +
    timestamp.toLocaleDateString();

  useEffect(() => {
    props.getProduct(itemID);
  }, []);

  return (
    <div className='single-product-container'>
      <Navbar />
      <div>
        <Card className={classes.card}>
          <CardMedia
            component='img'
            height='500'
            image={img}
            title={props.product.title}
          />
        </Card>
        <div className={classes.txt}>
          <h1>{props.product.title}</h1>
        </div>
        <SingleProductList
          timestamp={date}
          itemPrice={itemPrice}
          itemSize={itemSize}
          gender={gender}
          productID={productID}
          sellerFirstName={sellerFName}
          sellerCountry={sellerCountry}
        />
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  product: state.singleProduct.product,
});

const mapDispatchToProps = dispatch => ({
  getProduct: id => dispatch(getSingleProductAction(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SingleProduct);
