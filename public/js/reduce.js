const companies = [
    { name: 'Company One', category: 'Finance', start: 1981, end: 2003 },
    { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
    { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
    { name: 'Company Four', category: 'Food', start: 1989, end: 2010 },
    { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
    { name: 'Company Six', category: 'Carpenters', start: 1987, end: 2010 },
    { name: 'Company Seven', category: 'Workers', start: 1986, end: 1996 },
    { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
    { name: 'Company Nine', category: 'Retail', start: 1980, end: 1989 },
]

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

let ageSum = 0;

// STANDARD FOR LOOP
for(let i = 0; i < ages.length; i++) {
    ageSum += ages[i];
}
console.log(`Standard for loop sum of all ages in the array: ${ageSum}`);

// REDUCE METHOD ES6
// SHORTHAND
// const ageSumInArray = ages.reduce((total, age) => total + age, 0);

// STANDARD 
const ageSumInArray = ages.reduce((total, age) => {
    return total + age;
}, 0);
console.log(`Total sum of ages in the array: ${ageSumInArray}`);

// GET TOTAL YEARS FOR ALL COMPANIES
// SHORTHAND
// const totalYears = companies.reduce((total, year) => total + (year.end - year.start), 0);

// STANDARD
const totalYears = companies.reduce((total, year) => {
    return total + (year.end - year.start);
}, 0);
console.log(`Total years of all companies ${totalYears}`);