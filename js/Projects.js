const xhr = new XMLHttpRequest(),
           method = "GET",
           url = "http://localhost:3000/api/ProjectPledge";

       xhr.open(method, url, true);
       xhr.onreadystatechange = function () {
         // In local files, status is 0 upon success in Mozilla Firefox
         if(xhr.readyState === XMLHttpRequest.DONE) {
           var data=JSON.parse(xhr.responseText);
              //project0
             document.getElementById('edu1').innerHTML=data[0].name;
             document.getElementById("edu5").innerHTML="ID: "+data[0].pledgeId;
             document.getElementById('edu2').innerHTML=data[0].decription;
             document.getElementById('edu3').innerHTML="Goal:$"+data[0].fundsRequired;
             //Project1
             document.getElementById("feed1").innerHTML=data[1].name;
             document.getElementById("feed5").innerHTML="ID: "+data[1].pledgeId;
             document.getElementById("feed2").innerHTML=data[1].decription;
             document.getElementById("feed4").innerHTML="Goal:$"+data[1].fundsRequired;
             //project2
             document.getElementById('clo1').innerHTML=data[2].name;
             document.getElementById("clo5").innerHTML="ID: "+data[2].pledgeId;
             document.getElementById('clo2').innerHTML=data[2].decription;
             document.getElementById('clo4').innerHTML="Goal:$"+data[2].fundsRequired;
             //project3
             document.getElementById("poor1").innerHTML=data[3].name;
             document.getElementById("poor5").innerHTML="ID: "+data[3].pledgeId;
             document.getElementById("poor2").innerHTML=data[3].decription;
             document.getElementById("poor4").innerHTML="Goal:$"+data[3].fundsRequired;
             //project4
             document.getElementById('child1').innerHTML=data[4].name;
             document.getElementById("child5").innerHTML="ID: "+data[4].pledgeId;
             document.getElementById('child2').innerHTML=data[4].decription;
             document.getElementById('child4').innerHTML="Goal:$"+data[4].fundsRequired;
             //project5
             document.getElementById("health1").innerHTML=data[5].name;
             document.getElementById("health5").innerHTML="ID: "+data[5].pledgeId;
             document.getElementById("health2").innerHTML=data[5].decription;
             document.getElementById("health4").innerHTML="Goal:$"+data[5].fundsRequired;
           }
         };
       xhr.send();
