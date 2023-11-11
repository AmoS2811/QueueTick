# QueueTick

QueueTick is a collaborative list-making application that allows users to create, share, 
and edit lists in real-time. Designed for ease of use, it requires no login for basic functionalities, 
but offers enhanced features for account holders. The name is a play on the idea of ticking off todo boxes in 
a list of things an individual has to do. I decided to start this project to hone my current skills and pave the 
way for technologies I haven't dabbled with yet..

## Features

### Frontend

- **Real-time Collaboration**: Users can create lists and share them via a link. Anyone with the link can edit the list in real time.
- **View Only Option**: A 'view only' mode for people that don't want others to meddle with their lists.
- **Email Integration**: Send lists to an email for permanent storage.
- **Responsive Design**: Fully responsive for various device sizes.
- **Optional User Accounts**: Users can optionally create an account for additional features.

### Backend

- **List Management**: APIs for creating, updating, and deleting lists.
- **Real-time Updates**: Uses WebSockets for real-time communication.
- **Temporary Storage**: Lists are stored temporarily and auto-deleted unless saved.
- **Email Service**: Integration for sending lists to email.
- **User Account Management**: Support for user registration, login, and list management.

### Enhanced Features for Account Holders

- **Permanent List Storage**: Ability to save lists indefinitely in user accounts.
- **List History**: View and restore previous versions of lists.
- **Notifications**: Receive notifications for changes made to shared lists.
- **Collaboration Management**: Control who can view or edit shared lists.

## Future Enhancements

- **Task Assignment**: Ability to assign list items to specific users.
- **Integration with Calendar Apps**: Sync lists with external calendar applications for deadline tracking.
- **File Attachments**: Attach files or links to list items for additional context.

## Installation

- **Coming soon**

## Usage

- Open up three terminals
- Make your way to the frontend and backend folders respectively
- Run the command **npm run start** for frontend
- And **node index.js** for backend
- Also run **net start MongoDB** to launch the database

## Endpoints

- **Coming soon**

## Reasoning for technology usage
I need to get better at knowing what technology to use for various projects. Therefore, I decided to do some
googling and figure out what technology best suits the idea I had and this is my conclusion.

### Frontend technology

- **React**
  - Component based architecture is the way to go for reusability, it also makes the code easier to manage.
  - Virtual DOM allows for quick rerendering out the box whenever changes are made without reloading the entire page.
  - React also has some hooks to manage state such as useState, useEffect etc.. and this makes data predictable.
  - There are alternatives such Vue and Angular, but Angular is overkill for a simple project like this and who even knows what Vue is lol.

- **Socket.io client**
  - Apparently it's good for real-time applications which is what we need.
  - Good fallback mechanisms in case the websocket isn't supported or blocked, it can revert to long polling (idk what that means rn but ill find out)
  - API is consistent regardless if fallback is executed or method of transport, this simplifies development.


### Backend technology

- **Node.js**
  - Node is event driven and non-blocking which means it behaves in an asynchronous matter. This is perfect for our project where multiple operations could be happing simultaneously.
  - NPM has tons of useful libraries thus speeding up development.
  - I am a potato rn so having JS on both ends makes things easier for me.

- **Express.js**
  - Allows functions to execute in the request & response cycle (middleware). Useful for error handling, logging or processing real-time updates. Think of a drinking something with a straw, in this case the straw is the middleware.
  - Doesn't require a particular structure to work which lets us work in a flexible manner.

- **Socket.io**
  - Lets us use rooms which lets us group users that are working on the same list. Updates made to the list are then broadcasted to the users in that specific room.
  - Apparently this goes well with express.js which is something we are using, so the seamless integration makes it easier to work with.


### Database
As a frontend developer I can confidently say we are threading in the unknown realm. I know very little about databases except some SQL calls I remember from my uni days, 
however this is ok as we should always strive to learn new things, or else we'd become obsolete in the tech world.

- **MongoDB**
  - This database does not use Schemas which lets makes it easier for future me when I eventually add new functionality. I would not need to make significant refactoring to the DB.
  - Comes in BSON format which is like JSON, but with a b.. right? Anyway it makes data in the app & DB consistent.
  - Good scalability in case I make it out the "hood" :).

### Email integration

- **Nodemailer**
  - Versatile in transport method. Allows us to send mail in a plethora of ways e.g: SMTP, local sendmail or 3rd party.
  - Allows for cooler formats when exporting such as HTML or attachments.
  - Secure email sending by using TLS/STARTTLS (no clue what this is **yet**)