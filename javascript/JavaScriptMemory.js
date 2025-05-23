person={
    name:"govinda",
    age:30
}
let new_person=person

new_person.age=55
console.log(person.age)
console.log(new_person.age) //in this case the orignal value get the change

// console.log(person) this is non premitive data type that cause it can store in Heap memory and heap give the refrence of the variable


// Stack  memory allocation in javascript all the primitive data type can be allocated in the stack
// let name="govinda prajapti"
// let new_name=name
// console.log(new_name)
// new_name="this is the new name"
// console.log(new_name)