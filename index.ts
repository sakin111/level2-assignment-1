// Problem 1

const formatString = (input: string, toUpper?: boolean) : string =>{
    if(toUpper === false){
        return input.toLowerCase()
    } 
    return input.toUpperCase()
}

formatString("Hello");          
formatString("Hello", true);  
formatString("Hello", false);

// Problem 2

const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 4.0 },
    { title: "Book D", rating: 3.9 },
    { title: "Book E", rating: 4.3 }
  ];

const filterByRating = (items:{title:string, rating:number}[]) : {title:string, rating:number}[] =>{
    return items.filter((item) => item.rating >= 4.0)
}

filterByRating(books); 


// Problem 3



const concatenateArrays = <T>(...arrays: T[][]): T[] =>{
    return arrays.reduce((acc, curr) => acc.concat(curr), [])
}

concatenateArrays<string>(["hello", "world"], ["haw", "maw", "kaw"])
concatenateArrays<number>([3,5,5], [4,4])


// Problem 4



