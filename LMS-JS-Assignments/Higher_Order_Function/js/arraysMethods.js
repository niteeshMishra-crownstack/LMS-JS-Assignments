const companies = [{
        name: "Company one",
        category: "Finance",
        start: 1981,
        end: 2003
    },
    {
        name: "Company two",
        category: "Retail",
        start: 1992,
        end: 2008
    },
    {
        name: "Company three",
        category: "Auto",
        start: 1999,
        end: 2008
    },
    {
        name: "Company four",
        category: "Retail",
        start: 1989,
        end: 2007
    },
    {
        name: "Company five",
        category: "Technology",
        start: 2009,
        end: 2010
    },
    {
        name: "Company six",
        category: "Finance",
        start: 1987,
        end: 2014
    },
    {
        name: "Company seven",
        category: "Auto",
        start: 1986,
        end: 1996
    },
    {
        name: "Company eight",
        category: "Technology",
        start: 2011,
        end: 2016
    },
    {
        name: "Company nine",
        category: "Retail",
        start: 1981,
        end: 1989
    },
]

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

for (let i = 0; i < companies.length; i++) {
    console.log(companies[i])
}

companies.forEach(function(company) {
    console.log(company.name)
})

//using for loop

let canDrink = []

for (let i = 0; i < ages.length; i++) {
    if (ages[i] >= 21) {
        canDrink.push(ages[i])
    }
}

console.log(canDrink)

//same thing using filter

var canVote = ages.filter(function(age) {
    if (age >= 21)
        return true
})
console.log(canVote)

//using arrow function

var canVote = ages.filter(age => age >= 21)
console.log(canVote)

//filter retail companies

let retailCompanies = companies.filter(function(company) {
    if (company.category === "Retail")
        return true
})
console.log(retailCompanies)
    //using arrow function
    //get companies under category "Retail"  
retailCompanies = companies.filter(retail => retail.category === "Retail")
console.log(retailCompanies)


//get  Eighties Company
let eightiesCompanies = companies.filter(company => (company.start >= 1980 && company.start < 2000))
console.log(eightiesCompanies)

//get  companies that lasted 10 years or more
let lastedTenYears = companies.filter(company => (company.end - company.start >= 10))
console.log(lastedTenYears)

//map
//create array of company names

let companyNames = companies.map(function(company) {
    // return company.name;
    // return 1;
    return `${company.name} [${company.start}- ${company.end}]`
})
console.log(companyNames)
    //Taking square root of ages using map functions
const agesSquare = ages.map(age => Math.sqrt(age))
console.log(agesSquare)

//implementing map() two times

const ageMap = ages.map(age => Math.sqrt(age))
    .map(age => age * 2)

console.log(ageMap)

//sort 

const sortCompanies = companies.sort(function(c1, c2) {
    if (c1.start > c2.start) {
        return 1;
    } else {
        return -1;
    }
})

//reduce 

let ageSum = 0;
for (let i = 0; i < ages.length; i++) {
    ageSum += ages[i]
}

console.log(ageMap)

//combine methods

const combined = ages.map(age => age * 2).filter(age => age >= 40).sort((a, b) => a - b).reduce((a, b) => a + b, 0);

console.log(combined)