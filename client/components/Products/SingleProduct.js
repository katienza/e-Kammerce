import React, { Component } from 'react';
import { connect } from 'react-redux';
import getSingleProductAction from '../../store/thunk/productThunk';
import SingleProductList from './SingleProductList';
import Navbar from './Navbar';
import { Carousel } from 'react-responsive-carousel';
import CarouselImg from './CarouselImg';

class SingleProduct extends Component {
  componentDidMount() {
    const itemID = this.props.match.params.id;
    this.props.getProduct(itemID)
  }

  render() {
    if (this.props.product.length === 0) {
      return <div>Loading...</div>
    }

    const { category_data, title, created_at, media, price_str, seller, product_id } = this.props.product[0]
    const categoryData = category_data.map(category => category.display_str ? category.display_str : null).join(' ')
    const imgUrls = media.map(img => img.sizes[0].url)
    const timestamp = new Date(Date.parse(created_at));
    const date = timestamp.toLocaleTimeString() + ' on ' + timestamp.toLocaleDateString();
 
    return (
      <div className='single-product-container'>
        <Navbar />
        <div>
          <div className='carousel'>
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
          <div className='single-product-txt'>
            <h1>{title}</h1>
          </div>
          <SingleProductList
            time={date}
            itemPrice={price_str}
            category={categoryData}
            productID={product_id}
            sellerFirstName={seller.first_name}
            sellerCountry={seller.country}
          />
        </div>
      </div>
    );
  }
};

const mapStateToProps = state => ({
  product: state.productsList.products,
});

const mapDispatchToProps = dispatch => ({
  getProduct: id => dispatch(getSingleProductAction(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SingleProduct);
