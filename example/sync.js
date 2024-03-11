const fs = require('fs');

console.log('시작');
let data = fs.readFileSync('./readme2.txt');
console.log('1번', data.toString());
data = fs.readFileSync('./readme2.txt');
console.log('2번', data.toString());
data = fs.readFileSync('./readme2.txt');
console.log('3번', data.toString());
console.log('끝');

//요청이 많아지면 성능에 문제가 생김
//-> 이전 작업이 완료되어야 다음 작업 진행
//-> 백그라운드 작업하는 동안 메인 스레드 놀게됨 => 비효율적