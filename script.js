
function getName() {
    const myName = prompt("Enter your name:");

    return myName;
}

let myName = getName()?.trim();

if (!myName) {
    alert("Enter valid name!");
    myName = getName();
} 


function getAge() {
    const myAge = prompt("Enter your age (3 - 99):");

    return myAge;
}

let myAge = Number(getAge()?.trim());

if (!myAge || isNaN(myAge) || myAge < 3 || myAge > 99) {
    alert("Enter valid age between 3 and 99!");
    myAge = Number(getAge()?.trim());
}


function getSmoke() {
    const smoke = prompt("Do you smoke? (yes / no)");

    return smoke;
}

let smoke = getSmoke()?.trim();

if (!smoke || (smoke !== "yes" && smoke !== "no")) {
    alert("Enter 'yes' or 'no' only!");
    smoke = getSmoke()?.trim();
}


let message = "";

if (myAge < 18 && smoke == "no") {
    message = "Good job " + myName + "! Great example for your peers.";
}
else if (myAge < 18 && smoke == "yes") {
    message = myName + ", do your parents know about this?";
}
else if (myAge >= 18 && smoke == "no") {
    message = "Nice " + myName + "! You probably also do sports!";
}
else if (myAge >= 18 && smoke == "yes") {
    message = "Well " + myName + ", it's your choice. But smoking is not recommended.";
}

alert(message);