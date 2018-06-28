$(document).ready(function()
{
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
  $(document).on('change', 'input[type="checkbox"]', function(e) {
  // $('input[type="checkbox"]').change(function(e) {
    var checked = $(this).prop("checked"),
    container = $(this).parent();
    // console.log(checked);

    container.find('input[type="checkbox"]').prop({
      checked: checked 
    });
    
    checkSiblings(container);
      function checkSiblings(el) {
      var parent = el.parent().parent(),
      all = true;
      el.siblings().each(function() {
      return all = ($(this).children('input[type="checkbox"]').prop("checked") === checked);
      });

      if (all && checked) {
        parent.children('input[type="checkbox"]').prop({
        checked: checked });
        checkSiblings(parent);
      } else if (all && !checked) {
        parent.children('input[type="checkbox"]').prop("checked", checked);
        checkSiblings(parent);
      } 
      else {
        el.parents("li").children('input[type="checkbox"]').prop({
    checked: true});
      }
    }
  }); 
});



  
