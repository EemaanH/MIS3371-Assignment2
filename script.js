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
});

function reviewData() 
{
  alert("running");
  
let first = document.getElementById("firstname").value;
let mi = document.getElementById("middleinitial").value;
let last = document.getElementById("lastname").value;
let dob = document.getElementById("dob").value;

let email = document.getElementById('[name="email"]').value;
let phone = document.getElementById('[name="phone"]').value;

let address1 = document.getElementById('[name="address1"]').value;
let city = document.getElementById('[name="city"]').value;
let state = document.getElementById('[name="state"]').value;
let zip = document.getElementById('[name="zip"]').value;
 <tr>
          <td colspan="6" align="center">
            <input type="reset" value="CLEAR AND START OVER">

            <br><br>
            <!--Newly added Review button -->
            <button type="button" id="reviewBtn" onclick="reviewData(); return false;">Review</button>

            <br><br>
            
            <input type="submit" value="Submit">
          </td>
        </tr>

document.getElementById("r_name").innerText = "Name: " +  first + " " + mi + "  " + last;

document.getElementById("r_dob").innerText = "DOB: " + dob;

document.getElementById("r_email").innerText = "Email: " + email;

document.getElementById("r_phone").innerText = "Phone: " + phone;

document.getElementById("r_address").innerText = "Address: " + address1 + ",  " + city + ",  " + state + " "  + zip;
}
