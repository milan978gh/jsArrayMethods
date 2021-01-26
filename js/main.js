const companies = [
  { name: 'Company One', category: 'Finance', start: 1981, end: 2003 },
  { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
  { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
  { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
  { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
  { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
  { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
  { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
  { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 }
];
const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// forEach
/*
for (let i = 0; i < companies.length; i++) {
  console.log(companies[i]);
}
-ili ovako->
companies.forEach((value, index, array) => {
  console.log(value);
});
*/

// filter
// get 21 and older
/*
let canDrink = [];
for (let i = 0; i < ages.length; i++) {
  if (ages[i] >= 21) {
    canDrink.push(ages[i]);
  }
};
-ili ovako->
const canDrink = ages.filter(function(value,index,array) {
  if (value >= 21) {
    return true;
  }
});
-ili ES6->
const canDrink = ages.filter(age => age >= 21);

// filter retail companies
const retailCompanies = companies.filter(function(company) {
  if (company.category === 'Retail') {
    return true;
  }
});
-ES6->
const retailCompanies = companies.filter(company => company.category === 'Retail');

// filter companies from 80-es
const companiesFrom80es = companies.filter(function(company) {
  if (company.start < 1990) {
    return true;
  }
});
-ES6->
const companiesFrom80es = companies.filter(company => company.start < 1990);

// lasted 10+ yrs
const lastedTenYrs = companies.filter(company => (company.end - company.start) >= 10);
*/

// map
// create array of company names
/*
const companyNames = companies.map(function(value, index, array) {
  return value.name;
});
-ES6->
const companyNames = companies.map(company => company.name);

// name and start-end yr
const companyAndStartYr = companies.map(company => `${company.name} [${company.start}-${company.end}]`);

// get square root
const agesSquare = ages.map(age => Math.sqrt(age));
*/

// sort
// reduce
