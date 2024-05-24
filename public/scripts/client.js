/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


$(document).ready(function () {
  console.log("please work");


  const renderTweets = function (tweets) {
    for (const tweet of tweets) {
      const newTweet = createTweetElement(tweet);
      $('section.tweet-text').prepend(newTweet);
    }
  };

  const createTweetElement = function (tweet) {
    let $tweet = `<article>
      <header class="tweet">
        <img src=${tweet["user"]["avatars"]} >
          <div>
            <h4 class="name">${tweet["user"]["name"]}</h4>
            <h4 class="handle">${tweet["user"]["handle"]}</h4>
          </div>
      </header>
      <p>${tweet["content"]["text"]}</p>
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


  renderTweets(data);


  $("form").on("submit", function (event) {
    event.preventDefault();
    const queryStr = $(this).serialize();
    console.log(queryStr);
    $.ajax(queryStr, { method: 'POST' })
      .then(function () {
        console.log(this);
      });

    const loadTweets = function () {
      $.ajax("/tweets", {
        method: 'GET',
        dataType: 'json'
      })
        .then(renderTweets(response));
    };


  });
  const loadTweets = function () {
    $.ajax("/tweets", {
      method: 'GET',
      dataType: 'json'
    })
      .then(renderTweets(response));
  };

});



// $("form").on("submit", function(event) {
//   alert("Handler for `submit` called.");
//   event.preventDefault();
//   const value = $(this).val();
//   console.log(value);
//   const queryStr = $(this).serialize();
//   console.log(queryStr);
//   $.ajax(queryStr, { method: 'POST' })
//     .then(function() {
//       console.log(this);
//     });
// });
