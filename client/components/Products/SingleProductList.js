import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  txt: {
    position: 'relative',
    bottom: '250px',
    left: '49%',
    fontSize: '25px',
  },
});

const SingleProductList = props => {
  const classes = useStyles();
  const {productID, itemPrice, category, sellerFirstName, sellerCountry, timestamp} = props

  return (
    <div className={classes.txt}>
      <ul>
        {
          sellerFirstName[0].seller !== undefined && category.category_data.length > 0? (
            <div>
              <li>SKU#: {productID}</li>
              <li>Price: {itemPrice}</li>
              <li>{category.category_data[0].display_str}</li>
              <li>Seller: {sellerFirstName[0].seller.first_name + ' ' + 'from ' + sellerCountry[0].seller.country}</li>
              <li>Created at {timestamp}</li>
            </div>
          ) : sellerFirstName[0].seller !== undefined ? (
            <div>
              <li>SKU#: {productID}</li>
              <li>Price: {itemPrice}</li>
              <li>Seller: {sellerFirstName[0].seller.first_name + ' ' + 'from ' + sellerCountry[0].seller.country}</li>
              <li>Created at {timestamp}</li>
            </div>
          ) : (
            <div>
              <li>SKU#: {productID}</li>
              <li>Price: {itemPrice}</li>
              <li>Created at {timestamp}</li>
            </div>
          )
        }
      </ul>
    </div>
  );
};

export default SingleProductList;
