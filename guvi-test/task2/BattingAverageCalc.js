const battingAverageCalc = (totalRuns, outs) => {
    return totalRuns/outs;
}

console.log("Total Batting Avg:" + battingAverageCalc(400, 40))