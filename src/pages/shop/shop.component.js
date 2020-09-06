import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";

import CollectionsOverView from "../../components/collections-overview/index";
import CollectionPage from "../collection/collection.component";
import { firestore } from "../../firebase/firebase.utils";
import { convertCollectionSnapshotToObject } from "../../utils";
import { updateCollections } from "../../redux/shop/actions";
import withSpinner from "../../components/spinner/spinner.component";

const CollectionsOverViewWithSpinner = withSpinner(CollectionsOverView);
const CollectionPageWithSpinner = withSpinner(CollectionPage);

class ShopPage extends React.Component {
  state = {
    loading: true
  };

  unSubscribeFromSnapShot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collections");

    collectionRef.onSnapshot(async snapshot => {
      const collectionMap = convertCollectionSnapshotToObject(snapshot);
      updateCollections(collectionMap);
      this.setState({ loading: false });
    });
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={props => (
            <CollectionsOverViewWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          exact
          path={`${match.path}/:collectionId`}
          render={props => (
            <CollectionPageWithSpinner isLoading={loading} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionMap => dispatch(updateCollections(collectionMap))
});

export default connect(null, mapDispatchToProps)(ShopPage);
