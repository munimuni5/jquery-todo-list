
//add a new li to bottom when button is clicked or enter is pressed
  $('#button').click(
    function(){
        var newItem = $('input[name=ListItem]').val();
           $('ol').append('<li>' + newItem + '</li>');
    });
//add a new li to bottom when enter key is pressed--NOT WORKING--currently deletes everything
      //  $("input[name=ListItem]").keyup(function(event){
      //     if(event.keyCode == 13){
      //       $("#button").click();
      //     }         
      // });
//remove a li with a cool fadeout!!   
   $(document).on('dblclick','li', function(){
     $(this).toggleClass('strike').fadeOut('slow', function() { $(this).remove();}
        	);    
   });
      
   $('input').focus(function() {
     $(this).val('');
   });
      
   $('ol').sortable();  
   
//need to troubleshoot why enter key erases all typed content 