console.log(this);
console.log(this === module.exports);
console.log(this === exports)
function whatIsThis() {
    console.log('function', this === exports, this === global);
}
whatIsThis();

//최상위 스코프 내 this = export 객체 (= module.exports)
//함수 선언문 내 this = global