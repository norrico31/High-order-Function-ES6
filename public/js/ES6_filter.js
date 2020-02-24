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

// ES6 Filter
// SHORTHAND
// const canDrink = ages.filter(age => age >= 21);  

// STANDARD
const canDrink = ages.filter(age => {
    if(age >= 21) {
        return true;
    }
});
console.log(`Person can drink ages above 21: ${canDrink}`);

// FILTER RETAIL IN COMPANY
// SHORTHAND
// const retailCompanies = companies.filter(company => company.category === 'Retail');

// STANDARD
const retailCompanies = companies.filter(company => {
    if(company.category === 'Retail') {
        return true;
    }
})
console.log(retailCompanies)

// GET 80s companies Filter 
// SHORTHAND
//const eightiesCompanies = companies.filter(year => year.start >= 1980 && year.end < 2000);

// STANDARD
const eightiesCompanies = companies.filter(year => {
    if(year.start >= 1980 && year.end < 2000) {
        return true;
    }
});
console.log(eightiesCompanies);

// COMPANIES THAT LASTED ON 10YEARS 
// SHORTHAND
//const lastedTenYears = companies.filter(year => year.end - year.start >= 10);

// STANDARD
const lastedTenYears = companies.filter(year => {
    if(year.end - year.start >= 10) {
        return true;
    }
})
console.log(lastedTenYears);