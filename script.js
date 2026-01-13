let cohort = ["張三", "李四", "王五"];
console.log('init: ' + cohort);
console.log("---------------------------------------------------");

// shift()
console.log("shift()，移除首個陣列元素")
let cohort01 = ["張三", "李四", "王五"];
cohort01.shift();
console.log("cohort01.shift(): " + cohort01);
console.log(cohort01 != cohort ? "是否改變原陣列（ mutate ）：是" : "是否改變原陣列（ mutate ）：否");
console.log("---------------------------------------------------");

// unshift()
console.log("unshift(_內容_)，加入首個陣列元素")
let cohort02 = ["張三", "李四", "王五"];
cohort02.unshift("錢二");
console.log("cohort02.unshift(\"錢二\"): " + cohort02);
console.log(cohort02 != cohort ? "是否改變原陣列（ mutate ）：是" : "是否改變原陣列（ mutate ）：否");
console.log("---------------------------------------------------");

// pop()
console.log("pop()，移除末個陣列元素")
let cohort03 = ["張三", "李四", "王五"];
cohort03.pop();
console.log("cohort03.pop(): " + cohort03);
console.log(cohort03 != cohort ? "是否改變原陣列（ mutate ）：是" : "是否改變原陣列（ mutate ）：否");
console.log("---------------------------------------------------");

// push()
console.log("push(_內容_)，加入末個陣列元素")
let cohort04 = ["張三", "李四", "王五"];
cohort04.push("趙六");
console.log("cohort04.push(\"趙六\"): " + cohort04);
console.log(cohort04 != cohort ? "是否改變原陣列（ mutate ）：是" : "是否改變原陣列（ mutate ）：否");
console.log("---------------------------------------------------");