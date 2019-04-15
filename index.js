var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  o2 = object.slice(0)
  o2[key] = value;
  return o2;
}