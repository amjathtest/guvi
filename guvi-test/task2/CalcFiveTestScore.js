var result = 0;
const testScoreAvg = testScore =>{
    for(var i = 0; i < 5; i++) {
        result = +testScore[i]+result;
    }
    return result/5;
}  
 
console.log(testScoreAvg([10,13,20,30,40]));