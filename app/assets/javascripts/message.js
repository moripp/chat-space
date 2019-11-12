$(function() {
  $(".wrapper__maine__form__input__btn").on('submit', function(e) {
    e.preventDefault();
    console.log("イベント発火");
  });
});