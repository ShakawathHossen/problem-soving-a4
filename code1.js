// problem 1 
// declare function 
function anaToVori(ana) {
    var vori = 16;
    // error handaling 

    if (typeof ana != "number") {
        return "please give a number";
    }
    if (ana < 0) {
        return "please enter positive input";
    }
    else
        // calculation
        var anaConvertVori = ana / 16;
    // return value 
    return anaConvertVori;

}
// call function 
var result = anaToVori(26);
// print 
console.log(result);