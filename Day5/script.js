// Math in js
document.querySelector("#mthconstant").innerHTML = "<p><b>Math.E:</b> returns Euler's number, " + Math.E + "</p>" +
    "<p><b>Math.LN2:</b> it returns the natural logarithm of 2, " + Math.LN2 + "</p>" +
    "<p><b>Math.LN10:</b> it returns the natural logarithm of 10, " + Math.LN10 + "</p>" +
    "<p><b>Math.LOG2E:</b> it returns base 2 logarithm of E, " + Math.LOG2E + "</p>" +
    "<p><b>Math.Log10E:</b> it returns base 10 logarithm of E, " + Math.LOG10E + "</p>" +
    "<p><b>Math.PI:</b> it returns PI value, " + Math.PI + "</p>" +
    "<p><b>Math.SQRT1_2:</b> it returns the square root of 1/2, " + Math.SQRT1_2 + "</p>" +
    "<p><b>Math.SQRT2:</b> it returns the square root of 2, " + Math.SQRT2 + "</p>"
    //abs
document.querySelector("#mthabs").innerHTML = `It return absolute + value like abs of -9.7 is, ${Math.abs(-9.7)}`
    //acoc
document.querySelector("#mthacos").innerHTML = `It returns the arccosine of a number as a value value between 0 and PI radians, acos of 0.5 is, ${Math.acos(0.5)}`
    //asin 
document.querySelector("#mthasin").innerHTML = `It returns the arcsine of a number as a value between -PI/2 and PI/2 radians, asin of 0.5 is, ${Math.asin(0.5)}`
    //atan
document.querySelector("#mthatan").innerHTML = `It returns the arctangent of a number as a value between -PI/2 and PI/2 radians, atan of 1 is, ${Math.atan(1)}`
    //atan2
document.querySelector("#mthatan2").innerHTML = `It returns the arctangent of the quotient of its arguments, as a numeric value between PI and -PI radians, atan2 of (2,6) is, ${Math.atan2(2,6)}`
    //cos
document.querySelector("#mthcos").innerHTML = `applying cos on 5, ${Math.cos(5)}`
    //exp
document.querySelector("#mthexp").innerHTML = `applying exp on 5, ${Math.exp(5)}`
    //log
document.querySelector("#mthlog").innerHTML = `applying log on 7, ${Math.log(7)}`
    //max
document.querySelector("#mthmax").innerHTML = `applying max on 7,5,10,4 = ${Math.max(7,5,10,4)}`
    //min
document.querySelector("#mthmin").innerHTML = `applying min on 7,5,10,4 = ${Math.min(7,5,10,4)}`
    //pow
document.querySelector("#mthpow").innerHTML = `applying pow(7,5) = ${Math.pow(7,5)}`
    //sin
document.querySelector("#mthsin").innerHTML = `applying sin on 5, ${Math.sin(5)}`
    //sin
document.querySelector("#mthtan").innerHTML = `applying tan on 5, ${Math.tan(5)}`
    //sqrt
document.querySelector("#mthsqrt").innerHTML = `sqrt of 9 is, ${Math.sqrt(9)}`
    //ceil
document.querySelector("#mthceil").innerHTML = `applying ceil on 1.1, ${Math.ceil(1.1)}`
    //floor
document.querySelector("#mthfloor").innerHTML = `applying floor on 1.1, ${Math.floor(1.1)}`
    //round
document.querySelector("#mthround").innerHTML = `applying round on 5.4, ${Math.round(5.4)} and on 5.6, ${Math.round(5.6)}`
    //trunc
document.querySelector("#mthtrunc").innerHTML = `applying trunc on 5.8, ${Math.trunc(5.8)}`