# Digital Wallet Frontend

This is the **frontend** of the Digital Wallet application, built with **React**, **TypeScript**, and **Tailwind CSS**. The application provides a user-friendly interface for our digital wallet application

## Live Deployment 

Live Deployment Link: https://digital-wallet-api-frontend.vercel.app/

## Features

- View a list of users with details like name, phone, role, and wallet balance
- Search users by name, phone
- Dropdown menus for selecting user roles or other options
- Responsive UI using shadcn


## Testing

Emails and Passwords given below for testing purpose:

#### Admin Role:

**phone:** 01766666666

**password:** ariF@321

#### Agent Role:

**phone:** 01512345607

**password:** asdF1234#

#### User Role:

**phone:** 01512345606

**password:** asdF1234#

## Stack

- **React**: Frontend library for building UI components
- **TypeScript**: Typed JavaScript for better developer experience
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: Headless UI components for React
- **RTK Query**: Data fetching and state management with Redux

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/digital-wallet-frontend.git
cd digital-wallet-frontend
```

## Install dependencies:

```bash
bun install
```

Create a .env file in the root directory with the following variables:

```
REACT_APP_API_URL=http://localhost:5000/api/v1
```

Start the development server:

```
bun run dev
```

The app should now be running at http://localhost:5137.