        var IP=localStorage.getItem("IP");
        var data; var  data1;
        function getData(){
        var	email = document.getElementById("Email").value.toLowerCase();
        var em=localStorage.getItem('Email');
        if (email==em) {
        var filter=encodeURIComponent("resource:org.block.track.net.Doner#"+email);
        const xhr = new XMLHttpRequest(),
           method = "GET",
           url = 'http://'+IP+':3000/api/CreateSendMoney?filter=%7B%22where%22%3A%7B%22Doner%22%3A%22'+filter+'%22%7D%7D';

        xhr.open(method, url, true);
        xhr.onreadystatechange = function () {
         // In local files, status is 0 upon success in Mozilla Firefox
         if(xhr.readyState === XMLHttpRequest.DONE) {
           this.data=JSON.parse(xhr.responseText);

           getData2(this.data);
              }
          };
          xhr.send();
        }
      else {
        alert("Enter Your Email!");
      }
    }
function getData2(data){
  var transaction=[];
  for (var i = 0; i < data.length; i++) {


    var id=data[i].MId;
    const xhr = new XMLHttpRequest(),
       method = "GET",
       url = 'http://'+IP+':3000/api/SendMoneyToMonFund?filter=%7B%22where%22%3A%7B%22MId%22%3A%22resource%3Aorg.block.track.net.SendMoney%23'+id+'%22%7D%7D';

    xhr.open(method, url, true);
    xhr.onreadystatechange = function () {
     // In local files, status is 0 upon success in Mozilla Firefox
     if(xhr.readyState === XMLHttpRequest.DONE) {
       this.data1=JSON.parse(xhr.responseText);
       transaction.push(this.data1[0].transactionId);
       if (data.length === transaction.length){
         setdata(data,transaction);

       }
          }
      };
      xhr.send();
    }
  }
  function setdata(setedData,transaction){
    var table = document.getElementById("myTable");
                  for (var i = 1,j=0; i ,j< setedData.length; i++,j++) {

                  var row = table.insertRow(i);
                  var cell1 = row.insertCell(0);
                  var cell2=row.insertCell(1);
                  var cell3=row.insertCell(2);
                  var cell4=row.insertCell(3);
                  var cell5=row.insertCell(4);

                  cell1.innerHTML = setedData[j].MId;
                  cell2.innerHTML = setedData[j].Amount;
                  cell3.innerHTML = setedData[j].timestamp;
                  cell4.innerHTML = setedData[j].pledgeId.replace('resource:org.block.track.net.ProjectPledge#','');
                  cell5.innerHTML = transaction[j];
                }
  }
