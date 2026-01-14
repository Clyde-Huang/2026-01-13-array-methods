let cohort = ["張三", "李四", "王五"];
console.log("cohort 設定: " + cohort);
console.log("以下cohortN都是複製此陣列，若有不同會舉例會重新設變數")
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
console.log("splice(start, deleteCount, item1, item2, ...)，" +
    "\nstart=第1輸入數字(必填)重誰開始刪，\ndeleteCount=第2數代表刪除到哪，不填就是後面全刪光，\n後面依序插入需要的元素");
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
console.log("cohort10.indexOf(\"王五\"): " + cohort10.indexOf("王五"));
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

// reduceRight()
console.log("reduceRight()，反過來算的 reduce() 不常用")
console.log("---------------------------------------------------");

// reverse()
console.log("reverse()，倒轉陣列，倒轉後保留結果");
let cohort12 = ["張三", "李四", "王五"];
console.log("cohort12.reverse(): " + cohort12.reverse());
console.log("cohort12: " + cohort12);
console.log(JSON.stringify(cohort12) !== JSON.stringify(cohort) ? "是否改變原陣列（ mutate ）：是" : "是否改變原陣列（ mutate ）：否");
console.log("---------------------------------------------------");

// sort()
console.log("sort()：會直接修改原陣列內容（In-place）。預設採 Unicode 排序。");
console.log("雖然 [\"張三\", \"李四\", \"王五\"].sort() 後順序剛好不變，但它確實執行了 原地改寫 動作。");
console.log("---------------------------------------------------");

// toSorted()
console.log("toSorted()，產生結果會是全新記憶體位置版本的sort()");
let cohort13 = ["張三", "李四", "王五"];
let sortedResult = cohort13.toSorted();
console.log("cohort13.toSorted(): " + cohort13.toSorted());
console.log("cohort13(原陣列保持不變): " + cohort13);
// 判斷是否「改變內容」:
console.log(JSON.stringify(cohort13) !== JSON.stringify(cohort) ? "是否改變原陣列（ mutate ）：是" : "是否改變原陣列（ mutate ）：否");
// 判斷是否為「不同物件/記憶體位置」
console.log(cohort13 !== sortedResult ? "記憶體位置是否不同：是 (這就是 toSorted 的優點)" : "記憶體位置是否不同：否");
console.log("即使都是[\"張三\", \"李四\", \"王五\"]，但記憶體位置不同")
console.log("---------------------------------------------------");

// some(()=>{})
console.log("some(()=>{})，輸出為 true/false 只要任1符合就true，後面函式有多種配合方式");
let cohort14 = ["張三", "李四", "王五"];
console.log("有沒有人姓李，cohort14.some(name => name.startsWith(\"李\")): " + cohort14.some(name => name.startsWith("李")));
console.log("cohort14: " + cohort14);
console.log(JSON.stringify(cohort14) !== JSON.stringify(cohort) ? "是否改變原陣列（ mutate ）：是" : "是否改變原陣列（ mutate ）：否");
console.log("---------------------------------------------------");

// every(()=>{})
console.log("every(()=>{})，輸出為 true/false 全符合就true，後面函式有多種配合方式");
let cohort15 = ["張三", "李四", "王五"];
console.log("有沒有都姓李，cohort15.every(name => name.startsWith(\"李\")): " + cohort15.every(name => name.startsWith("李")));
console.log("全員名字都是 2 個字嗎？: " + cohort15.every(name => name.length === 2));
console.log("cohort15: " + cohort15);
console.log(JSON.stringify(cohort15) !== JSON.stringify(cohort) ? "是否改變原陣列（ mutate ）：是" : "是否改變原陣列（ mutate ）：否");
console.log("---------------------------------------------------");

// map(()=>{})
console.log("map(()=>{})，迭代每個元素加工後回傳「長度相同」的新陣列，產生新記憶體位置。常用在轉換格式");
let cohort16 = ["張三", "李四", "王五"];
console.log("把每個元素都加入同學，cohort16.map(name => name+\"同學\"): "
    + cohort16.map(name => name + "同學"));
console.log("cohort16: " + cohort16);
console.log(JSON.stringify(cohort16) !== JSON.stringify(cohort) ? "是否改變原陣列（ mutate ）：是" : "是否改變原陣列（ mutate ）：否");
console.log("---------------------------------------------------");

// filter(()=>{})
console.log("filter(()=>{})，過濾掉不符合條件的元素，產生新記憶體位置。常用在刪除、過濾");
let cohort17 = ["張三", "李四", "王五"];
console.log("列出李姓以外的所有，cohort17.filter(name => !name.startsWith(\"李\")): " + cohort17.filter(name => !name.startsWith("李")))
console.log("cohort17: " + cohort17);
console.log(JSON.stringify(cohort17) !== JSON.stringify(cohort) ? "是否改變原陣列（ mutate ）：是" : "是否改變原陣列（ mutate ）：否");
console.log("---------------------------------------------------");

// forEach(()=>{})
console.log("filter(()=>{})，為陣列中的每個元素執行一次你指定的函式，但它不回傳任何結果（回傳值永遠是 undefined）");
let cohort18 = ["張三", "李四", "王五"];
console.log("把每個元素都加入同學，cohort18.forEach(name => name+\"同學\")): " + cohort18.forEach(name => name + "同學")) // undefined
// 上面那樣只會回傳 undefined
console.log("cohort18: " + cohort18);
console.log(JSON.stringify(cohort18) !== JSON.stringify(cohort) ? "是否改變原陣列（ mutate ）：是" : "是否改變原陣列（ mutate ）：否");
console.log("---------------------------------------------------");

// mapVSforeach
const methodDiff = {
    map: {
        回傳值: "一個全新的陣列",
        主要目的: "資料轉換 (Transformation)",
        鏈結能力: true,
        原始陣列: "保持不變 (Immutable)"
    },
    forEach: {
        回傳值: "undefined",
        主要目的: "執行副作用 (Side Effects)",
        鏈結能力: false,
        原始陣列: "常用於修改原陣列"
    }
};
console.table(methodDiff);
console.log("---------------------------------------------------");

// copyWithin()
console.log("copyWithin(F,S,E)，能複製陣列中的某些元素，並將它們放到並取同一個陣列指定的位置"
    +"F=要置換的位置 ( 必填 )，S、E 跟slice一樣");
let cohort19 = ["張三", "李四", "王五"];
console.log("cohort19.copyWithin(2,0,2): "+ cohort19.copyWithin(2,0,2)+"(只能顯示張三，但因原[].length=3)");
console.log("cohort19: " + cohort19);
console.log(JSON.stringify(cohort19) !== JSON.stringify(cohort) ? "是否改變原陣列（ mutate ）：是" : "是否改變原陣列（ mutate ）：否");
console.log("---------------------------------------------------");

// fill()
console.log("fill(F,S,E)，會把陣列中所有元素，置換為指定的值"
    +"F=要換成啥 ( 必填 ) 只傳入該數值視為全換，S、E 跟slice一樣");
let cohort20 = ["張三", "李四", "王五"];
console.log("cohort20.fill(\"錢二\",0,1): "+ cohort20.fill("錢二",0,1));
console.log("cohort20: " + cohort20);
console.log(JSON.stringify(cohort20) !== JSON.stringify(cohort) ? "是否改變原陣列（ mutate ）：是" : "是否改變原陣列（ mutate ）：否");
console.log("---------------------------------------------------");

//填回報
//簡單弄一下todolist