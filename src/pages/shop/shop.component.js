import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";

import CollectionsOverView from "../../components/collections-overview/index";
import CollectionPage from "../collection/collection.component";
import { firestore } from "../../firebase/firebase.utils";
import { convertCollectionSnapshotToObject } from "../../utils";
import { updateCollections } from "../../redux/shop/actions";

class ShopPage extends React.Component {
  unSubscribeFromSnapShot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collections");

    collectionRef.onSnapshot(async snapshot => {
      const collectionMap = convertCollectionSnapshotToObject(snapshot);
      updateCollections(collectionMap);
    });
  }

  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionsOverView} />
        <Route
          exact
          path={`${match.path}/:collectionId`}
          component={CollectionPage}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionMap => dispatch(updateCollections(collectionMap))
});

export default connect(null, mapDispatchToProps)(ShopPage);
