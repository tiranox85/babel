"use strict";

(function f(_x2) {
  var _arguments = arguments;
  _function: while (true) {
    var g = function g() {};

    var n = _x2;
    m = local1 = local2 = local3 = undefined;
    var m = _arguments[1] === undefined ? getDefaultValue() : _arguments[1];
    // `m` should be `getDefaultValue()` after first pass
    if (n <= 0) {
      return "foo";
    }
    // `local1`-`local3` should be fresh on each pass
    var local1;
    var local2 = undefined;
    var local3 = 3;
    // `g` should be function here on each pass
    g = 123;
    _arguments = [_x2 = n - 1];
    continue _function;
    return;
  }
})(1000000, true) === "foo";
