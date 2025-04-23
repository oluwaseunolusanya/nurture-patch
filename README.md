# Nurture Patch

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?logo=vercel)](https://nurturepatch.vercel.app/)
[![React](https://img.shields.io/badge/Frontend%20with-React-61DBFB?logo=react)](Library)


> Safe, caring, and fun childcare for school-age children.

---

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Getting Started](#getting-started)
- [Deployment](#deployment)
- [Folder Structure](#folder-structure)
- [Future Improvements](#future-improvements)
- [License](#license)

---

## Overview

**Nurture Patch** provides a responsive single-page application (SPA) to support childminders offering after-school and holiday childcare services.  

The platform emphasizes:
- Easy navigation
- Intuitive booking forms
- Clear service descriptions
- Mobile-first experience

Visit the live site: [www.nurturepatch.co.uk](https://www.nurturepatch.co.uk)

---

## Tech Stack

- **React** (Frontend)
- **Tailwind CSS** (Styling)
- **React Router DOM** (Routing)
- **EmailJS** (Form submission)

---

## Features

- Mobile-first, responsive design
- Seamless navigation across pages
- Booking form integrated with EmailJS (WIP)
- Contact form for inquiries
- Deployed with Vercel

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

```bash
git clone https://github.com/oluwaseunolusanya/nurture-patch.git
cd nurture-patch
npm install
```

### Running Locally
```bash
Copy code
npm run dev
```
The app will be available at http://localhost:5173.

---

## Deployment
Deployed via Vercel, connected to www.nurturepatch.co.uk.

You can deploy your own copy by:

 1. Forking this repository.

 2. Connecting your fork to Vercel.

 3. Setting up build commands (npm run build) and output directory (dist).


---

## Folder Structure
```cmd
nurture-patch/
├── public/               # Static files
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── Booking.jsx
│   │   ├── Contact.jsx
│   │   ├── Hero.jsx
│   │   └── Navbar.jsx
│   ├── pages/             # Page components
│   │   ├── About.jsx
│   │   └── Home.jsx
│   ├── App.jsx            # Main app layout
│   └── main.jsx           # Application entry point
├── index.html
├── package.json
├── vite.config.js
├── eslint.config.js
└── README.md
```

---

## Future Improvements
- Complete EmailJS integration for booking confirmation emails.

- Add a secure parent login portal.

- Improve SEO and web accessibility compliance.

---

## License
This project is licensed under the MIT License.
