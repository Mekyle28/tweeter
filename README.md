# Tweeter Project

Tweeter is a simplified single-page application Twitter clone built using HTML, CSS, JavaScript, jQuery, and AJAX. It aims to mimic the functionality and layout of Twitter, allowing users to compose and view tweets in a user-friendly interface. 

## Features

### Navigation Bar

- Fixed to the top of the page.

### Compose Tweet Box

- Contains a form for submitting tweets.
- Textarea for new tweet content.
- Left-aligned button for submitting new tweets.
- Character Counter: 
   - Shows remaining characters out of 140.
   - Turns red when exceeding the character limit.

### List of Tweets

- Displays tweets in reverse-chronological order.
- Individual Tweets:
- Header: with user avatar and handle 
- Body: containing the tweet text
- Footer: time since tweet creation and action icons
 
### Behaviour

- Hovering over a tweet displays a box shadow.
- Hovering over action icons changes their color.
- Character counter updates in real-time while typing.
- Error message displayed for invalid tweets.
- Successful tweet submission refreshes the tweet list, clears the compose tweet textarea, and resets the character counter.


## Final Product

!["Registration Page"](https://github.com/Mekyle28/tinyapp/blob/master/docs/RegistrationPage.png?raw=true)
!["Users Url collection"](https://github.com/Mekyle28/tinyapp/blob/master/docs/URLsPage.png?raw=true)
!["Create new tinyUrl"](https://github.com/Mekyle28/tinyapp/blob/master/docs/createTintUrl.png?raw=true)

## Getting Started

1. Install dependencies using the `npm install` command.
2. Start the web server using the `npm run local` command. 


## Dependencies

- Express
- Node 5.10.x or above
- Body-parser
- chance
- md5

## Acknowledgments

This is project was created as part of my learnings at Lighthouse Labs. The repository that was the starting off point of this project was created by [Original Author's Name](link-to-original-repo). I thank them for providing the foundation for this project.



