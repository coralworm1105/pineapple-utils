/**
 * 
 * @desc   判断是否NaN
 * @param  {Any} value 
 * @return {Boolean}
 */
function isNaN(value) {    
    return value !== value;
};

modules.export = isNaN