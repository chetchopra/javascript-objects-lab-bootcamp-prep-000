var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  var newo = Object.assign({}, object);
  newo[key] = value;
  return newo;
}