window.onload = function() {
    //button
    let quickAddBtn = document.getElementById('QuickAdd');
    let addBtn = document.getElementById("Add")
    let cancelBtn = document.getElementById('Cancel');
    let quickAddFormDiv = document.querySelector('.quickaddForm');
    //doucment.getElementsByClassName( ('quickaddForm')[0]

    //form fields
    let fullname = document.getElementById("fullname");
    let phone = document.getElementById("phone");
    let address = document.getElementById("address");
    let city = document.getElementById("city");
    let email = document.getElementById("email");
// adress book display

let addBookDiv = document.querySelector('.addbook');

//create storage arry
let addressBook = [];

//addEventListener

quickAddBtn.addEventListener('click', function(){
    quickAddFormDiv.style.display = 'block';
});

cancelBtn.addEventListener('click', function () {
    quickAddFormDiv.style.display = 'none';

});
addBtn.addEventListener('click', addToBook);

addBookDiv.addEventListener('click', removeEntry);

function jsonStructure(fullname,phone,address,city,email){
this.fullname = fullname;
this.phone = phone;
this.address = address;
this.city = city;
this.email = email;

}

function addToBook() {
    let isNull = fullname.value!='' && phone.value!='' && address.value!='' && city.value!='' && email.value!='';
    if(isNull){
        //Add the contenxt of the form to he array and localstorage
        let obj = new jsonStructure(fullname.value,phone.value, address.value,city.value, email.value);
        addressBook.push(obj);
        localStorage['addbook'] = JSON.stringify(addressBook);
        //hide form panel
        quickAddFormDiv.style.display = 'none';
        //clear thi form
        clearForm();
        //updating and displaying all records is the adress book
        showAddressBook();
        }

    }

    function removeEntry(e){
        if(e.target.classList.contains("delbutton")){
        let remID = e.target.getAttribute("data-id");
        //Remove the JSON entry from the index num = remID;
        addressBook.splice(remID, 1);
        localStorage['addbook'] = JSON.stringify(addressBook);
        showAddressBook();
    }
    }




    function clearForm(){
        let frm = document.querySelectorAll('formFields');
        for (var i in frm){
            frm [i].value = '';

        }
    }
    function showAddressBook(){
        // check if the key addbook exists in lovalstorge or else create it
        //if it exists load contesnt form the localStorage and loop . display it on the page.
        if(localStorage['addbook'] === undefined){
            localStorage['addbook'] = "[]";

        } else {
            addressBook = JSON.parse(localStorage['addbook']);
            addBookDiv.innerHTML = '';
            for (let n in addressBook){
                let str = '<div class="entry">';
                    str += '<div class="name"><p>'    + addressBook[n].fullname + '</p></div>';
				    str += '<div class="email"><p>'   + addressBook[n].email + '</p></div>';
				    str += '<div class="phone"><p>'   + addressBook[n].phone + '</p></div>';
				    str += '<div class="address"><p>' + addressBook[n].address + '</p></div>';
			        str += '<div class="city"><p>'    + addressBook[n].city + '</p></div>';
				    str += '<div class="del"><a href="#" class="delbutton" data-id="' + n + '"> Delete </a></div>';

                    str += '</div>';
			        addBookDiv.innerHTML += str;

            }
        }
    }
    showAddressBook();
}
