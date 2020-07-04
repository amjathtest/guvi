const poundTokg = function(p){
    let pound = 0.45359237;
    return (p * pound).toFixed(2)
}
console.log('Pound To kg:' + poundTokg(12) + 'Kg');