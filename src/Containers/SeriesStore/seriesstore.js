import React, { Component } from 'react';
import styles from './seriesstore.css';
import { connect } from 'react-redux';

import { purchaseProduct, starProduct } from '../../Actions/productActions';
import { Product } from '../../Components/App';
import { ProductList } from '../../Components/App';

class SeriesStore extends Component {
  render () {
    const { productList } = this.props;

    const actions = {
      purchaseProduct: this.props.purchaseProduct,
      starProduct: this.props.starProduct
    };

    return (
      <div className={styles.groceryStoreApp}>
        <h1>Series store</h1>
        <ProductList products={productList} actions={actions} />
      </div>
    );
  }
}

const mapStateToProps = ({ productList }) => ({ productList });

export default connect(mapStateToProps, {
  purchaseProduct,
  starProduct
})(SeriesStore);
