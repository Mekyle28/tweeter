/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


$(document).ready(function () {



  const renderTweets = function (tweets) {
    for (const tweet of tweets) {
      const newTweet = createTweetElement(tweet);
      $('section.tweet-text').prepend(newTweet);
    }
  };

  const createTweetElement = function (tweet) {
    let $tweet = `<article>
      <header class="tweet">
        <img src=${tweet.user.avatars} >
          <div>
            <h4 class="name">${tweet.user.name}</h4>
            <h4 class="handle">${tweet.user.handle}</h4>
          </div>
      </header>
      <p>${tweet.content.text}</p>
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


  $("form").on("submit", function (event) {
    event.preventDefault();
    const queryStr = $(this).serialize();
    $.ajax("/tweets", { method: 'POST', data: queryStr })
      .then(function () {
        loadTweets();
      });
  });

  const loadTweets = function () {
    $.ajax("/tweets", {
      method: 'GET',
      dataType: 'json'
    })
      .then(function (response) {
        renderTweets(response);
      });
  };

});