// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {

  $("#create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burger_name: $("#burger-name").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function(data) {
        console.log("created new burger: " + data);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".devour-burger").on("click", function(event) {
    var id = $(this).data("id");
    var devoured = true;

    var devouredBurger = {
      devoured: devoured
    };

    // Send the DELETE request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: devouredBurger
    }).then(
      function() {
        console.log("devoured burger", devoured);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

});
