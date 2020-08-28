import React from "react";
import "./styles.scss";

import { connect } from "react-redux";
import CollectionItem from "../../components/collection-item/collection-item.component";
import { selectCollection } from "../../redux/shop/selector";

const CollectionPage = ({ collection }) => {
  if (!collection) {
    return <h1>404</h1>;
  }
  return (
    <div className="collection-page">
      {collection.items.map(c => (
        <CollectionItem item={c} />
      ))}
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
