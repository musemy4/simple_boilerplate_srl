// test('테스트 설명', () => {
//     expect('검증 대상').toXxx('기대결과');
// });

const { isExportDeclaration } = require("typescript");


// 1-1. 정확한 등가검사: toBe
test("1 is 1", () => {
    expect(1).toBe(1);
})


// 1-2. 객체의 값을 확인하려면, toEqual을 사용
test('object assignment', () => {
    const data = {one:1};
    data['two'] = 2;
    expect(data).toEqual({one:1, two:2});
})



// 5.. toThrow
function getUser(id) {
    if(id <= 0) throw new Error('invalid ID');
    return {
        id,
        email: `user${id}@test.com`,
    }
}

// 예외에 대한 test는 함수로 한번 감싸준다
test('throw when id is non negative', () => {
    expect(() => getUser(-1)).toThrow();
    expect(() => getUser(-1)).toThrow('invalid ID');
})
