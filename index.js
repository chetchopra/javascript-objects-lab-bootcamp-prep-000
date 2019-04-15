var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  var newo = Object.assign({}, oject);
  newo[key] = value;
  return newo;
}