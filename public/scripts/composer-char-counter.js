
$(document).ready(function () {
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



// $("#new-tweet").on('input', function() {
//     console.log(this); //The this keyword is a reference to the button
//   });

// // specify the DOM node to reference using the document.getElementById method and put that reference in a variable
// const div1 = document.getElementById("div-one");

// // when div1 is clicked, run the function
// div1.addEventListener("click", () => {
//   console.log("You clicked on div 1.");
// });

// newTweet.addEventListener("input", () => {
//   let characters = 0;
//   characters++;
//   conosle.log('you have used', characters);
// });


// const tweet = document.getElementById("tweet-text");

// tweets.addEventListener("input", function() {

//   console.log(this);
// });
// let characters = 0;
//   characters++;
//   const characters = this.length;
//   console.log("characters", characters);