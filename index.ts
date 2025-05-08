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

// this array is used as a sample data for testing the function
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


class Vehicle {
    private make: string;
    private year: number;

    constructor(make: string, year: number) {
        this.make = make;
        this.year = year;
    }

    getInfo(): string {
        return `Make: ${this.make}, Year: ${this.year}`;
    }


}

class Car extends Vehicle {
    private model: string;

    constructor(make: string, year: number, model: string) {
        super(make, year);
        this.model = model;
    }

    getModel(): string {
        return `Model: ${this.model}`;
    }
}
const myCar = new Car("Toyota", 2020, "Corolla");
console.log(myCar.getInfo()); // Make: Toyota, Year: 2020
console.log(myCar.getModel()); // Model: Corolla


// Problem 5

 const processValue = (value: string | number): number =>{
    if(typeof value === "number"){
        return value* 2 
    } else{
        return value.length
    }
 }

processValue("hello") 
processValue(5) 


// Problem 6

interface Product{
  name: string;
  price:number
}

// this array is used as a sample data for testing the function
const products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 }
  ];  

const  getMostExpensiveProduct =(products: Product[]): Product | null =>{
    if(products.length === 0){
        return null
    }
    return products.reduce( (max , product) => product.price > max.price ? product : max)
}
getMostExpensiveProduct(products)



// Problem 7

enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
  }

const  getDayType = (day: Day): string =>{
    if(day === Day.Saturday || day === Day.Sunday){
        return "Weekend"
    }
    return "Weekday"

}
console.log(getDayType(Day.Monday));  // "Weekday"
console.log(getDayType(Day.Sunday));  // "Weekend"


// Problem 8


const squareAsync = async (n: number): Promise<number> => {
    return new Promise((resolve, reject) => {
        if (n < 0) {
            reject(new Error("Negative number not allowed"));
        } else {
            setTimeout(() => {
                resolve(n * n);
            }, 1000);
        }
    });
};
squareAsync(4).then(console.log);   
squareAsync(-3).catch(console.error); 