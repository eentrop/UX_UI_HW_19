
$("#enter").on("click", function(){
    $(".popup-overlay, .popup-content").addClass("active");
  });
  
  $(".close").on("click", function() {
    $(".popup-overlay, .popup-content").removeClass("active");
  }); 
  
