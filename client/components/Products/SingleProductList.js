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
  const {productID, itemPrice, category, sellerFirstName, sellerCountry, time} = props

  return (
    <div className={classes.txt}>
      <ul>
        {
          sellerFirstName && category.length > 0 ? (
            <div>
              <li>SKU#: {productID}</li>
              <li>Price: {itemPrice}</li>
              <li>{category}</li>
              <li>Seller: {sellerFirstName + ' ' + 'from ' + sellerCountry}</li>
              <li>Created at {time}</li>
            </div>
          ) : sellerFirstName ? (
            <div>
              <li>SKU#: {productID}</li>
              <li>Price: {itemPrice}</li>
              <li>Seller: {sellerFirstName + ' ' + 'from ' + sellerCountry}</li>
              <li>Created at {time}</li>
            </div>
          ) : (
            <div>
              <li>SKU#: {productID}</li>
              <li>Price: {itemPrice}</li>
              <li>Created at {time}</li>
            </div>
          )
        }
      </ul>
    </div>
  );
};

export default SingleProductList;
