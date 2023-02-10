let s = "25525511135"
let result = [];

for (let i = 0; i < s.length - 3; i++) { // i = 0 
  let a = s.substring(0, i + 1);  // a = 2
  if (a <= 255) {
    for (let j = i + 1; j < s.length - 2; j++) { // i = 0  j = 1
      let b = s.substring(i + 1 , j + 1);  // b = 5
      if (b <= 255) {
        for (let k = j + 1; k < s.length - 1; k++) { // i = 0  j = 1 k = 2
          let c = s.substring(j + 1, k + 1);  // c = 5
          if (c <= 255) {
            for (let l = k + 1; l < s.length; l++) { // i = 0  j = 1 k = 2 l = 3
              let d = s.substring(k + 1, l + 1); // d = 2 
              if (d <= 255) {
                console.log(`i=>${i}, j=>${j}, k=>${k}, l=>${l} ==> a=>${a}`);
                console.log(`i=>${i}, j=>${j}, k=>${k}, l=>${l} ==> b=>${b}`);
                console.log(`i=>${i}, j=>${j}, k=>${k}, l=>${l} ==> c=>${c}`);
                console.log(`i=>${i}, j=>${j}, k=>${k}, l=>${l} ==> d=>${d}`);
                console.log("     \n");
                if (a.length + b.length + c.length + d.length == s.length) {
                  result.push(a + "." + b + "." + c + "." + d);
                }
              }
            }
          }
        }
      }
    }
  }
}

console.log(result)
