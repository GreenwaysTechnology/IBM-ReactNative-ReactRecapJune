//pure function

/**
   Pure function is one the functional programming principle

  Rules to certify the function as pure;

   1.function which recives input, should return the same.
    function doSomething(input){
      return input
    }
   in react, all components are pure with respect to props.

   2.what if the function needs to modifiy input

   ---According to functional programming, state(Data) memory should not be
   overriden,rather it should create/copy new memroy address
      ->Immuability

    let say its memory address is 1024
     x = {id;1} ==> change
 
 */

 //how to write pure function with respects to state(Data) mutation

 //impure function
//  function updateCity(profile,city){
//     profile.city=city;
//     return profile;
//  }

//pure function : apply immutablity : dont override existing memory address
 function updateCity(profile,city){
   
   //way : 1 : return new Object  ,by coping old object properties, supply updated prop
    // return {
    //   id: profile.id,
    //   name:profile.name,
    //   city:city
    // }

    //way 2: using javascript api 
    //return Object.assign({},profile,{city:city});

     //way 3 : Using es 7 spread Operator
    // return {...profile,city:city}
     return {...profile,city}
 }


 let profile ={id:1,name:'Subramanian',city:'Chennai'};

 //testing api
  Object.freeze(profile);

 const updatedProfile = updateCity(profile,'Delhi');
 console.log(updatedProfile)