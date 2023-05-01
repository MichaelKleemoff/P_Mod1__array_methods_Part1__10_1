const arrayOfFellows = [

    { name: "Jackie" },
    { name: "Ant-Man" },
    { name: "Gaspre" },
    { name: "Jesse" },
    { name: "Shaka" }

]


//// [].forEach(  ()=>{}  )

// arrayOfFellows.forEach(  ()=>{}  )

// const forEachReturnValue = arrayOfFellows.forEach(  eachFel => console.log( "✅ " + eachFel.name ) )

// const forEachReturnValue = arrayOfFellows.forEach(  

//     ( eachFel )=>{
//         // do something : check name for attendance
//         console.log( "✅ " + eachFel.name )
//     }  
    
// )

// console.log( "return value for forEach: " , forEachReturnValue )








for ( const eachFellow of arrayOfFellows ){

    // do seomthing

}








////  Refactoring the Callback Function 🚧


const forEachReturnValue = arrayOfFellows.forEach(  eachFel => console.log( "✅ " + eachFel.name ) )




const checkFellowName =( eachFel )=>{ 
    
    console.log( "✅ " + eachFel.name ) 

}

// console.log( checkFellowName() )
arrayOfFellows.forEach( checkFellowName )

// arrayOfFellows.forEach( checkFellowName() )
// arrayOfFellows.forEach( () => checkFellowName() )
// arrayOfFellows.forEach( () => checkFellowName() )
