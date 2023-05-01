const arrayOfFellows = [

    { name: "Jackie" },
    { name: "Ant-Man" },
    { name: "Gaspre" }

]



//// [].map(  function(){}  )
// [].map(  function( someParam ){ return someParam~altered }  )

// const newArrayOfNames = arrayOfFellows.map(  function( eachFellow ){  }  )

const newArrayOfNames = arrayOfFellows.map(  

    function( eachFellow ){  

        // console.log(eachFellow)
        return eachFellow.name
        // do something

    }  
    
)
// console.log( "new array from .map(): " , newArrayOfNames )




//// [].map(  ()=>{} )

const newArrayOfNamesButArrowTho = arrayOfFellows.map(  eachFellow => eachFellow.name  )
// const newArrayOfNamesButArrowTho = arrayOfFellows.map(  ( eachFellow )=> eachFellow.name  )
// const newArrayOfNamesButArrowTho = arrayOfFellows.map(  ( eachFellow )=>{ return eachFellow.name }  )
// console.log( "new array from .map() Ft. 🏹🏹: " , newArrayOfNames )