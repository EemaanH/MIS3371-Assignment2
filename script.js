/*Dynamic date for the banner*/

const today = new Date();

const options = 
{
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
};

document.getElementById("todayDate").innerHTML =
  "Today is: " + today.toLocaleDateString("en-US", options);

function reviewData() 
{

let first = document.getElementById("firstname").value;
let mi = document.getElementById("middleinitial").value;
let last = document.getElementById("lastname").value;
let dob = document.getElementById("dob").value;

let email = document.getElementsByName("email")[0].value;
let phone = document.getElementsByName("phone")[0].value;

let address1 = document.getElementsByName("address1")[0].value;
let city = document.getElementsByName("city")[0].value;
let state = document.getElementsByName("state")[0].value;
let zip = document.getElementsByName("zip")[0].value;

document.getElementById("r_name").innerText = "Name: " +  first + " " + mi + "  " + last;

document.getElementById("r_dob").innerText = "DOB: " + dob;

document.getElementbyId("r_email").innerText = "Email: " + email;

document.getElementById("r_phone").innerText = "Phone: " + phone;

document.getElementById("r_address").innerText = "Address: " + address1 + ",  " + city + ",  " + state + " "  + zip;
}
