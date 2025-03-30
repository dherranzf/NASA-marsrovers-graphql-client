# 🪐🛰️ NASA Mars Rovers GraphQL Client

A React-based front-end application designed to interact with the **NASA Mars Rovers GraphQL Server**. This client allows users to explore photos taken by NASA's Mars Rovers, providing a visually appealing and responsive interface.

Explore the wonders of Mars with this GraphQL React Web! 🔭

## 📑 Table of Contents
- [🧑‍💻 Features](#-features)
- [🎨 Technology Stack](#️-technology-stack)
- [🗂️ Project Structure](#-project-structure)
- [📖 How to Use This Repo](#-how-to-use-this-repo)
- [🔍 Example Screenshots](#-example-screenshots)
- [🔮 Future Improvements](#-future-improvements)
- [📜 License](#-license)
- [🧪 Running Tests](#-running-tests)

## 🧑‍💻 Features
- Display a grid of Mars Rover photos.
- View detailed information about a specific photo, including the rover and camera details.
- Increment the view count for a photo when it is clicked.
- Responsive design for seamless use on desktop and mobile devices.

## 🎨 Technology Stack

### Key Technologies
| Technology       | Purpose                                                                 | Advantages                                                                 |
|------------------|-------------------------------------------------------------------------|----------------------------------------------------------------------------|
| **React**        | Provides a component-based architecture for building the UI.           | Reusable components, fast rendering with Virtual DOM, and a large ecosystem. |
| **Apollo Client**| Handles GraphQL queries and mutations.                                 | Simplifies data fetching, caching, and state management for GraphQL APIs. |
| **TypeScript**   | Ensures type safety and better developer experience.                   | Reduces runtime errors, improves code readability, and provides autocompletion. |
| **Emotion**      | Enables CSS-in-JS styling for components.                              | Scoped styles, dynamic theming, and better maintainability of styles.     |
| **Vite**         | A fast build tool for modern web applications.                         | Lightning-fast development server, optimized builds, and modern JavaScript support. |

### Detailed Explanations
#### **React**
React is a JavaScript library for building user interfaces. It is widely adopted due to its simplicity, flexibility, and performance. Here are some of its key advantages:
- **Component-Based Architecture**: React allows developers to break down the UI into small, reusable components. This modular approach makes the codebase easier to maintain, test, and extend.
- **Virtual DOM**: React uses a Virtual DOM to optimize rendering. Instead of updating the entire DOM tree, React calculates the minimal set of changes required and applies them efficiently. This results in faster updates and better performance.
- **Declarative Syntax**: React's declarative syntax makes it easier to understand and predict how the UI will look and behave. Developers can focus on describing what the UI should look like, and React takes care of updating it.
- **Rich Ecosystem**: React has a vast ecosystem of libraries and tools, such as React Router for navigation and Redux for state management. This makes it easy to find solutions for common problems.
- **Community Support**: With a large and active community, React developers have access to extensive documentation, tutorials, and third-party libraries.

#### **Apollo Client**
Apollo Client is a state management library specifically designed for GraphQL. It simplifies the process of fetching, caching, and managing data in a React application. Key advantages include:
- **GraphQL Integration**: Apollo Client provides a seamless way to interact with GraphQL APIs, allowing developers to write queries and mutations directly in their code.
- **Caching**: Apollo Client automatically caches query results, reducing the need for redundant network requests and improving performance.
- **Optimistic UI Updates**: Apollo Client supports optimistic updates, allowing the UI to update immediately while the server processes the request. This improves the user experience by making the application feel more responsive.
- **Error Handling**: Apollo Client provides built-in mechanisms for handling errors, making it easier to display meaningful messages to users.
- **Developer Tools**: Apollo Client includes powerful developer tools for debugging and monitoring GraphQL queries.

#### **TypeScript**
TypeScript is a superset of JavaScript that adds static typing. It enhances the developer experience and improves code quality. Key advantages include:
- **Type Safety**: TypeScript catches type-related errors during development, reducing the likelihood of runtime errors.
- **Improved Tooling**: TypeScript provides better autocompletion, refactoring, and navigation in IDEs, making development faster and more efficient.
- **Code Readability**: By explicitly defining types, TypeScript makes the code easier to understand and maintain.
- **Integration with JavaScript**: TypeScript is fully compatible with JavaScript, allowing developers to gradually adopt it in existing projects.

#### **Emotion**
Emotion is a CSS-in-JS library that allows developers to write styles directly in JavaScript. This approach offers several benefits:
- **Scoped Styles**: Styles are scoped to specific components, preventing conflicts and ensuring that changes in one component do not affect others.
- **Dynamic Styling**: Emotion makes it easy to apply styles based on component props or state, enabling more dynamic and interactive UIs.
- **Theming**: Emotion supports theming out of the box, making it simple to define and apply consistent styles across the application.
- **Performance**: Emotion optimizes styles at runtime, ensuring that only the necessary styles are applied.

#### **Vite**
Vite is a modern build tool that provides a fast development experience. It is designed to work with modern JavaScript frameworks like React. Key advantages include:
- **Fast Development Server**: Vite uses native ES modules in the browser, resulting in near-instant server startup times.
- **Optimized Builds**: Vite produces highly optimized production builds with minimal configuration.
- **Hot Module Replacement (HMR)**: Vite's HMR feature allows developers to see changes in the browser immediately without losing the application state.
- **Modern JavaScript Support**: Vite supports the latest JavaScript features, ensuring compatibility with modern browsers.

### Design Practices
- **API First / Schema First**: The GraphQL schema is defined first, serving as the contract for the API and ensuring consistency between the client and server. This also enables parallel development between client and server.
- **Component-Based Architecture**: The UI is built using reusable React components, making the codebase modular and easier to maintain.
- **GraphQL Integration**: Apollo Client is used to fetch data from the GraphQL server, providing a seamless and efficient way to interact with the API.
- **Type-Safe Development**: TypeScript ensures that the code is robust and less prone to bugs, improving developer productivity.
- **Responsive Design**: The application is styled to work seamlessly on devices of all sizes, ensuring a great user experience.
- **Testing**: Unit and integration tests have been implemented using `vitest` and `@testing-library/react` to ensure the reliability and correctness of the application.

## 🗂️ Project Structure

The project is organized as follows:

```
src/
├── components/          # Reusable UI components
├── containers/          # Components with logic tied to specific data
├── pages/               # Page-level components
├── utils/               # Utility functions and hooks
├── styles.tsx           # Global styles and theme definitions
├── __generated__/       # Auto-generated GraphQL types and queries
└── index.tsx            # Entry point for the application
```

### Detailed Explanations
- **`components/`**: This folder contains reusable UI components that are not tied to specific data. Examples include headers, footers, and layout components. These components are styled using Emotion and are designed to be generic and reusable across the application.
- **`containers/`**: This folder contains components that are connected to specific data or logic. For example, the `marsphoto-card.tsx` component fetches and displays data for individual Mars photos. These components often use Apollo Client to interact with the GraphQL API.
- **`pages/`**: This folder contains page-level components that represent different routes in the application. For example, `marsphotos.tsx` displays a grid of Mars photos, while `marsphoto.tsx` shows detailed information about a specific photo.
- **`utils/`**: This folder contains utility functions and custom hooks that are used throughout the application. Examples include helper functions for formatting data and hooks for managing window dimensions.
- **`styles.tsx`**: This file defines global styles and theme variables for the application. It includes color palettes, breakpoints for responsive design, and other shared style definitions.
- **`__generated__/`**: This folder contains auto-generated files, such as TypeScript types and GraphQL queries. These files are generated using tools like GraphQL Code Generator and should not be manually edited.
- **`index.tsx`**: This is the entry point for the application. It initializes the React application, sets up the Apollo Client, and renders the main `Pages` component.

## 📖 How to Use This Repo

Follow these steps to set up and run the client:

### ⚙️ Setup

1. Navigate to the `client` folder:
   ```sh
   cd client
   ```
2. Install dependencies:
   ```sh
   npm install
   ```

### 🚀 Running the Client

Run the client:
   ```sh
   npm start
   ```

This will launch the client application, ready to interact with the GraphQL server. 🌐

## 🧪 Running Tests

To run the tests for the client, follow these steps:

1. Ensure all dependencies are installed:
   ```bash
   npm install
   ```

2. Run the tests using the following command:
   ```bash
   npm test
   ```

This will execute all test cases, including unit and integration tests, and display the results in the terminal.

## 🔍 Example Screenshots

### Mars Photos Grid
![Mars Photos Grid](./docs/mars-photos-grid.png)

### Photo Details Page
![Photo Details Page](./docs/photo-details-page.png)

## 🔮 Future Improvements
- Add filtering and sorting options for photos.
- Implement infinite scrolling for the photo grid.
- Add user authentication for personalized features.
- Improve error handling and user feedback.

## 📜 License

This project is licensed under the MIT License. See the `LICENSE` file for details.
