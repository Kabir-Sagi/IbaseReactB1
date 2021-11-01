function arrayMethods() {
   var myData = [67,89,23,"Sagar"]
   console.log(myData.length) // length of array

   myData.push("ibase") // it inserts in element at the last position
   console.log(myData)

   myData.pop() // [67,89,23,'sagar]
   myData.pop() // [67,89,23]

   console.log(myData)

    myData.unshift("ReactJs")
    myData.unshift("Js")
    console.log(myData)

    myData.shift()
    myData.shift()
    console.log(myData)


}

arrayMethods()