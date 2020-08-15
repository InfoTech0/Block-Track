var IP=localStorage.getItem("IP");
function SignUp() {
          var fn = document.getElementById("first_name").value;
          var ln = document.getElementById("last_name").value;
          var Em = document.getElementById("email").value.toLowerCase();
          var pn = document.getElementById("phone_number").value;
          var cno = document.getElementById("Creditcardno").value;
          var Pass = document.getElementById("password").value;
          var selected=document.getElementsByClassName("selected");
          var option= selected[0].textContent;
          var fundtype=option.replace(' donation','').toUpperCase();
          var xhr = new XMLHttpRequest();

          xhr.open("POST", 'http://'+IP+':3000/api/Doner', true);

          //Send the proper header information along with the request
          xhr.setRequestHeader("Content-Type", "application/JSON");

          xhr.onreadystatechange = function() { // Call a function when the state changes.
              if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
                alert("Registration Success");
                location.replace("./login.html");
              }
            }
               var x={
                      "$class": "org.block.track.net.Doner",
                      "Fname": fn,
                      "Lname": ln,
                      "email": Em,
                      "PhoneNo":pn,
                      "password": Pass,
                      "fundingType": fundtype,
                      "paymentInformation": "CreditCard",
                      "creditCardNo": cno,
                      "sendMoney": [
                        "M1"
                      ]
                    };
          var myJSON = JSON.stringify(x);
          xhr.send(myJSON);
        }
