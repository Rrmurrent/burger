//Add New Burger
$(document).on('click', '#addBurger', function(){
  var newBurg = $('#newBurger').val().trim();
  console.log('newBurg = ' + newBurg);
  var newBurger = {
      burgerName: newBurg
  }
  $.ajax('/api/burger', {
      type: "POST",
      data: newBurger
  })
  reloader();
})

//Devour Burger
$(document).on('click', '.devBtn', function(){
  var id = this.id;
  console.log('Burger ID = ' + id);
  var apiLocation  = '/api/burger/' + id;
  $.ajax(apiLocation, {
      type: "PUT",
      data: "false"
  }).then(function(){
      console.log('Burger Devoured!')
  })
  console.log
  reloader();
})

//Reload Page
function reloader(){
  window.location.reload(true);
}




// // Make sure we wait to attach our handlers until the DOM is fully loaded.
// // $(document).ready(function() {
//   $(function() {
//     $(".change-devoured").on("click", function(event) {
//       var id = $(this).data("id");
//       var newDevoured = $(this).data("newDevoured");
  
//       var newDevouredState = {
//         devoured: newDevoured
//       };
  
//       // Send the PUT request.
//       $.ajax("/api/burgers/" + id, {
//         type: "PUT",
//         data: newDevouredState
//       }).then(
//         function() {
//           console.log("changed devoured to", newDevoured);
//           // Reload the page to get the updated list
//           location.reload();
//         }
//       );
//     });
  
//     $(".create-form").on("submit", function(event) {
//       // Make sure to preventDefault on a submit event.
//       event.preventDefault();
  
//       var newBurger = {
//         name: $("#ca").val().trim(),
//         devoured: $("[name=devoured]:checked").val().trim()
//       };
  
//       // Send the POST request.
//       $.ajax("/api/burgers", {
//         type: "POST",
//         data: newBurger
//       }).then(
//         function() {
//           console.log("created new burger");
//           // Reload the page to get the updated list
//           location.reload();
//         }
//       );
//     });
  
//     $(".delete-burger").on("click", function(event) {
//       var id = $(this).data("id");
  
//       // Send the DELETE request.
//       $.ajax("/api/burgers/" + id, {
//         type: "DELETE"
//       }).then(
//         function() {
//           console.log("deleted burger", id);
//           // Reload the page to get the updated list
//           location.reload();
//         }
//       );
//     });
//   });
  