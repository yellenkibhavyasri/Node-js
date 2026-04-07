/*function add(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}

module.exports={
    add,
    sub,
};*/
//module.exports=sub;//this overwrites add function
exports.add=(a,b)=> a+b;
exports.sub=(a,b)=> a-b;