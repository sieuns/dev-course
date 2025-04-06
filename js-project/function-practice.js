//함수 선언문 방식
function Hello1 (name) {
    return `Hello, ` + name ;
}

//함수 표현식 방식
const Hello2 = function(name) {
    return `Hello, ` + name;
}

//function 생성자 함수
const add = new Function('a', 'b', 'return a + b');

console.log(add(2, 3));

//화살표 함수
const Hello3 = (name) => `Hello, ` + name;

console.log(Hello1("Alice"));
console.log(Hello2("Bob"));   
console.log(Hello3("Charlie")); 