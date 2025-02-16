# August Culture - Upscale Clothing Brand Website

## Project Overview

This project is a full-stack website for August Culture, an upscale clothing brand for fashion-forward women. The website showcases the brand's collections, brand philosophy, lookbook, and contact information, and includes a shop page with product listings and a basic shopping cart preview.

## Project Structure

The project is structured into two main parts:

- **`frontend`**: This directory contains the React frontend of the website, built using Vite.
- **`backend`**: This directory contains the Node.js backend using Express, serving product data as a JSON API.

### `frontend`

- **`index.html`**: Main HTML entry point for the React application.
- **`package.json`**:  Frontend dependencies and scripts.
- **`src`**: Contains the React application source code.
    - **`main.jsx`**:  Entry point for the React application.
    - **`App.jsx`**: Main application component defining routing.
    - **`index.css`**: Global styles for the frontend.
    - **`components`**: Reusable React components (Header, Footer).
    - **`pages`**: React components for different pages (HomePage, AboutPage, ShopPage, LookbookPage, ContactPage).

### `backend`

- **`server.js`**: Main server file using Express to handle API requests.
- **`package.json`**: Backend dependencies and scripts.
- **`controllers`**: Contains controller logic.
    - **`products.js`**: Handles product data retrieval.
- **`data`**: Contains static data.
    - **`products.json`**: JSON file containing product information.
- **`routes`**: Defines API routes.
    - **`products.js`**: Defines routes for product-related API endpoints.

## Functionality

- **Frontend (React with Vite)**:
    - **Routing**: Uses `react-router-dom` for navigation between different pages (Home, About, Shop, Lookbook, Contact).
    - **Components**:  Header and Footer components for consistent layout.
    - **Pages**:
        - **HomePage**: Hero section, featured collections, brand story.
        - **AboutPage**: Brand philosophy, founder information.
        - **ShopPage**: Displays product listings fetched from the backend API, add to cart functionality (basic preview).
        - **LookbookPage**:  Visual lookbook showcasing styled outfits.
        - **ContactPage**: Contact form and contact information.
    - **Styling**: CSS for layout and styling, including product display and cart preview.

- **Backend (Node.js with Express)**:
    - **API Endpoints**:
        - `/api/products`: Returns a JSON array of product data from `products.json`.
    - **CORS**: Enabled using `cors` middleware to allow cross-origin requests from the frontend.
    - **Static Data**: Product data is served from a static JSON file (`products.json`).

## How to Run the Project

1. **Install Dependencies**:
   ```shell
   npm install
   ```
   This command will install dependencies for both the frontend and backend.

2. **Start the Development Server**:
   ```shell
   npm run dev
   ```
   This script starts both the frontend (Vite dev server) and the backend (Node.js server). The frontend will be accessible at a Vite-provided URL (usually `http://localhost:5173`), and the backend API will be running on `http://localhost:3001`.

## Dependencies

### Frontend (`frontend/package.json`)

- **`react`**, **`react-dom`**: Core React libraries.
- **`react-router-dom`**: For frontend routing.
- **`vite`**:  Build tool and development server.
- **`@vitejs/plugin-react`**: Vite plugin for React support.
- **`@types/react`**, **`@types/react-dom`**: TypeScript type definitions for React (for development).

### Backend (`backend/package.json`)

- **`express`**:  Node.js web application framework.
- **`cors`**: Middleware for enabling Cross-Origin Resource Sharing.
- **`nodemon`**: For development server with automatic restarts on code changes (dev dependency).

## Notes

- The project uses static JSON data for products. For a production application, a database would typically be used.
- The shopping cart functionality is very basic and only provides a preview. Full e-commerce features (payment processing, order management, etc.) are not implemented.
- The design is basic and can be further enhanced with more detailed styling and UI/UX improvements.
