// Starter code for Create Your Own Array Methods Activity:

// sample arrays for testing your functions:
let testNumsArray = [3, 1, -5, 2, 105, -24, 495, 8, 246]
let testWordsArray = ['potato', 'rainbow', 'cloud', 'duck', 'orange', 'three']
let testNestedArray = [1, 2, 3, [4, 5, 6, [7, 8, 9, [10, 11, 12], 13, 14, 15], 16, 17, 18], 19, 20, 21]

// This is one example of implementing the functionality of forEach:
function newForEach(array, callback){
    for (let index = 0; index < array.length; index = index + 1){
        let currentItem = array[index]
        callback(currentItem, index, array)
    }//end for
}//end newForEach

// complete the functions below so that they mimic the built in methods
function newSome(array, callback) {
    for(let element of array) {
        if(callback(element)) return true;
    }//end for
    return false;
}//end newSome

function newEvery(array, callback) {
    for(let element of array) {
        if(!callback(element)) return false;
    }//end for
    return true;
}//end newEvery

function newFind(array, callback) {
    for(let element of array) {
        if(callback(element)) return element;
    }//end for
    return undefined;
}//end newFind

function newFindIndex(array, callback) {
    for(let index in array) {
        if(callback(array[index])) return Number(index);
    }//end for
    return -1;
}//end newFindIndex

function newMap(array, callback) {
    let result = [];
    for(let element of array) {
        result.push(callback(element));
    }//end for
    return result;
}//end newMap

function newFilter(array, callback) {
    let result = [];
    for(let element of array) {
        if(callback(element)) result.push(element);
    }//end for
    return result;
}//end newFilter

function newConcat(array1, array2) {
    let result = [];
    for(let element of array1) {
        result.push(element);
    }//end for
    for(let element of array2) {
        result.push(element);
    }//end for
    return result;
}//end newConcat

function newIncludes(array, value) {
    for(let element of array) {
        if(element === value) return true;
    }//end for
    return false;
}//end newIncludes

function newIndexOf(array, value) {
    for(let index in array) {
        if(array[index] === value) return Number(index);
    }//end for
    return -1;
}//end newIndexOf

function newJoin(array, seperator=',') {
    let result = '';
    for(let index in array) {
        if(index > 0) result += seperator;
        result += array[index];
    }//end for
    return result;
}//end newJoin

function newSlice(array, start=0, end=Infinity) {
    let result = [];
    start = start >= 0 ? start : array.length + start;
    end = end >= 0 ? end : array.length + end;

    for(let index in array) {
        if(index >= start && index < end) {
            result.push(array[index]);
        }//end if
    }//end for

    return result;
}//end newSlice

function newFlat(array, depth=1) {
    let result = [];

    for(let element of array) {
        if(depth && Array.isArray(element)) {
            result.push(...newFlat(element, depth-1));
        } else {
            result.push(element);
        }//end if/else
    }//end for

    return result;
}//end newFlat