export const distributionCategories = (categoriesList, root, categoryToAdd) => {
  Object.assign(categoriesList, categoryToAdd);

  const rootLikeSet = new Set(root);

  Object.keys(categoryToAdd).map(Number).forEach(categoryId => {
    const newCategory = categoriesList[categoryId];
    if (newCategory.level === 0) {
      rootLikeSet.add(categoryId)
    } else {
      const children = new Set(categoriesList[newCategory.parent].children);
      children.add(categoryId);
      categoriesList[newCategory.parent].children = Array.from(children);
    }

  });
  return [categoriesList, rootLikeSet]
}
