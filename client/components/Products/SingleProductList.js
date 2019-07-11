import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  txt: {
    position: 'relative',
    bottom: '425px',
    left: '49%',
    fontSize: '25px',
  },
});

const SingleProductList = props => {
  const classes = useStyles();
  const {productID, itemPrice, gender, itemSize, sellerFirstName, sellerCountry, timestamp} = props

  return (
    <div className={classes.txt}>
      <ul>
        {
          gender !== undefined || itemSize !== undefined ? (
            <div>
              <li>SKU#: {productID}</li>
              <li>Price: {itemPrice}</li>
              <li>{gender + ' ' + itemSize}</li>
              <li>Seller: {sellerFirstName + ' ' + 'from ' + sellerCountry}</li>
              <li>Created at {timestamp}</li>
            </div>
          ) : (
            <div>
              <li>SKU#: {productID}</li>
              <li>Price: {itemPrice}</li>
              <li>Seller: {sellerFirstName + ' ' + 'from ' + sellerCountry}</li>
              <li>Created at {timestamp}</li>
            </div>
          )
        }

      </ul>
    </div>
  );
};

export default SingleProductList;
