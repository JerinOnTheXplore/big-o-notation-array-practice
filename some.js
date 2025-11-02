//some
const numbers = [1,5,3,7,5];
const hasEvenNumber = numbers.some((number) => number % 2 === 0);
console.log(hasEvenNumber);//false return kore
// .some() ta role based feature implement korte kaje dey

const currentUserRoles = ["user" , "editor", "admin"];
const featureAccessRoles = ["admin","manager"];
const canAccess = currentUserRoles.some((role)=>featureAccessRoles.includes(role)
);
console.log(canAccess);//true