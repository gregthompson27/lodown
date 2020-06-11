'use strict';

// YOU KNOW WHAT TO DO //



/**
 * identity: take a value and return that value unchanged
 * 
 * @param {*} value: single value that can be any datatype
 * 
 * @return {*}: the input value, unchanged
 * 
 */
 
function identity(value) {
    return value;
}

module.exports.identity = identity;



/**
 * typeOf: take a value and return that value's datatype
 * 
 * @param {*} value: single value that can be any datatype
 * 
 * @return {String}: the datatype of the value, returned as a string
 * 
 */
 
function typeOf(value) {
    if (Array.isArray(value)) {
        return 'array';
    } else if (value === null) {
        return 'null';
    } else {
        return typeof value;
    }
}

module.exports.typeOf = typeOf;



/**
 * first: takes an array and a number and returns the first n elements of the array
 * 
 * @param {array} array: the array to collect elements from to return
 * @param {*} array: edge cases - if a datatype other than an array is passed in, function will return empty array
 * 
 * @param {Number} number: the number of elements that should be returned from <array>, starting from the beginning of the array
 * @param {*} number: edge cases - if a number not passed in as arg, will return the first element of the array
 * 
 * @return {Array}: returns an array of elements; some edge cases will cause a single element to be returned
 * 
 */
 
function first(array, number) {
    if (!Array.isArray(array) || number < 0) {
        return [];
    } else if (number > array.length) {
        return array;
    } else if (typeof number !== 'number') {
        return array[0];
    } else {
        return array.splice(0, number);
    }
}

module.exports.first = first;



/**
 * last: takes an array and number and returns the last n elements of the array
 * 
 * @param {array} array: the array to collect elements from to return
 * @param {*} array: edge cases - if passed in a value that is not an array, will return empty array
 * 
 * @param {number} number: the number of elements to return from the end of the array passed in
 * @param {*} number: edge cases - if value with datatype other than number passed in to number parameter, will return last element of array
 * 
 * @return {Array}: Returns an array of elements from the end of the array passed in. Some edge cases will cause a single element to be returned
 *
 */
 
function last(array, number) {
    if (!Array.isArray(array) || number < 0) {
        return [];
    } else if (typeof number !== 'number') {
        return array[array.length - 1];
    } else if (number > array.length) {
        return array;
    } else {
        return array.splice(array.length - number, number);
    } 
}

module.exports.last = last;



/**
 * indexOf: searches through an array and looks for a specific value; returns the first index of that value if found
 * 
 * @param {Array} array: an array to search through
 * 
 * @param {*} value: a value to look for in the array
 * 
 * @return {Number}: the index of the first instance of value; if not found will return -1
 * 
 */
 
 function indexOf(array, value) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return i;
        }
    }
    return -1;
}

module.exports.indexOf = indexOf;



/**
 * contains: searches through an array for a specific value; returns true or false based on finding of value
 * 
 * @param {Array} array: the array to search through
 * 
 * @param {*} value: the value to search for in the array
 * 
 * @return {Boolean}: returns true if value was found in the array and false otherwise
 * 
 */
 
function contains(array, value) {
    let check = false;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            check = true;
        }
    }
    return check ? true : false;
}
 
 module.exports.contains = contains;
 
 
 
 /**
 * each: takes a collection and executes a function on each element of the collection
 * 
 * @param {Array or Object} collection: the array or object to iterate over and perform the function argument on each element in collection arg
 * 
 * @param {Function} func: the function to execute on each element of the collection passed in 
 * 
 * @return {*}: return value of func arg
 * 
 */
 
function each(collection, func) {
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            func(collection[i], i, collection);
        }
    } else {
        for (let keys in collection) {
            func(collection[keys], keys, collection);
        }
    }
}

module.exports.each = each;



 /**
 * unique: takes in an array and returns a new array with all duplicate values removed (keeping one original value for each set of duplicates)
 * 
 * @param {Array} arr: the array to check for elements that are repeated
 * 
 * @return {Array}: array with all duplicate values removed
 * 
 */
 
function unique(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (!newArr.includes(arr[i])) {
            newArr.push(arr[i]);
        }
    }                   
    return newArr;
}

module.exports.unique = unique;



 /**
 * filter: iterates over an array and returns an array of all elements that passed the input function
 * 
 * @param {Array} arr: the array to be iterated over and whose elements will undergo the test func
 * 
 * @param {Function} func: the test function that will be executed on each element of the passed in array
 * 
 * @return {Array}: an array of all elements that passed the test function
 * 
 */
 
function filter(arr, func) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i], i, arr)) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

module.exports.filter = filter;



 /**
 * reject: iterate over an array and return an array of all elements that failed the input test function
 * 
 * @param {Array} arr: the array to be iterated over and whose elements will undergo the test func
 * 
 * @param {Function} func: the test function that will be executed on each element of the passed in array
 * 
 * @return {Array}: an array compiled of all elements that failed the test function
 * 
 */
 
function reject(arr, func) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (!func(arr[i], i, arr)) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

module.exports.reject = reject;



 /**
 * partition: takes in an array and returns an array of two arrays - the first of the elements of arr that passed func, and the second of the elements of arr that failed func
 * 
 * @param {Array} arr: the array to be iterated over and whose elements will undergo the test func
 * 
 * @param {Function} func: the test function that will be executed on each element of the passed in array
 * 
 * @return {Array}: an array of two subarrays, the first of which contains all passed elements from arr, and the second which contains all failed elements from arr
 * 
 */
 
function partition(arr, func) {
    return [filter(arr, func), reject(arr, func)];
}

module.exports.partition = partition;



 /**
 * map: takes an array or object and returns an array that contains the output of the passed in func after being called on each element
 * 
 * @param {Array or Object} collection: the array or object to be iterated over, with each of its elements having the passed in func invoked upon
 * 
 * @param {Function} func: the function to call on each element of the passed in collection
 * 
 * @return {Array}: returns a compilation of the outputs of func when called on each element of passed in collection
 * 
 */
 
function map(collection, func) {
    let newArr = [];
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            newArr.push(func(collection[i], i, collection));
        }
    } else {
        for (let keys in collection) {
            newArr.push(func(collection[keys], keys, collection));
        }
    }
    return newArr;
}

module.exports.map = map;



 /**
 * pluck: takes in an array of objects and returns an array with elements of the input property from each object
 * 
 * @param {Array} arr: an array of objects to be iterated over; looking for a specific property in each object
 * 
 * @param {String} property: the property to search for, and add to the array being returned if found, in each object of the passed in array
 * 
 * @return {Array}: return an array containing all values associated with the <property> key in all objects
 * 
 */
 
function pluck(arr, property) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i][property]);
    }
    return newArr;
}

module.exports.pluck = pluck;



 /**
 * every: takes in a collection and returns true if each element of <collection> passes a test function
 * 
 * @param {Array or Object} collection: the collection to be iterated over; each element will have the test function executed on it
 * 
 * @param {Function} func: the function to be invoked on all elements from passed in <collection>
 * 
 * @return {Boolean}: returns true if every element passes test, and returns false otherwise
 * 
 */
 
function every(collection, func) {
    if (Array.isArray(collection)) {
        if (func === undefined) {
            for (let i = 0; i < collection.length; i++) {
                if (collection[i] === false) {
                    return false;
                }
            }
            return true;
        } else {
            for (let i = 0; i < collection.length; i++) {
                if (func(collection[i], i, collection) === false) {
                    return false;
                }
            }
        }
    } else {
        if (func === undefined) {
            for (let keys in collection) {
                if (collection[keys] === false) {
                    return false;
                }
            }
            return true;
        }
        for (let keys in collection) {
            if (func(collection[keys], keys, collection) === false) {
                return false;
            }
        }
    }
    return true;
}

module.exports.every = every;



 /**
 * some: takes in a collection and returns true if even one element from <collection> passes a test function
 * 
 * @param {Array or Object} collection: an array or object containing elements to run a test function on to test for truthiness
 * 
 * @param {Function} func: a test function that will test each element in the <collection>, looking for a true value
 * 
 * @return {Boolean}: returns true if at least one element of <collection> returns true when passed into <func>; returns false if all elements return false when passed into <func>
 * 
 */
 
function some(collection, func) {
    if (Array.isArray(collection)) {
        if (func === undefined) {
            for (let i = 0; i < collection.length; i++) {
                if (collection[i] === true) {
                    return true;
                }
            }
            return false;
        } else {
            for (let i = 0; i < collection.length; i++) {
                if (func(collection[i], i, collection) === true) {
                    return true;
                }
            }
        }
    } else {
        if (func === undefined) {
            for (let keys in collection) {
                if (collection[keys] === true) {
                    return true;
                }
            }
            return false;
        }
        for (let keys in collection) {
            if (func(collection[keys], keys, collection) === true) {
                return true;
            }
        }
    }
    return false;
}

module.exports.some = some;



 /**
 * reduce: takes an array of multiple elements and reduces array to one element
 * 
 * @param {Array} array: the array to be iterated over, running the function on each of <array>'s elements
 * 
 * @param {Function} func: the function to run over each of array's elements; the return of the function call will be passed into the function as a parameter during the next iteration
 * 
 * @param {*} seed: a value that is passed into the function as an argument; is assigned to the value of first element of the array if not passed in
 * 
 */
 
function reduce(array, func, seed) {
    if (seed === undefined) {
        seed = array[0];
        for (let i = 1; i < array.length; i++) {
            seed = func(seed, array[i], i);
        }
    } else {
        for (let i = 0; i < array.length; i++) {
            seed = func(seed, array[i], i);
        }
    }
    return seed;
}

module.exports.reduce = reduce;



 /**
 * extend: copies all properties from an object (and potentially multiple objects) to a passed in object
 * 
 * @param {Object} copyToObj: an object that all properties will be copied to
 * 
 * @param {Object} copyFrom: object(s) whose properties will be copied to the target object
 * 
 * @return {Object}: an object containing the properties of all objects passed in
 * 
 */
 
function extend(copyToObj, ...copyFrom) {
    for (let i = 0; i < copyFrom.length; i++) {
        for (let keys in copyFrom[i]) {
            copyToObj[keys] = copyFrom[i][keys];
        }
    }
    return copyToObj;
}

module.exports.extend = extend;