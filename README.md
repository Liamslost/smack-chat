# Smack Chat

A lightweight, real-time chat application designed for seamless communication across desktop and mobile devices. It allows users to create and join chat rooms, send instant messages, and edit their comments for a unique and fun experience.

Authors: [Darren Baldwin](https://github.com/DBaldwin8),  [Matt Mannings](https://github.com/Jago971), [Vince De Freitas](https://github.com/vincedefreitas) & [Liam O'Connell](https://github.com/Liamslost)

Technologies: React.js, TypeScript, TailwindCSS, Node.js, Express.js, MySQL

# 📖 Table of Contents

- 🔹 [Features](#features)

  - 🚀 [Real-time Communication](#real-time-communication)
  - 🔒 [Secure Login](#secure-login)
  - 🎨 [Striking Visuals](#striking-visuals)

- 🦻🏻 [Accessibility](#accessibility)

- 📕 [API Instructions](#api-instructions)

  - [Get List of Chat Rooms](#get-list-of-chat-rooms)
  - [User Login](#user-login)
  - [Get Room Details](#get-room-details)
  - [Post a Comment](#post-a-comment)
  - [Soft Delete a Comment](#soft-delete-a-comment)
  - [Edit a Comment](#edit-a-comment)

- 📝 [Licencing](#licencing)

## Features

### **Real-time Communication**

The real-time communication feature in this application allows users to instantly send and receive messages or updates without delays. This means conversations, notifications, or data updates happen immediately, creating a smooth and interactive experience like chatting live with someone or seeing updates as they happen. 🚀

**ADD TECHNICAL INFORMATION AS IT TRANSPIRES**

### **Secure Login**

The Secure Login feature ensures that users can safely access their accounts without worrying about security risks. It protects passwords, prevents unauthorised access, and keeps user data safe while logging in.

**Technical Details**

- Passwords are encrypted using Bcrypt, making them extremely difficult to crack.
- Sessions are used to keep users logged in securely without needing to enter their credentials repeatedly.
- This approach helps prevent attacks like password theft and session hijacking, ensuring a safe login experience.


### **Striking Visuals**

**Design & Layout**

The design and layout of the application have been created from scratch with the user's device in mind. It prioritises a clean, intuitive interface that adapts to different screen sizes and devices. By considering the available space and screen shape, the design ensures that key features are easily accessible, content is well-organised, and the user experience is smooth and engaging. Whether on mobile or desktop, the layout is responsive, ensuring a consistent, user-friendly experience across all platforms.

**Color Scheme & Psychology**

Our curated color scheme features three main colors: pink, purple, and orange, each chosen for their psychological impact and how they complement the overall user experience.

- Purple evokes a sense of luxury, sophistication, and calmness. It adds depth and a touch of elegance to the design, making the interface feel premium yet approachable.
- Orange represents energy, enthusiasm, and positivity. It captures attention and promotes a sense of excitement and action, motivating users to interact with the application.
- Pink is often associated with warmth, compassion, and creativity. It helps create a welcoming, friendly atmosphere, encouraging users to feel comfortable and engaged.

These colors were selected not only for their aesthetic appeal but also for their ability to evoke emotions that align with our vision for the project and user experience.

**Light & Dark Mode**

The light and dark modes allow users to switch between a white or black background, while also shifting the brightness of the color scheme. This adjusts the hues of the pink, purple, and orange tones to create a more balanced and comfortable experience, whether in bright or low-light environments.

**Reference Images & Videos:**

1. [Pink Purple App Design](https://i.pinimg.com/736x/24/5a/34/245a3441d584c55929396a9112e179a9.jpg)
2. [Pearl & Dean Cinema Intro](https://www.youtube.com/watch?v=Iom-g1cbGzI)

## Accessibility

Our app is committed to ensuring an inclusive and accessible experience for all users. Below are the key features and tools we've implemented to meet a range of accessibility needs:

- **Wave Extension**
We use the Wave Extension to evaluate and highlight various accessibility criteria across the app. This helps us identify and address potential issues such as missing alt text, color contrast problems, and navigational challenges, ensuring compliance with accessibility standards.

- **Contrast Checkers**
To ensure text and background elements are easily distinguishable for users with visual impairments, we employ contrast checkers. These tools help us maintain proper contrast ratios between colors, improving readability for those with color blindness or low vision.

- **ARIA Labels**
We implement ARIA (Accessible Rich Internet Applications) labels throughout the app. These labels enhance screen reader support by providing additional context to interactive elements, ensuring that users with visual impairments can easily navigate and understand the content.

- **Keyboard Navigation**
Our app supports full keyboard navigation, allowing users to interact with all features without relying on a mouse. This benefits users with motor impairments who may find using a mouse challenging.

- **Customisable Text Sizes**
We offer options to adjust text size for users with visual impairments, providing a more personalised and accessible reading experience.

- **Alt Text for Images**
All images within the app are equipped with descriptive alt text, allowing users with screen readers to understand the content and context of each image.

- **Consistent Layout and Structure**
The app’s layout and structure are designed for consistency, making it easier for users to understand and navigate through headings, buttons, and links. This reduces cognitive load and ensures a smooth experience for users with learning disabilities.

By implementing these features, we strive to create a more accessible environment for all users, regardless of their abilities.

## API Instructions

# API Documentation for Online Live Chat Room App

## Table of Contents

- [Get List of Chat Rooms](#get-list-of-chat-rooms)
- [User Login](#user-login)
- [Get Room Details](#get-room-details)
- [Post a Comment](#post-a-comment)
- [Soft Delete a Comment](#soft-delete-a-comment)
- [Edit a Comment](#edit-a-comment)

---

## **Get List of Chat Rooms**

- **Endpoint:** `/rooms`
- **Method:** `GET`
- **URL Parameters:** None

### **Example Request**

```http
GET /rooms
```

### **Success Response**

**Code:** `200 OK`

```json
{
  "message": "Successfully retrieved rooms.",
  "data": [
    {
      "roomId": "1",
      "roomName": "General Chat",
      "commentCount": 123,
      "latestCommentDate": "DD-MM-YY"
    },
    {
      "roomId": "2",
      "roomName": "General Chat 2",
      "commentCount": 321,
      "latestCommentDate": "DD-MM-YY"
    }
  ]
}
```

### **Error Response**

**Code:** `500 INTERNAL SERVER ERROR`

```json
{
  "message": "Unexpected error",
  "data": {}
}
```

---

## **User Login**

- **Endpoint:** `/login`
- **Method:** `POST`
- **URL Parameters:** None

### **Example Request**

```http
POST /login
```

### **Request Body Format**

```json
{
  "username": "Joe Blogs",
  "password": "password123"
}
```

### **Success Response**

**Code:** `200 OK`

```json
{
  "success": true,
  "message": "Successfully logged in.",
  "data": {
    "username": "Joe Blogs"
  }
}
```

### **Error Responses**

**Code:** `400 BAD REQUEST`

```json
{
  "success": false,
  "message": "Missing login information",
  "data": {}
}
```

**Code:** `401 UNAUTHORIZED`

```json
{
  "success": false,
  "message": "Invalid username or password",
  "data": {}
}
```

**Code:** `500 INTERNAL SERVER ERROR`

```json
{
  "message": "Unexpected error",
  "data": {}
}
```

---

## **Get Room Details**

- **Endpoint:** `/rooms/:roomId`
- **Method:** `GET`
- **URL Parameters:** `roomId` (required)

### **Example Request**

```http
GET /rooms/123
```

### **Success Response**

**Code:** `200 OK`

```json
{
  "message": "Successfully retrieved room.",
  "data": {
    "name": "Top Secret Room",
    "comments": [
      {
        "commentId": "123",
        "userId": "007",
        "timestamp": 1739157340,
        "author": "James Bond",
        "content": "This is a message",
        "isEdited": true
      },
      {
        "commentId": "124",
        "userId": "81",
        "timestamp": 1739157350,
        "author": "Joe Blogs",
        "content": "This is another message",
        "isEdited": false
      }
    ]
  }
}
```

### **Error Responses**

**Code:** `400 BAD REQUEST`

```json
{
  "message": "Invalid room ID",
  "data": {}
}
```

**Code:** `500 INTERNAL SERVER ERROR`

```json
{
  "message": "Unexpected error",
  "data": {}
}
```

---

## **Post a Comment**

- **Endpoint:** `/rooms/:roomId/addComment`
- **Method:** `POST`
- **URL Parameters:** `roomId` (required)

### **Example Request**

```http
POST /rooms/123/addComment
```

### **Success Response**

**Code:** `201 CREATED`

```json
{
  "message": "Successfully added comment.",
  "data": {
    "commentId": "420"
  }
}
```

### **Error Responses**

**Code:** `400 BAD REQUEST`

```json
{
  "message": "Invalid or missing form data",
  "data": {}
}
```

**Code:** `401 UNAUTHORIZED`

```json
{
  "message": "Not logged in",
  "data": {}
}
```

**Code:** `500 INTERNAL SERVER ERROR`

```json
{
  "message": "Unexpected error",
  "data": {}
}
```

---

## **Soft Delete a Comment**

- **Endpoint:** `/rooms/:roomId/:commentId/delete`
- **Method:** `PUT`
- **URL Parameters:** `roomId`, `commentId` (required)

### **Example Request**

```http
PUT /rooms/123/420/delete
```

### **Success Response**

**Code:** `200 OK`

```json
{
  "message": "Successfully soft deleted comment.",
  "data": {
    "commentId": "420",
    "isDeleted": true
  }
}
```

### **Error Responses**

**Code:** `400 BAD REQUEST`

```json
{
  "message": "Invalid comment ID",
  "data": {}
}
```

**Code:** `401 UNAUTHORIZED`

```json
{
  "message": "Not logged in",
  "data": {}
}
```

**Code:** `500 INTERNAL SERVER ERROR`

```json
{
  "message": "Unexpected error",
  "data": {}
}
```

---

## **Edit a Comment**

- **Endpoint:** `/rooms/:roomId/:commentId/edit`
- **Method:** `PUT`
- **URL Parameters:** `roomId`, `commentId` (required)

### **Example Request**

```http
PUT /rooms/123/420/edit
```

### **Success Response**

**Code:** `200 OK`

```json
{
  "message": "Successfully edited comment.",
  "data": {
    "commentId": "420",
    "isEdited": true
  }
}
```

### **Error Responses**

**Code:** `400 BAD REQUEST`

```json
{
  "message": "Invalid comment ID",
  "data": {}
}
```

**Code:** `401 UNAUTHORIZED`

```json
{
  "message": "Not logged in",
  "data": {}
}
```

**Code:** `500 INTERNAL SERVER ERROR`

```json
{
  "message": "Unexpected error",
  "data": {}
}
```

## Licencing

This project is licensed under the MIT License.

You are free to use, modify, distribute, and share this project as long as you include the original copyright notice and disclaimers.

**MIT License**

Copyright (c) [2025] [Darren Baldwin, Matt Mannings, Vince De Freitas]

Permission is hereby granted, free of charge, to any person obtaining a copy  
of this software and associated documentation files (the "Software"), to deal  
in the Software without restriction, including without limitation the rights  
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell  
copies of the Software, and to permit persons to whom the Software is  
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all  
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR  
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,  
FITNESS FOR A PARTICULAR PURPOSE, AND NONINFRINGEMENT. IN NO EVENT SHALL THE  
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES, OR OTHER  
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT, OR OTHERWISE, ARISING FROM,  
OUT OF, OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE  
SOFTWARE.