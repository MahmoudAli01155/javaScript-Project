//my first program

console.log('hello, world');

//first object
let pearson = {
    firstName : "Mhmoud",
    lastName : "Ali",
    familyName :"Ahmed",
    age : 24,
    
};
console.log(pearson);

//the way to Acces the attribute
//[1]
pearson.firstName ="Mohamed";
console.log(pearson.firstName);

//[2]
pearson['lastName'] ="Hosny";
console.log(pearson['lastName']);

//[3]
let pearsonAge ='age';
pearson[pearsonAge] =26;
console.log(pearson['age']);

//first array 
let selectColor =["red", "blue"];

console.log(selectColor);
console.log(selectColor[1]);
selectColor[2]= 923;
console.log(selectColor);
console.log(selectColor.length);


//-----------[Founction]--------
//[1]------preforming a task function-------
function greet(FirstName1,LastNane1) {
    console.log("Hello, " + FirstName1 + LastNane1);
}
// calling the function
greet("Mahmoud","Ali")

//[2]------Calculating a value function-----
function square(number1) {
    return number1*number1;
}
// calling the function
square(2);
// useing the returen function value to decler and inatilaize variable called resalt
let resalt =square(23);
// dipling the value of the function value with two wayes
console.log(square(23));
console.log(resalt);

//loops
//[1]----------[for loop]-----------
for (let i = 0; i <= 10; i++) {
    console.log(i ,end="---");   
}
//-------------------------------------------------
for (let i = 0; i < selectColor.length; i++) {
    console.log(selectColor [i]);   
}
//---------------------------------------------------
selectColor.forEach(element => {
    console.log(element);
});
//------------------------------------------------
for (const item of selectColor) {
    console.log(item);
}
//--------------------------------------------------
for (const iterator of selectColor) {
    console.log(iterator);
}
//----------------------------------------------------
for (const key in selectColor) {
    if (Object.hasOwnProperty.call(selectColor, key)) {
        console.log(selectColor[key]);
    }
}
//-------------------------------------------------------
for (const key in pearson) {
    if (pearson.hasOwnProperty.call(pearson, key)) {
        console.log(pearson[key]); 
    }
}

//[1]----------[While loop]-----------
let index1 = 0;
while (index1 <= pearson.length) {
    console.log(pearson[index1]);
    index1 ++;
}

//[1]----------[do While loop]-----------
index1 = 0;
do {
    console.log(index1);
    index1 ++;
} while (index1 <= selectColor.length-1);


//------------[condation statments]----------

//----------[1]-[Ternary if statements]------
let number1111 =55
let evenodd =(number1111 % 2 == 0) ? 'even':'odd';
console.log(evenodd);

//----------[2]-[if statements]----------------
let gender= "m";
if (gender== "m" || gender== "male") {
    console.log("Male");
} 
else if(gender== "f" || gender== "female") {
    console.log("Female");
}
else{
    console.log("Unknown");
}

//----------[3]-[switch statements]----------------
gender="f";
switch (gender) {
    case "m":
        console.log("Male");
        break;
    case "f":
        console.log("Female");
        break;

    default:
        console.log("Unknown");
        break;
}