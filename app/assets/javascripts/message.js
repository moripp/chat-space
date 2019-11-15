$(function() {
  function buildHTML(message) {   
    var html_content = message.content==null ? "" : `<p class="wrapper__maine__contents__message__text__content">${message.content}</p>`;
    var html_image = message.image==null ? "" : `<img class="wrapper__maine__contents__message__text__image" src="${message.image}">`;
    var date = message.created_at
    var html = `<div class="wrapper__maine__contents__message">
                  <div class="wrapper__maine__contents__message__info">
                    <div class="wrapper__maine__contents__message__info__user">
                      ${message.user_name}
                    </div>
                    <div class="wrapper__maine__contents__message__info__date">
                      ${message.created_at}
                    </div>
                  </div>
                  <div class="wrapper__maine__contents__message__text">
                    ${html_content}
                    ${html_image}
                  </div>
                </div>`
    return html;
  }

  $(".new_message").on('submit', function(e) {
    e.preventDefault();

    var url = $(this).attr("action")
    var formData = new FormData(this);

    $.ajax({
      url: (url),
      type: "POST",
      data: (formData),
      dataType: "json",
      processData: false,
      contentType: false
    })
    .done(function(data) {
      var html = buildHTML(data);
      $('.wrapper__maine__contents').append(html);
      $('.new_message')[0].reset();
      $('.wrapper__maine__form__input__btn').prop('disabled', false);
      $('.wrapper__maine__contents').animate({ scrollTop: $('.wrapper__maine__contents')[0].scrollHeight});
    })
  });
});