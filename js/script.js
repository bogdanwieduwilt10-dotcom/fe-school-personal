console.log("Works");


console.log("Logged Users", logedUsers);

const latestUser = logedUsers.reduce((latest, user) => {
  return new Date(user.last_login) < new Date(latest.last_login) ? user : latest;
  
});

const oldestLoginUser = logedUsers.reduce((oldest, user) => {
  return new Date(user.last_login) < new Date(oldest.last_login) ? user : oldest;
});

console.log("Latest Login:", latestUser);
console.log("Oldest Login:", oldestLoginUser);




console.log("General Users" ,generalUsers);

let sum = 0;

generalUsers.forEach(user => {
  sum += user.age;
});

const avgAge = Math.round(sum / generalUsers.length);

const youngestUser = generalUsers.reduce((youngest, user) => {
  return user.age < youngest.age ? user : youngest;
});

const oldestUser = generalUsers.reduce((oldest, user) => {
  return user.age > oldest.age ? user : oldest;
});

console.log("Youngest:", youngestUser);
console.log("Oldest:", oldestUser);
console.log("Average Age:", avgAge);





const closestUsers = generalUsers
  .sort((a, b) => {
    return Math.abs(a.age - avgAge) - Math.abs(b.age - avgAge);
  })
  .slice(0, 16);

console.log("16 Closest Users To Average Age:", closestUsers);


const list = document.getElementById("user-list");

const userList = closestUsers
  .map(user => `<li>${user.firstName} -- Age: ${user.age} -- ${user.phone} -- ${user.email}</li>`)
  .join('');

  
list.innerHTML = userList;