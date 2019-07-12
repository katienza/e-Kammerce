import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import getSingleProductAction from '../../store/thunk/productThunk';
import SingleProductList from './SingleProductList';
import Navbar from './Navbar';
import { makeStyles } from '@material-ui/core/styles';
import { Carousel } from 'react-responsive-carousel';
import CarouselImg from './CarouselImg';

const useStyles = makeStyles({
  card: {
    position: 'relative',
    maxWidth: 600,
    left: '5%',
    top: '15%',
    transform: 'translate(5%, 15%)',
  },
  txt: {
    position: 'relative',
    bottom: '250px',
    left: '50%',
  },
  carousel: {
    position: 'relative',
    height: '300px !important',
    width: '300px !important',
    right: '15%',
    top: '50px',
    margin: 'auto',
  }
});

const SingleProduct = props => {
  const classes = useStyles();
  const itemID = props.match.params.id;
  
  const { product } = props;

  const productObj = product.filter(obj => obj.product_id === itemID ? obj : null);
  const imgUrls = productObj[0].media.map(image => image.sizes[0].url)
  
  const productID = product.filter(obj => obj.product_id === itemID ? obj.product_id : null);
  const itemName = product.filter(obj => obj.product_id === itemID)
  const sellerFName = product.filter(obj => obj.product_id === itemID ? obj.seller.first_name : null)
  const sellerCountry = product.filter(obj => obj.product_id === itemID ? obj.seller : null )
  const itemPrice = product.filter(obj => obj.product_id === itemID ? obj.price : null )
  const gender = product.filter(obj => obj.product_id === itemID ? obj.category_data : null )
  const itemSize = product.filter(obj => obj.product_id === itemID ? obj.category_data : null )
  const productCreation = product.filter(obj => obj.product_id === itemID ? obj.created_at : null )
  const timestamp = new Date(
    Date.parse(productCreation[0].created_at),
  );
  const date =
    timestamp.toLocaleTimeString() +
    ' on ' +
    timestamp.toLocaleDateString();

  useEffect(() => {
    if (!props.product) props.getProduct(itemID);
  }, []);

  return (
    <div className='single-product-container'>
      <Navbar />
      <div>
        <div className={classes.carousel}>
          <Carousel showArrows={true} showThumbs={false}>
            {
              imgUrls.map((url, idx) => {
                return (
                  <CarouselImg key={idx} imgUrl={url} />
                )
              })
            }
          </Carousel>
        </div>
        <div className={classes.txt}>
          <h1>{itemName[0].title}</h1>
        </div>
        <SingleProductList
          timestamp={date}
          itemPrice={itemPrice[0].price_str}
          itemSize={itemSize[0].category_data}
          gender={gender[0].category_data}
          productID={productID[0].product_id}
          sellerFirstName={sellerFName[0].seller.first_name}
          sellerCountry={sellerCountry[0].seller.country}
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
