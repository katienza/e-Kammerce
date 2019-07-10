import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Navbar from './Navbar';
import getProductsAction from '../../store/thunk/productsThunk';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    position: 'relative',
    padding: theme.spacing(10),
    textAlign: 'center',
    left: '50%',
    marginTop: '50%',
  },
}));

const Products = props => {
  useEffect(() => {
    props.getProducts();
  }, []);

  const { products } = props;
  const classes = useStyles();
  console.log(products);
  console.log(products.data);
  // console.log(products.data[0])
  return (
    <div className={classes.root}>
      <Navbar />
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Paper className={classes.paper}>Product 1</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>Product 2</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>Product 3</Paper>
        </Grid>
      </Grid>
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
