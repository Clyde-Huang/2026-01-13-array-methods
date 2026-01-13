let cohort = ["張三", "李四", "王五"];
console.log("cohort init: " + cohort);
console.log("以下cohortN都是複製此陣列，有不同會重新設變數")
console.log("---------------------------------------------------");

// shift()
console.log("shift()，移除首個陣列元素，回傳「被移除的元素」");
let cohort01 = ["張三", "李四", "王五"];
console.log("cohort01.shift(): " + cohort01.shift());
console.log("cohort01: " + cohort01);
console.log(JSON.stringify(cohort01) !== JSON.stringify(cohort) ? "是否改變原陣列（ mutate ）：是" : "是否改變原陣列（ mutate ）：否");
console.log("---------------------------------------------------");

// unshift()
console.log("unshift(_內容_)，加入首個陣列元素，回傳「新長度」");
let cohort02 = ["張三", "李四", "王五"];
console.log("cohort02.unshift(\"錢二\"): " + cohort02.unshift("錢二"));
console.log("cohort02: " + cohort02);
console.log(JSON.stringify(cohort02) !== JSON.stringify(cohort) ? "是否改變原陣列（ mutate ）：是" : "是否改變原陣列（ mutate ）：否");
console.log("---------------------------------------------------");

// pop()
console.log("pop()，移除末個陣列元素，回傳「被移除的元素」");
let cohort03 = ["張三", "李四", "王五"];
console.log("cohort03.pop(): " + cohort03.pop());
console.log("cohort03: " + cohort03);
console.log(JSON.stringify(cohort03) !== JSON.stringify(cohort) ? "是否改變原陣列（ mutate ）：是" : "是否改變原陣列（ mutate ）：否");
console.log("---------------------------------------------------");

// push()
console.log("push(_內容_)，加入末個陣列元素，回傳「新長度」");
let cohort04 = ["張三", "李四", "王五"];
console.log("cohort04.push(\"趙六\"): " + cohort04.push("趙六"));
console.log("cohort04: " + cohort04);
console.log(JSON.stringify(cohort04) !== JSON.stringify(cohort) ? "是否改變原陣列（ mutate ）：是" : "是否改變原陣列（ mutate ）：否");
console.log("---------------------------------------------------");

// length，是屬性，不是方法
console.log("length，計算陣列元素有幾個，輸出是數字，常用");
let cohort05 = ["張三", "李四", "王五"];
console.log("cohort05.length: " + cohort05.length);
console.log("cohort05: " + cohort05);
console.log(JSON.stringify(cohort05) !== JSON.stringify(cohort) ? "是否改變原陣列（ mutate ）：是" : "是否改變原陣列（ mutate ）：否");
console.log("---------------------------------------------------");

// splice()
console.log("splice(start, deleteCount, item1, item2, ...)，\nstart=第1輸入數字(必填)重誰開始刪，\ndeleteCount=第2數代表刪除到哪，不填就是後面全刪光，\n後面依序插入需要的元素");
let cohort06 = ["張三", "李四", "王五"];
console.log("cohort06.splice(1): " + cohort06.splice(1));
console.log("cohort06: " + cohort06);

console.log("");

let cohort061 = ["張三", "李四", "王五"];
console.log("cohort061.splice(1,1): " + cohort061.splice(1, 1));
console.log("cohort061: " + cohort061);

console.log("");

let cohort062 = ["張三", "李四", "王五"];
console.log("cohort062.splice(1, 1,\"錢六\",\"趙七\"): " + cohort062.splice(1, 1, "錢六", "趙七"));
console.log("cohort062: " + cohort062);

console.log("");

console.log("splice(N,0)=輸出沒東西=不刪，若後面再輸入元素，可由N位置插入")
console.log("---------------------------------------------------");

// slice()
console.log("slice(S,E)，切陣列，S=重誰開始，E=到誰 不寫就是取到最後，\nE-S=幾個元素 ; S 包含該元素，E 不包");
let cohort07 = ["張三", "李四", "王五"];
console.log("cohort07.slice(1,2): " + cohort07.slice(1, 2));
console.log("cohort07: " + cohort07);
console.log(JSON.stringify(cohort07) !== JSON.stringify(cohort) ? "是否改變原陣列（ mutate ）：是" : "是否改變原陣列（ mutate ）：否");
console.log("slice()，若都不帶參數就是複製原本 array，因 non-mutating 但被展開運算子取代")
console.log("---------------------------------------------------");

//補充
console.log("補充: 即使 展開運算子 & slice() 都是複製原使陣列，但與原先記憶體位置都不同")
console.log("補充: 觸發splice(任何形式) 後的 array 記憶體位置與原先相同(一模一樣)(這算是缺點)")
console.log("註記: 記憶體位置相同，這在現代框架(如 React)中被視為缺點，因為位址不變會導致畫面無法正確偵測變動並更新。");
console.log("---------------------------------------------------");

// join()
console.log("join()，元素之間插入(加入)指定的分隔，沒輸入就是預設,");
let cohort08 = ["張三", "李四", "王五"];
console.log("cohort08.join(\" X \"): " + cohort08.join(" X "));
console.log("cohort08: " + cohort08);
console.log(JSON.stringify(cohort08) !== JSON.stringify(cohort) ? "是否改變原陣列（ mutate ）：是" : "是否改變原陣列（ mutate ）：否");
console.log("---------------------------------------------------");

// concat()
console.log("concat()，把元素或陣列等等加入陣列，複製前面內容後加入，建議學展開運算子就好");
let cohort09 = ["張三", "李四", "王五"];
console.log("cohort09.concat(\"錢六\",\"趙七\"): " + cohort09.concat("錢六", "趙七"));
console.log("cohort09: " + cohort09);
console.log(JSON.stringify(cohort09) !== JSON.stringify(cohort) ? "是否改變原陣列（ mutate ）：是" : "是否改變原陣列（ mutate ）：否");

console.log("");

console.log("cohort09.concat(cohort): " + cohort09.concat(cohort));
//上下相同
console.log("[...cohort09,...cohort]: " + [...cohort09, ...cohort]);
console.log("---------------------------------------------------");

//indexOf()
console.log("indexOf()，搜尋陣列有沒有該內容(取第一個)，有的話就顯示第幾個，無就顯示-1");
console.log("indexOf(E,N)，E =要輸入元素，N =從第幾個開始找(預設=0=重頭找)");
let cohort10 = ["張三", "李四", "王五"];
console.log("cohort10.indexOf(\"王五\"): " + cohort10.indexOf("王五", 1));
console.log(JSON.stringify(cohort10) !== JSON.stringify(cohort) ? "是否改變原陣列（ mutate ）：是" : "是否改變原陣列（ mutate ）：否");
console.log("---------------------------------------------------");

//lastIndexOf()
console.log("lastIndexOf()，倒過來搜尋陣列有沒有該內容(取第一個)，有的話就顯示第幾個，無就顯示-1，剩下參考indexOf()");
console.log("---------------------------------------------------");


// reduce()
console.log("reduce()，迭代陣列每個元素，並將處理結果傳遞給下一次迭代，最終匯聚成「單一結果」");
let cohort11 = ["張三", "李四", "王五"];
// 這裡可以看到迭代的過程：acc 是累加的結果，cur 是當前迭代到的元素
let result = cohort11.reduce((acc, cur, index) => {
    console.log(`第 ${index} 次迭代：目前累積為 [${acc}]，當前元素為 [${cur}]`);
    return acc + " X " + cur;
});
console.log("最終匯聚結果(acc +\" X \"+ cur)(整體是一個結果): " + result);
console.log("cohort11: " + cohort11);
console.log(JSON.stringify(cohort11) !== JSON.stringify(cohort) ? "是否改變原陣列（ mutate ）：是" : "是否改變原陣列（ mutate ）：否");

console.log("");

// (強烈建議)還可以加上 初始值 ，若加上的話 index 由 0 開始算，acc由初始值開始
let result1 = cohort11.reduce((acc, cur, index) => {
    console.log(`第 ${index} 次迭代：目前累積為 [${acc}]，當前元素為 [${cur}]`);
    return acc + " X " + cur;
}, "錢二");
console.log("最終匯聚結果(acc +\" X \"+ cur)(整體是一個結果): " + result1);

console.log("");

console.log("array.reduce((acc, cur, index, array) => { ... }, initialValue")
console.log("acc：必須寫（累加器）。\ncur：必須寫（當前元素）。");
console.log("index：可選。記錄目前迭代到第幾個位置。\narray：可選。呼叫 reduce 的那個原始陣列本身。");
console.log("---------------------------------------------------");

//reduceRight()
console.log("反過來算的 reduce() 不常用")