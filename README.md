# Payments Blog

A React-based blog website exploring payments, fintech, and cross-border payment systems.

## Live Project

[View the live website](https://payments-blog.vercel.app/)

## About the Project

This project is a frontend website built with React to explore how modern payment systems work and how money moves across borders.

The website combines educational content with interactive visual elements, including an animated cross-border payment flow and an interactive 3D globe showing global payment routes.

## Technologies Used

- React
- JavaScript
- HTML
- CSS
- React Globe GL
- CSS animations
- Git & GitHub
- Vercel

## What I Learned

This project helped me develop a better understanding of building a React application from the ground up.

### React

- Understanding how React components work.
- Breaking a website into reusable components such as `Navbar`, `Footer`, `WorldGlobe`, and `PaymentAnimation`.
- Understanding how the main `App` component brings different parts of the website together.
- Organising a React project into separate, reusable components.

### CSS & Layout

- Using **Flexbox** for layouts such as navigation and the hero section.
- Using **CSS Grid** for responsive card layouts.
- Understanding the difference between `margin`, `padding`, and `gap`.
- Using CSS variables to create a consistent colour palette.
- Building responsive layouts using media queries.
- Using `min-height` and flexible layouts instead of relying on fixed heights.
- Creating hover effects, transitions, and animations.
- Creating animations using CSS `@keyframes`.

### UI & Design

- Creating a consistent visual style across different sections of a website.
- Using colour intentionally to distinguish primary actions, accents, backgrounds, and text.
- Designing a dark fintech-inspired hero section with an interactive globe.
- Creating an animated visual explanation of a cross-border payment flow.
- Thinking about how complex financial concepts can be explained through simple visualisations.

### Payments & Fintech

While building the website, I also learned more about the basic flow of a cross-border payment and some of the messaging involved.

For example:

- A **debtor** instructs their bank to make a payment.
- A **pain.001** message can be used for the customer-to-bank payment instruction.
- The sending bank processes the instruction and initiates the payment.
- A **pacs.008** message can be used for the interbank customer credit transfer.
- The receiving bank processes the payment and makes the funds available to the **creditor**.

The animation in the website is a simplified visual representation of this process rather than a complete representation of every step involved in a real cross-border payment.

### Deployment & Version Control

I also learned how to:

- Use Git to track changes.
- Push a React project to GitHub.
- Connect a GitHub repository to Vercel.
- Deploy a React application to the web.
- Automatically redeploy the website when changes are pushed to GitHub.

## Running the Project Locally

Clone the repository and install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm start
```

The application will run locally at:

```text
http://localhost:3000
```

## Creating a Production Build

To create a production build:

```bash
npm run build
```

The production files will be generated in the `build` folder.

## Project Goals

The main goals of this project were to:

1. Build a React website from scratch.
2. Improve my understanding of component-based development.
3. Practise responsive CSS and modern layouts.
4. Learn how to create animations without relying on video.
5. Explore how financial concepts can be explained visually.
6. Deploy a React application using GitHub and Vercel.

## Future Improvements

Some ideas for future development include:

- Adding real blog posts.
- Adding individual pages for each article.
- Adding a blog creation form.
- Making the payment animation interactive.
- Adding more payment message types.
- Improving accessibility.
- Adding more detailed explanations of payment systems.
- Adding a database or backend for storing blog posts.

## Learning Resources

- [React Documentation](https://react.dev/)
- [Create React App](https://create-react-app.dev/)
- [Vercel Documentation](https://vercel.com/docs)
- [GitHub Documentation](https://docs.github.com/)
