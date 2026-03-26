# ShopZone - Week 10 E-Commerce Upgrade

This is a modern E-Commerce frontend application built with **Next.js**, **Tailwind CSS**, and **Redux Toolkit** to fulfill the requirements of the Week 10 Frontend specialization. The application demonstrates advanced global state management, render optimizations, and a clean, human-designed aesthetic.

[vercel live](https://shopzone-redux-eight.vercel.app/)

## Features

- **Global Store (Redux Toolkit)**: A centralized store handling complex cross-component data without prop-drilling.
- **Cart Management (Level 1)**: Integrated `cartSlice` to process adding and removing items from the shopping cart globally. The cart badge updates immediately across all screens.
- **Complex Active Filtering (Level 2)**: A functional sidebar leveraging a `filterSlice` to sort products instantly by Category and Maximum Price constraints.
- **Render Optimization (Level 3)**: Employs `useMemo` to prevent expensive re-calculations of the product grid unless specific dependency arrays strictly change, alongside `useCallback` to optimize interactive element handlers.
- **Dynamic Theming (Level 3)**: Administered completely through global state via the `themeSlice`. Features a clean Light Mode as default, with instant toggling to Dark Mode.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **State Management**: [Redux Toolkit (RTK)](https://redux-toolkit.js.org/) & `react-redux`
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to navigate the application.

## Redux DevTools Verification

To verify that the state is properly cascading globally, please install the [Redux DevTools extension](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd) in your browser. 
Once installed, open your browser's Developer Tools (F12) -> Redux tab to actively trace dispatched actions like `cart/addToCart`, `filter/setPriceRange`, and `theme/toggleTheme`.
