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