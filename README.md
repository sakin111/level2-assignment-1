
title : Keyof Keyword in Typescript

The Keyof operator takes an object type and returns a string or number literal union of its keys.the keyof operator can be used in multiple different object by connecting just a single object type. this helps reduce repetition in type declarations and results in cleaner, more maintainable, robust code 


here is a simple Example to show the use of keyof operator


type Person = {
    name:string,
    age:number
}

type person = keyof Person


The keyof operator extracts all key names from a type as a union of string (or number) literal types. When combined with generics, it can be used to create reusable, type-safe utility functions.
Here is an example that demonstrates how to use keyof in a function to create a broader, more flexible utility:


const getProperty = <T, Q extends keyof T>(obj: T, key: Q): T[Q]  =>{
    return obj[key];
  }

  const user = {
    id: 1,
    name: 'page',
    email: 'page@example.com',
  };
  
  const userName = getProperty(user, 'name'); 

  explanation :
  
   T is a generic type representing the shape of the object.

   Q extends keyof T ensures the key is one of the valid keys of T.

   The function returns the value of that key, with the correct type (T[K]), ensuring full type safety.

This keyof property can help when building dynamic UI components, or any utility to where accessing object properties safely is critical.






title : difference between union and intersection type


A union type allows a variable to be one of several types:
for example :

const Values = (m : string | number) =>{
    console.log(`this is ${m}`)
}
 Value(2) 
 Value("Mr")

 if i use type other than this type and it will not take the parameter value




 An intersection type combines multiple types into one: 

 for example :


 type Person = {
  name: string;
};

type Employee = {
  employeeId: number;
};

type Staff = Person & Employee;

const staffMember: Staff = {
  name: 'Alice',
  employeeId: 101,
};

It can merge multiple roles or responsibilities into one type.Can compose complex types from smaller, reusable ones. It is great for building complex objects that must satisfy all the combined types.




