 const sendHttpRequest=(method,url) => {
        const promise= new Promise((reslove,reject) => {
        const xhr= new XMLHttpRequest();
          xhr.open(method,url);

          xhr.responseType='json';

          xhr.onload=()=> {
            reslove(xhr.response);
          };
          xhr.send();
        });

      return promise;
      };
      async function getData(){
      var	id = document.getElementById("idd").value;
      const arr2= await sendHttpRequest('GET','http://localhost:3000/api/CreateSendMoney?filter=%7B%22where%22%3A%7B%22MId%22%3A%22'+id+'%22%7D%7D').then(responseData => {
        return responseData;
      });
      const arr1= await sendHttpRequest('GET','http://localhost:3000/api/SendMoneyToMonFund?filter=%7B%22where%22%3A%7B%22MId%22%3A%22resource%3Aorg.block.track.net.SendMoney%23'+id+'%22%7D%7D').then(responseData => {
        return responseData;
      });
      console.log(arr1);
      console.log(arr2);
      var table = document.getElementById("myTable");
      for (var i = 1,j=0; i ,j< arr2.length; i++,j++) {

      var row = table.insertRow(i);
      var cell1 = row.insertCell(0);
      var cell2=row.insertCell(1);
      var cell3=row.insertCell(2);
      var cell4=row.insertCell(3);
      var cell5=row.insertCell(4);

      cell1.innerHTML = arr2[j].MId;
      cell2.innerHTML = arr2[j].Amount;
      cell3.innerHTML = arr2[j].timestamp;
      cell4.innerHTML = arr2[j].pledgeId;
      cell5.innerHTML = arr1[j].transactionId;
      }
      var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("idd");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
      };
function Apply()
{
getData();
}
