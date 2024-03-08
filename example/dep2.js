const dep1 = require('./dep1');
console.log('require dep1', dep1);
module.exports = () => {
    console.log('dep1', dep1);
};

//순환참조가 있을 경우 순환 참조되는 대상(dep1)을 빈 객체로 만듬