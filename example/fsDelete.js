const fs = require('fs').promises;

fs.readdir('./folder')
.then((dir) => {
    console.log('폴더 내용 확인', dir);
    return fs.unlink('./folder/newfile.js');    //파일 없으면 오류 나니까 있는지 확인 필수
})
.then(() => {
    console.log('파일 삭제 성공');
    return fs.rmdir('./folder');;   //내부 파일 존재하면 에러 발생
})
.then(() => {
    console.log('폴더 삭제 성공');
})
.catch((err) => {
    console.error(err);
});