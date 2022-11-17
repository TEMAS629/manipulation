class Validator {
	isString(str){
	  return(typeof str === 'string');
	}
	isEmail(str) {
    return ((str.indexOf('@') !== -1) && (str.indexOf('.') !== -1))
  	}
  	isDomain(str) {
    return ((str.indexOf('.com') !== -1) || (str.indexOf('.ru') !== -1))
  	}
  	isNumber(str){
	  return(typeof str === 'number');
	}
}

let validator = new Validator();

let res = validator.isString('34')
console.log(res)
res = validator.isEmail('aaaaa@aaaa.aa')
console.log(res)
res = validator.isDomain('aaaaaa.com')
console.log(res)
res = validator.isNumber(34)
console.log(res)