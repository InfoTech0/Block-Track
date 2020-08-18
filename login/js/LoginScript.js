var IP=localStorage.getItem("IP");
	   function getpassword() {
              var Email=encodeURIComponent(document.getElementById("email").value).toLowerCase();
							var url1 = "http://"+IP+":3000/api/Doner?filter=%7B%22where%22%3A%7B%22email%22%3A%22"+Email+"%22%7D%7D"
                const xhr = new XMLHttpRequest(),
                   method = "GET",
                   url=url1;
                   ;
               xhr.open(method, url, true);
               xhr.onreadystatechange = function () {
                 // In local files, status is 0 upon success in Mozilla Firefox
                 if(xhr.readyState === XMLHttpRequest.DONE && this.status === 200) {
                   var data=JSON.parse(xhr.responseText);
                   if (data.length==0) {
                     alert("Enter Valid Email");
                   }
                   else{
                     var x =data[0].password;
                     var string1=document.getElementById("pass").value;
                     var result=string1.localeCompare(x);
                     if(result==false)
                     {
                         var mail= document.getElementById("email").value.toLowerCase();
                         localStorage.setItem('Email', mail);
                         alert("Hello "+data[0].Fname);
                         location.replace("../index.html","_self");
                     }
                     else {
                       alert("Password invalid");
                     }
                   }
                 }
                 };
               xhr.send();
             }
