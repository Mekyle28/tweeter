
$(document).ready(function() {
  console.log("ready");

  $('#tweet-text').on('input', function() {
    const tweetBox = $(this).val();
    const counter = $(this).closest('form').find('.counter');
    counter.text(140 - tweetBox.length);
    if (tweetBox.length > 140) {
      counter.addClass('out-of-characters');
    } else {
      counter.removeClass('out-of-characters');
    }
  });
});
