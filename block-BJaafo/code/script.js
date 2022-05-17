function fullName (firstName = "" , lastName = "") {
    return firstName + ' ' + lastName
}

let result = fullName ("Prabhat" , "Kumar")

let expexcted = "Prabhat Kuma"

if (result !== expexcted){
    throw new Error ( `${result} in not equal to ${expexcted}` )
}

result = fullName ("Ankit" , "Raj")

expexcted = "Ankit Raj"

if (result !== expexcted){
    throw new Error ( `${result} in not equal to ${expexcted}` )
}

// After making the first test fail we do not see the output of the second test


function totalAmount (amount = 0 , taxRate = 0){
    return amount + (amount * taxRate)
}

let result1 = totalAmount (100 , 10)

let expexcted1 = 110

if (result1 !== expexcted1){
    throw new Error ( `${result1} in not equal to ${expexcted1}` )
}

result1 = totalAmount (100 , 1)

expexcted1 = 200

if (result1 !== expexcted1){
    throw new Error ( `${result1} in not equal to ${expexcted1}` )
}

// After making the first test fail we do not see the output of the second test
