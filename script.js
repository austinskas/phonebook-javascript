let guest = [];

/*Add name to end*/

function addName() {
    let newArray = document.getElementById("insert").value;
    guest.push(newArray);
    document.getElementById("insert").value = "";
    document.getElementById("demo").innerHTML = guest;

}
document.getElementById("addName").addEventListener("click", addName);

/*Add name to firstt*/

function addStart() {
    let newArray = document.getElementById("insert").value;
    guest.unshift(newArray);
    document.getElementById("insert").value = "";
    document.getElementById("demo").innerHTML = guest;

}

document.getElementById("addStart").addEventListener("click", addStart);

/*Remove first*/

function removeFirst() {
    let newArray = document.getElementById("insert").value; //input
    guest.shift(newArray);
    document.getElementById("insert").value = "";
    document.getElementById("demo").innerHTML = guest;

}

document.getElementById("removeFirst").addEventListener("click", removeFirst);


/*Remove last*/

function removeLast() {
    let newArray = document.getElementById("insert").value; //input
    guest.pop(newArray);
    document.getElementById("insert").value = "";
    document.getElementById("demo").innerHTML = guest;

}

document.getElementById("removeLast").addEventListener("click", removeLast);






/*Reverse*/

function reverseList() {
    let newArray = document.getElementById("insert").value; //input
    guest.reverse(newArray);
    document.getElementById("insert").value = "";
    document.getElementById("demo").innerHTML = guest;

}

document.getElementById("reverse").addEventListener("click", reverseList); //funkcijos pavadinimas
