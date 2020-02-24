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

// SORTED BY START DATE ASCENDING ORDER
// SHORTHAND
//const ascendingSortedCompanies = companies.sort((a, b) => a.start > b.start ? 1 : -1);

// STANDARD
const ascendingSortedCompanies = companies.sort((a, b) => {
    if(a.start > b.start) {
        return 1;
    } else {
        return -1;
    }
});
console.log(ascendingSortedCompanies);

// SORTED BY START DATE DESCENDING ORDER COMPANIES
// SHORTHAND
// const descendingSortOfCompanies = companies.sort((a, b) => a.start > b.start ? -1 : 1);

// Standard
const descendingSortOfCompanies = companies.sort((a, b) => {
    if(a.start > b.start) {
        return -1;
    } else {
        return 1;
    }
});
console.log(descendingSortOfCompanies);

// SORT AGES ASCENDING ORDER
// SHORTHAND
// const ascendingSortOfAge = ages.sort((a,b) => a - b);

// STANDARD
const ascendingSortOfAge = ages.sort((a,b) => {
    return a - b;
}) 
console.log('Ascending order of ages array: ' + ascendingSortOfAge);

// SORT AGES DESCENDING ORDER
// SHORTHAND
const descendingSortOfAge = ages.sort((a, b) => b - a);
console.log('Descending order of ages array: '+ descendingSortOfAge);


