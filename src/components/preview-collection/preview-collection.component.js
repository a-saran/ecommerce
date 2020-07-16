import React from "react";

import "./preview-collection.styles.scss";
import CollectionItem from "../collection-item/collection-item.component";

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items.slice(0, 4).map(({ id, ...itemProps }) => (
          <CollectionItem key={id} {...itemProps} />
        ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
