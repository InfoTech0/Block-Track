function makeid(length) {
      var result           = '';
      var characters       = '0123456789';
      var charactersLength = characters.length;
      for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return result;
      }
      var Mid=(makeid(2));
      console.log(Mid);

      function createasset() {
        var Pid = document.getElementById("project").value;
        var mo = document.getElementById("money").value;
        var email=localStorage.getItem('Email');
        var xhr = new XMLHttpRequest();

        xhr.open("POST", 'http://localhost:3000/api/CreateSendMoney', true);

        //Send the proper header information along with the request
        xhr.setRequestHeader("Content-Type", "application/JSON");

        xhr.onreadystatechange = function() { // Call a function when the state changes.
            if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
              console.log("First Success");

            }
        }
        var x=
        {
          "$class": "org.block.track.net.CreateSendMoney",
          "MId": Mid,
          "Amount": mo,
          "pledgeId": Pid,
          "Doner": email
        };
        var myJSON = JSON.stringify(x);
        xhr.send(myJSON);
      }

           function sendmoney() {
             var mo = document.getElementById("money").value;
             var x="resource:org.block.track.net.SendMoney#";
             var y=Mid;
             var MoneyId=x+Mid;
             var xhr = new XMLHttpRequest();

             xhr.open("POST", 'http://localhost:3000/api/SendMoneyToMonFund', true);

             //Send the proper header information along with the request
             xhr.setRequestHeader("Content-Type", "application/JSON");

             xhr.onreadystatechange = function() { // Call a function when the state changes.
                 if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
                     alert("Send Money Success");
                 }
             }
             var x=
             {
               "$class": "org.block.track.net.SendMoneyToMonFund",
               "MId": MoneyId,
               "Amount": mo,
               "MonFundId": "MF1"
             };
             var myJSON = JSON.stringify(x);
             xhr.send(myJSON);
           }

           function myFunction(){
             createasset();
           }
           function SendMoney(){
            setTimeout(function myFunction1(){
              sendmoney();
           },5000);
         }
