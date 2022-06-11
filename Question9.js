var str = "aniket";

function ReverseStr(str){
    var newStr = "";
for(let i=str.length-1;i>=0;i--){
    newStr += str[i];
}
return newStr;
    // console.log(newStr)
}
console.log(ReverseStr(str));