
document.addEventListener('DOMContentLoaded', assignClickHandler)
// function Timer(){
//     myVar = setInterval(displayOutput,1000)
//   }

//   function displayOutput(){
//     // $("#enteredRecords").empty();
//       $.ajax({
//         method: 'GET',
//         url: '/entry/',
//         datatype: 'json',
//         success: function(data){
//           $(data.records).each(function(index,fieldName){
//               const date = new Date()
//               const time = date.getHours() + ':' + date.getMinutes()
//               $('#display').append(fieldName.track+"<br>"+fieldName.date+"<br>"+fieldName.timeStart+"<br>");
//           });
//           console.log(fieldName.track);
//         }

//       });

//   }

function assignClickHandler () {
    
  $(document).ready(function(){
    //calling of functions for adding, deleting and loading data
  /*$(document).on("click","#deleteRec", delRec);*/
    $(document).on("click","#submit", addingRec);
    /*$(document).on("click","#loadData", loadingData);*/
   
  });

/*
  //functions for loading the data
  function loadingData(){
    //empty first the display then proceed to displaying data
    $("#enteredRecords").empty();
      $.ajax({
        method: 'GET',
        url: '/users',
        datatype: 'json',
        success: function(data){
          $(data.records).each(function(index,fieldName){
              const date = new Date()
              const time = date.getHours() + ':' + date.getMinutes()
              $('#enteredRecords').append(time +' - '+ fieldName.fullName+', '+' '+fieldName.major+', '+fieldName.startYear+
                '<button value="'+fieldName.id+'" id="deleteRec">Delete</button><br>');
          });
        }

      });
  }*/

  //functions for adding records
  function addingRec(){
      tbhl1 = $("#Tbhl-minutes1").val()+":" + $("#Tbhl-seconds1").val()+":"+ $("#Tbhl-milliseconds1").val();
      tbhl2 = $("#Tbhl-minutes2").val()+":" + $("#Tbhl-seconds2").val()+":"+ $("#Tbhl-milliseconds2").val();   
      tbhl3 = $("#Tbhl-minutes3").val()+":" + $("#Tbhl-seconds3").val()+":"+ $("#Tbhl-milliseconds3").val();
      tbhl4 = $("#Tbhl-minutes4").val()+":" + $("#Tbhl-seconds4").val()+":"+ $("#Tbhl-milliseconds4").val();
      tbhl5 = $("#Tbhl-minutes5").val()+":" + $("#Tbhl-seconds5").val()+":"+ $("#Tbhl-milliseconds5").val();
      tbhl6 = $("#Tbhl-minutes6").val()+":" + $("#Tbhl-seconds6").val()+":"+ $("#Tbhl-milliseconds6").val();
      tbhl7 = $("#Tbhl-minutes7").val()+":" + $("#Tbhl-seconds7").val()+":"+ $("#Tbhl-milliseconds7").val();
      tbhl8 = $("#Tbhl-minutes8").val()+":" + $("#Tbhl-seconds8").val()+":"+ $("#Tbhl-milliseconds8").val();
      tbhl9 = $("#Tbhl-minutes9").val()+":" + $("#Tbhl-seconds9").val()+":"+ $("#Tbhl-milliseconds9").val();
      tbhl10 = $("#Tbhl-minutes10").val()+":" + $("#Tbhl-seconds10").val()+":"+ $("#Tbhl-milliseconds10").val();


      tbhp1 = $("#Tbhp-minutes1").val()+":" + $("#Tbhp-seconds1").val()+":"+ $("#Tbhp-milliseconds1").val();
      tbhp2 = $("#Tbhp-minutes2").val()+":" + $("#Tbhp-seconds2").val()+":"+ $("#Tbhp-milliseconds2").val();   
      tbhp3 = $("#Tbhp-minutes3").val()+":" + $("#Tbhp-seconds3").val()+":"+ $("#Tbhp-milliseconds3").val();
      tbhp4 = $("#Tbhp-minutes4").val()+":" + $("#Tbhp-seconds4").val()+":"+ $("#Tbhp-milliseconds4").val();
      tbhp5 = $("#Tbhp-minutes5").val()+":" + $("#Tbhp-seconds5").val()+":"+ $("#Tbhp-milliseconds5").val();
      tbhp6 = $("#Tbhp-minutes6").val()+":" + $("#Tbhp-seconds6").val()+":"+ $("#Tbhp-milliseconds6").val();
      tbhp7 = $("#Tbhp-minutes7").val()+":" + $("#Tbhp-seconds7").val()+":"+ $("#Tbhp-milliseconds7").val();
      tbhp8 = $("#Tbhp-minutes8").val()+":" + $("#Tbhp-seconds8").val()+":"+ $("#Tbhp-milliseconds8").val();
      tbhp9 = $("#Tbhp-minutes9").val()+":" + $("#Tbhp-seconds9").val()+":"+ $("#Tbhp-milliseconds9").val();
      tbhp10 = $("#Tbhp-minutes10").val()+":" + $("#Tbhp-seconds10").val()+":"+ $("#Tbhp-milliseconds10").val();


      
      $.ajax({
        url: '/addEntry/',
        method: 'POST',
        data: {
            track: $('#track').val(),
            date: $('#date').val(),
            timeStart: $('#timeStart').val(),
            timeEnd: $('#timeEnd').val(),
            startLap: $('#startLap').val(),
            endLap: $('#endLap').val(),
            
            car1: $('#carNumber1').val(),
            rank1: $('#carRank1').val(),
            tbhl1: tbhl1,
            tbhp1: tbhp1
        }
      })
      //reseting the input fields
      
  }

  
  //functions for deleting records
  /*function delRec(){
      const id = $(this).val();
      $.ajax({
        url: '/user/'+id,
        method: 'DELETE',
        success: function(){
          alert('Record with an id of '+ id+' has been deleted' );
          //codes underneath is for refreshing the display
          $("#enteredRecords").empty();
          loadingData();
        },
        error: function(error){
          alert(error);
        }
      });            
  }*/


 
}