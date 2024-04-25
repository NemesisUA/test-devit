function nodeChildCount(node, deps = Infinity) {
  let count = 0;
  function countChildren(node, childDeps) {
    if (childDeps > deps) return;
    const children = node.childNodes;
    for (let i = 0; i < children.length; i++) {
      count++;
      countChildren(children[i], childDeps + 1);
    }
  }
  countChildren(node, 1);
  return count;
}