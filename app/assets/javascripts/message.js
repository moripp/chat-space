$(function() {
  $(".new_message").on('submit', function(e) {
    e.preventDefault();

    let url = location.href
    let formData = new FormData($(".new_message").get(0));

    $.ajax({
      url: (url),
      type: "POST",
      data: (formData),
      dataType: "json",
      processData: false,
      contentType: false
    });
  });
});