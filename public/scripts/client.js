
$(document).ready(function() {

  const renderTweets = function(tweets) {
    $(".tweet-text").empty();
    for (const tweet of tweets) {
      const newTweet = createTweetElement(tweet);
      $('section.tweet-text').prepend(newTweet);
    }
    $("textarea").val('');
  };

  
  const escape = function(str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  const createTweetElement = function(tweet) {
  
    let $tweet = `<article>
      <header class="tweet">
        <img src=${tweet.user.avatars} >
          <div>
            <h4 class="name">${tweet.user.name}</h4>
            <h4 class="handle">${tweet.user.handle}</h4>
          </div>
      </header>
      <p>${escape(tweet.content.text)}</p>
      <footer>
        <p>${timeago.format(tweet["created_at"])}</p>
        <div>
          <i class="fa-solid fa-flag"></i>
          <i class="fa-solid fa-retweet"></i>
          <i class="fa-solid fa-heart"></i>
        </div>
      </footer>
    </article>`;
    return $tweet;
  };


  $("form").on("submit", function(event) {
    if (!$("textarea").val().trim()) {
      $('div.error-message').text("Error: Oops! Did you forget to type something? Add some content and try again :)");
      $('div.error-message').slideDown();
      event.preventDefault();
      return;
    }
    if ($("textarea").val().length > 140) {
      $('div.error-message').text('Error: Whoa there, let cut that back a bit... remember 140 characters');
      $('div.error-message').slideDown();
      event.preventDefault();
      return;
    }
    $('div.error-message').slideUp();
    event.preventDefault();
    const queryStr = $(this).serialize();
    $.ajax("/tweets", { method: 'POST', data: queryStr })
      .then(function() {
        loadTweets();
      });
  });

  const loadTweets = function() {
    $.ajax("/tweets", {
      method: 'GET',
      dataType: 'json'
    })
      .then(function(response) {
        renderTweets(response);
      });
  };

});