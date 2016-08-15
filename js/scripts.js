var list = [];
var uppercase;

$(document).ready(function () {
  $("button").click(function() {
    var data = $("#list").val();
    list.push(data);

    list.sort();

    uppercase = list.map(function (item) {
      return item.toUpperCase();
    });

    $(".remove").remove();

    uppercase.forEach(function(item) {
     $("#listItem").append("<li class='remove'>" + item + "</li>")
    });
  })
});
