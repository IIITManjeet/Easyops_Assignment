
$('#save').on('click', function () {
   var fname = $('#firstName').val();
   var sname = $('#lastName').val();
   var name=fname+" "+sname;
   var number = $('#number').val();
   var count = $('#myData tr').length;
   
    if (name != "" && number != "") {
      $('#myData tbody').append('<tr class="child"><td>' + count + '</td><td>' + name + '</td><td>' + number + '</td><td><a href="javascript:void(0);" class="remdata"><i class="fa fa-close"></i></a></td></tr>');
    }
});

$(document).on('click', '.remdata', function () {
 $(this).parent().parent().remove();
 $('#myData tbody tr').each(function (i) {
  $($(this).find('td')[0]).html(i + 1);
 });
});

$(document).ready(function(){
 $("#myInput").keyup(function () {
  var value = $(this).val().toLowerCase();
  $("#myData tr").filter(function () {
   $(this).toogle($(this).text().toLowerCase().indexOf(value) > -1)
  });
 })
})
  $(document).ready(function () {
    $('#search').keyup(function () {
      search_table($(this).val());
    });
    function search_table(value) {
      $('#myData tr').each(function () {
        var found = 'false';
        $(this).each(function () {
          if ($(this).text().toLowerCase().indexOf(value.toLowerCase()) >= 0) {
            found = 'true';
          }
        });
        if (found == 'true') {
          $(this).show();
        }
        else {
          $(this).hide();
        }
      });
    }
  });  

$(function () {
 $('table#myData').tableSortable({
    cmp: (a, b) => a < b ? -1 : 1
  });
});

