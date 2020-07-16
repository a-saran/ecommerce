import React from "react";

import "./preview-collection.styles.scss";

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items.slice(0, 4).map(({ name, id }) => (
          <div key={id}>{name}</div>
        ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
