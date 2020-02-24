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

// MAP create array of company names
const companyNames = companies.map((data, index) => {
    return data.name;
})
console.log(companyNames);

// FORMATTED COMPANY NAME AND COMPANY YEAR
// SHORTHAND
//const testMap = companies.map(data => `${data.name} [${data.start} - ${data.end}]`);

// STANDARD
const testMap = companies.map(data => {
    return `${data.name} [${data.start} - ${data.end}]`;
})
console.log(testMap);

// SQUARE ROOT OF AGES
// SHORTHAND
// const squareOfAges = ages.map(age => Math.sqrt(age));

// STANDARD
const squareOfAges = ages.map(age => {
    return Math.sqrt(age);
})
console.log(`Square root of all ages in the array: ${squareOfAges}`);

// AGES TIMES 2 
// SHORTHAND
//const agesTimesTwo = ages.map(age => age * 2);

// STANDARD
const agesTimesTwo = ages.map(age => {
    return age * 2;
})
console.log(`All ages in the array multiplied by 2: ${agesTimesTwo}`);

// SQUARE ROOT AND TIMES 2 
// SHORTHAND
const ageMapSqrtTimesTwo = ages.map(age => Math.sqrt(age)).map(age => age *2);
console.log(`Square root of all ages in the array and multiplied by 2: ${ageMapSqrtTimesTwo}`);