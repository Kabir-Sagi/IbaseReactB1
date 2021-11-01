function fn() {
   var arr= [45,67,98,78,23,12,56,93]

  var filteredData= arr.filter(function(element,index){
         return  element < 50
     })

     console.log(filteredData)

}

// fn()


   function mobileFilter() {

    var mobileInfo = [{
           brand:"Samsung",
           price:20000,

    },{
        brand:"Apple",
           price:80000
    },{
        brand:"Samsung",
           price:50000
    },{
        brand:"OnePlus",
           price:40000
    },{
        brand:"Vivo",
           price:10000
    }]

      var filteredMobileData=  mobileInfo.filter(function(e,i){
                 return e.price < 30000
            })

            console.log(filteredMobileData)

   }

   mobileFilter()