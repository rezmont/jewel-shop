import React from "react";
import SHOP_DATA from "../data/shop.data";
import CollectionPreview from '../components/collection-preview'

export class ShopPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colections: SHOP_DATA,
    };
  }

  render() {
    return (
      <div className="shop-page">
        {this.state.colections.map(({ id, ...otherPros }) => (
          <CollectionPreview key={id} {...otherPros} />
        ))}
      </div>
    );
  }
}

