
console.log("Your index.js file is loaded correctly!");

$("#enter").on("click", function() {
    $(".popup-overlay", ".popup-content").addClass("active")
  });
  
  
$(".close", ".popup-overlay").on("click", function() {
    $(".popup-overlay", ".popup-content").removeClass("active")
  });