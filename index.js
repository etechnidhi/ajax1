$(document).ready(function()
{
  $("button").click(function(){
    $.ajax({
      url: "data.json",
      dataType:"json",
      success: function(result){
        var json_data, child_data,count=1;
        for (var i = 0; i < result.length; i++) {
          json_data = "<li id='"+result[i].value+"'><input type='checkbox'>&nbsp;"+result[i].name+"<ul id='child"+count+"'></ul></li>";
          $("#parentAll").append(json_data);
          for (var j = 0; j < (result[i].child.length); j++) {
            child_data = "<li id='"+result[i].child[j].value+"'><input type='checkbox'>&nbsp;"+result[i].child[j].name+"</li>";
            $("#child"+count+"").append(child_data);
          }
          count++;
        }
      }
    });
  });
});