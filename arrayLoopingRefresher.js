// console.log( "Array Looping" )


const arrayOfFellows = [

    { name: "Jackie" },
    { name: "Ant-Man" },
    { name: "Gaspre" }

]

// const arrOfNames = []

// for ( const eachElement of arrayOfFellows ){

//     // do something 
//     arrOfNames.push( eachElement.name )


// }

// console.log( "arrOfNames: " , arrOfNames )








function makeArrayOfNames ( someArr ){

    const arrOfNames = []
    
    for ( const eachElement of someArr ){
    
        // do something 
        arrOfNames.push( eachElement.name )
      
    }
    
    // console.log( "arrOfNames: " , arrOfNames )

    return arrOfNames
    
}
// console.log(  "return value: " , makeArrayOfNames( arrayOfFellows )  )








//// [].map(  function(){}  )
// [].map(  function( someParam ){ return someParam~altered }  )

// const newArrayOfNames = arrayOfFellows.map(  function( eachFellow ){  }  )

const newArrayOfNames = arrayOfFellows.map(  

    function( eachFellow ){  

        // console.log(eachFellow)
        return eachFellow.name

    }  
    
)
// console.log( "new array from .map(): " , newArrayOfNames )




//// [].map(  ()=>{} )

const newArrayOfNamesButArrowTho = arrayOfFellows.map(  eachFellow => eachFellow.name  )
// const newArrayOfNamesButArrowTho = arrayOfFellows.map(  ( eachFellow )=> eachFellow.name  )
// const newArrayOfNamesButArrowTho = arrayOfFellows.map(  ( eachFellow )=>{ return eachFellow.name }  )
// console.log( "new array from .map() Ft. 🏹🏹: " , newArrayOfNames )











// function makeNewObj( name, hometown ){  }

// const mike = makeNewObj( "Mike" , "BK" )




//// Arguments for the Callback Function for .map()

arrayOfFellows.map(      ( eachElement, index )=>{ console.log( eachElement, index ) }     )











// for ( eachElement of someArray ){

//     // do something

// }


// for ( let i = 0; i < arrayOfFellows.length; i++ ){

//     // do something

// }