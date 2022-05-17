function sumOfNumber (numA = 0 , numB = 0){
    return numA + numB
}

let expected ;

// Testing Framework
function test ( message , callback){
    try {
        callback ();
        console.log (  `true ` , message )
    } catch (error) {
        console.error(error);
        console.log (  `false `, message )
    } 
} 

// Assertion Liberary
function expect(actual) {
    return{
        toEqual: function (expected){
            if (actual !== expected){
                throw new Error ( `${actual} in not equal to ${expected}` )
            }
        }
    }
}

test ("add 10 + 20 to be equal 30" , () =>{
    expect (sumOfNumber(10 , 20)).toEqual(20)
}) 

test ("add 20 + 20 to be equal 40" , () =>{
    expect (sumOfNumber(20 , 20)).toEqual(40)
}) 

test ("add 30 + 20 to be equal 50" , () =>{
    expect (sumOfNumber(30 , 20)).toEqual(50)
}) 

test ("add 10 + 50 to be equal 60" , () =>{
    expect (sumOfNumber(10 , 50)).toEqual(60)
}) 

test ("add 40 + 30 to be equal 70" , () =>{
    expect (sumOfNumber(40 , 30)).toEqual(70)
}) 


function multiplication (numA = 1 , numB = 2){
    return numA * numB
} 

test ("multiplication 10 + 20 to be equal 200" , () =>{
    expect (multiplication(10 , 20)).toEqual("P")
}) 

test ("multiplication 20 + 20 to be equal 400" , () =>{
    expect (multiplication(20 , 20)).toEqual(400)
}) 

test ("multiplication 30 + 20 to be equal 600" , () =>{
    expect (multiplication(30 , 20)).toEqual(600)
}) 

test ("multiplication 10 + 50 to be equal 500" , () =>{
    expect (multiplication(10 , 50)).toEqual(500)
}) 

test ("multiplication 40 + 30 to be equal 1200" , () =>{
    expect (multiplication(40 , 30)).toEqual(1200)
})
