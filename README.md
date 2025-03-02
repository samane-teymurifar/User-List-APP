# Table of Contents

- [Overview](#overview)
- [Technologies](#technologies)
- [Folder Structure](#Folder-Structuring)
- [Getting Started](#getting-started)

## Overview

This is a simple test project where users can log in, view a list of users, and manage them. Users can add new users, edit existing ones, or delete them. The application is built with React, TypeScript, and Material UI to provide an intuitive user interface and smooth user experience.

## Technologies

- Node Version: [Node v22.3.0](https://nodejs.org)
- Language: [JavaSript](https://www.typescriptlang.org/)
- Framework: [React](https://reactjs.org/)
- CSS Framework: [Material UI](https://mui.com/)
  <!-- - Testing Library: [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) -->
  <!-- - Data Analysis Tools: [Sentry](https://docs.sentry.io/platforms/javascript/guides/react/), [Google Analytics](https://marketingplatform.google.com/about/analytics/) -->

## Folder Structuring

In this project we follow the folder structuring based on modular categories.

```bash
.
└── src/
    ├── auth/
    ├── components/
    │   │   └── component/
    │   │       ├── index.tsx
    │   │       ├── hooks.ts
    │   │       ├── index.test.ts
    │   │       ├── types.ts
    │   │       ├── constants.ts
    │   │       └── sub-components/
    │   │       │       └── my-sub-component/
    │   │       │            ├── index.tsx
    │   │       │            ├── hooks.ts
    │   │       │            ├── index.test.ts
    │   │       │            ├── types.ts
    │   │       │            └── constants.ts
    ├── pages/
    │   │   └── home-page/
    │   │   │   └── index.tsx/
        
```

## Getting Started

### First of all

Before you begin, ensure that you are on the `develop` branch. because all active development is done on the `develop` branch. You must use the following command:

```
git checkout -b develop origin/develop
```

### Prerequisite installation

If you have not installed pnpm in your system yet, run the following command:

```
npm install -g pnpm
```

### Install packages

After making sure that pnpm is installed on your system, you must install the packages with the following command:

```
pnpm install
```

### Run the project

To run the project, you must use the following command:

```
pnpm run start
```

### Build the project

To build the project, you must use the following command:

```
pnpm run build
```
