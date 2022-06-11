var arr = [[1,2,3,4],[5,6,7,8],[9,10,11,12]];
var total = 0;
for(let i=0;i<arr[0].length;i++){
    for(let j=0;j<arr.length;j++){
        total += arr[j][i]
    }
}
console.log(total);