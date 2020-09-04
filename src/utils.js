export const convertCollectionSnapshotToObject = collections => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title),
      id: doc.id,
      title,
      items
    };
  });

  return convertArrayToHashMap(transformedCollection, "title");
};

const convertArrayToHashMap = (array, key) => {
  return array.reduce((acc, collection) => {
    acc[collection[key].toLowerCase()] = collection;
    return acc;
  }, {});
};
