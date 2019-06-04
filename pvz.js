let fullName = document.getElementById("nameInput");
let phoneNumber = document.getElementById("phoneNumberInput");
// inputs values
let nameVal = fullName.value;
let phoneVal = phoneNumber.value;
// buttons
let saveInput = document.getElementById("saveInput");
let sortAZ = document.getElementById("sortAZ");
// object
let listObj =[];
let phonebook = [{ name: 'Petras', phone: '+370345678754' }];
//outputs
let outputs = document.getElementById("outputSection");



//funkcija kuri printina duomenis paimtus is inputs
function printObj() {
  let outputs = document.getElementById("outputSection");
  outputs.innerHTML="";
  listObj.forEach(function(val) {
    let pParagraph = document.createElement('li');
    let forName = document.createElement('span');
    let forPhone = document.createElement('span');


    // Creating and appending delete button
    let forDelete = document.createElement("span");
    let deleteBtn = document.createElement("button");
    // creating text to be displayed on button
    let textOnTheButton = document.createTextNode("Delete");
    // appending text to button
    deleteBtn.appendChild(textOnTheButton);
    forDelete.appendChild(deleteBtn);


    // Creating and appending edit button
    let forEdit = document.createElement("span");
    let editBtn = document.createElement("button");
    // creating text to be displayed on button
    let textOnTheEdit = document.createTextNode("Edit");
    // appending text to button
    editBtn.appendChild(textOnTheEdit);
    forDelete.appendChild(editBtn);


    // creating and appending favorite image
    let forFav = document.createElement("span");
    let forFavorite = document.createElement("img");
    forFavorite.id = "favoriteImg";
    forFavorite.src = "assets/images/ic_heartWhite_24px.svg"
    forFav.appendChild(forFavorite);
    pParagraph.appendChild(forFav);







    forName.textContent=val.fullName;
    forPhone.textContent=val.phone;
    pParagraph.appendChild(forName);
    pParagraph.appendChild(forPhone);
    pParagraph.appendChild(forDelete);



    outputs.appendChild(pParagraph);
  });
};


// funkcija, kuri isvalo input laukelius
function refreshInput(){
  document.getElementById('inputs').reset();
};



// event listener for saving
  saveInput.addEventListener("click", event => {
  printObj.push({fullName :fullName.value,});
  //let nameValue = phoneInput.value;
  printObj();
  refreshInput();





// saugau i local storage
  localStorage.setItem('localStoragePhoneBook', JSON.stringify(listObj));
});


// uzsikrovus puslapiui paima is localstorage duomenis

window.addEventListener('load', event=>{
  var bla = localStorage.getItem('localStoragePhoneBook');
  if (bla) {
    listObj = JSON.parse(bla);
    printObj();
  }
});
