function isPos(x){
  if (x > 0)
    return true;
  return false;
}

function isNumber(x){
  if (typeof(x) == "number")
    return true;
  return false;
}

function isString(x) {
  if (typeof(x) == "string")
    return true;
  return false;
}

function filterArr(a, pred) {
  var res = [];
  for (var i = 0; i < a.length; i++)
    if (pred(a[i]))
      res.push(a[i]);
  return res;
}

var arr = [ 1, -1, 2, -3, 666, -777, "Gravity Falls", "JUST DO IT"];

alert("Исходный массив: " + arr);
alert("Только положительные: " + filterArr(arr, isPos));
alert("Только числа: " + filterArr(arr, isNumber));
alert("Только строки: " + filterArr(arr, isString));
