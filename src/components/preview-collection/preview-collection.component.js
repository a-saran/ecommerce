import React from "react";
import { Link } from "react-router-dom";

import "./preview-collection.styles.scss";
import CollectionItem from "../collection-item/collection-item.component";

const CollectionPreview = ({ title, items, routeName }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">
        <Link to={`/shop/${routeName.toLowerCase()}`}>
          {title.toUpperCase()}
        </Link>
      </h1>
      <div className="preview">
        {items.slice(0, 4).map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
