import React from 'react';
import {connect } from 'react-redux';
import sortByName from '../../store/thunk/sortNameThunk';
import sortByPrice from '../../store/thunk/sortPriceThunk';
import sortByTime from '../../store/thunk/sortTimeThunk';
import getProductsAction from '../../store/thunk/productsThunk';

const Sortby = props => {
  const onClickPriceHandler = () => {
    props.sortPrice();
  }

  const onClickNameHandler = () => {
    props.sortName();
  }

  const onClickTimeHandler = () => {
    props.sortTime();
  }

  const onClickResetHandler = () => {
    props.resetProducts();
  }

  return (
    <div className='sort-container'>
      <h1 className='sort-txt'>Sort by:</h1>
      <input className='sort-btn' type='button' value='Price' onClick={onClickPriceHandler} />
      <input className='sort-btn' type='button' value='Time' onClick={onClickTimeHandler} />
      <input className='sort-btn' type='button' value='Name' onClick={onClickNameHandler} />
      <input className='sort-btn' type='button' value='Reset' onClick={onClickResetHandler} />
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  sortName: () => dispatch(sortByName()),
  sortPrice: () => dispatch(sortByPrice()),
  sortTime: () => dispatch(sortByTime()),
  resetProducts: () => dispatch(getProductsAction()),
})

export default connect(null, mapDispatchToProps)(Sortby);