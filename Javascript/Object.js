var data = {
     name:"Ibase",
     city:"Amravati",
     State:"MH",
     phone:99999999,
     

}

 console.log(data)

//Access the properties
console.log(data.city)
console.log(data.phone)

//Insert new Property
  data.email = "Ibase@gmail.com"
  console.log(data)

  //update the property
  data.phone = 88888888
  console.log(data)

  //delete the property 
     delete data.city 

     console.log(data)