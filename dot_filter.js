const arrayOfFellows = [

    { name: "Jackie" },
    { name: "Ant-Man" },
    { name: "Gaspre" },
    { name: "Jesse" },
    { name: "Shaka" },
    { name: "THE Brian Young" },
    { name: "Daryna" },
    { name: "Nicki" },
    { name: "Jamal" },
    { name: "Yeno" },
    { name: "Jeremy" }

]

console.log( "Original Array: " , arrayOfFellows )

// [].filter(  ()=>{}  )

const filterResultArray = arrayOfFellows.filter(  eachPerson => eachPerson.name.length > 5 )
// const filterResultArray = arrayOfFellows.filter(  eachPerson => { return eachPerson.name.length > 5 } )

// const filterResultArray = arrayOfFellows.filter(  (eachPerson)=>{

//     // do something
//     if( eachPerson.name.length > 5 ){
//         return eachPerson
//     }

// })

// console.log( "The Filtered Array: " , filterResultArray )









// arrayOfFellows.filter(  (eachPerson)=>{

//     // do something

// }  )




// const filteredArrayOfFellow = []

// for ( const eachFellow of arrayOfFellows ){

//     if(eachFellow.name.length > 10){

//         filteredArrayOfFellow.push( eachFellow )

//     }

// }

// console.log( filteredArrayOfFellow )








const searchBarFilterDemo = arrayOfFellows.filter( eachFellow => eachFellow.name.toLowerCase().includes("ja".toLowerCase()) )

console.log( searchBarFilterDemo )