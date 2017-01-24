define(['./object/assign', './object/create', './object/defaults', './object/defaultsDeep', './object/extend', './object/findKey', './object/findLastKey', './object/forIn', './object/forInRight', './object/forOwn', './object/forOwnRight', './object/functions', './object/get', './object/has', './object/invert', './object/keys', './object/keysIn', './object/mapKeys', './object/mapValues', './object/merge', './object/methods', './object/omit', './object/pairs', './object/pick', './object/result', './object/set', './object/transform', './object/values', './object/valuesIn'], function(assign, create, defaults, defaultsDeep, extend, findKey, findLastKey, forIn, forInRight, forOwn, forOwnRight, functions, get, has, invert, keys, keysIn, mapKeys, mapValues, merge, methods, omit, pairs, pick, result, set, transform, values, valuesIn) {
  return {
    'assign': assign,
    'create': create,
    'defaults': defaults,
    'defaultsDeep': defaultsDeep,
    'extend': extend,
    'findKey': findKey,
    'findLastKey': findLastKey,
    'forIn': forIn,
    'forInRight': forInRight,
    'forOwn': forOwn,
    'forOwnRight': forOwnRight,
    'functions': functions,
    'get': get,
    'has': has,
    'invert': invert,
    'keys': keys,
    'keysIn': keysIn,
    'mapKeys': mapKeys,
    'mapValues': mapValues,
    'merge': merge,
    'methods': methods,
    'omit': omit,
    'pairs': pairs,
    'pick': pick,
    'result': result,
    'set': set,
    'transform': transform,
    'values': values,
    'valuesIn': valuesIn
  };
});