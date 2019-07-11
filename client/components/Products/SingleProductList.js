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

  return (
    <div className={classes.txt}>
      <ul>
        <li>SKU#: {props.productID}</li>
        <li>Price: {props.itemPrice}</li>
        <li>{props.gender + ' ' + props.itemSize}</li>
        <li>Seller: {props.sellerFirstName + ' ' + 'from ' + props.sellerCountry}</li>
        <li>Created at {props.timestamp}</li>
      </ul>
    </div>
  );
};

export default SingleProductList;
