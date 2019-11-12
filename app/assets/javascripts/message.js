$(function() {
  $(".new_message").on('submit', function(e) {
    e.preventDefault();

    let url = location.href
    let formData = new FormData($(".new_message").get(0));

  });
});