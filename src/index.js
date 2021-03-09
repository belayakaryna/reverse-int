module.exports = function reverse (n) {
 array=String(n).split("")
    if(array[0]=="-"){
      array.splice(0,1)
      return(Number(array.reverse().join("")))
        }
    else{
      return(Number(array.reverse().join("")))
    }
}
