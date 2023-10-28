# Vite React Template

Welcome to the Vite React Template repository! This template helps you kickstart your React project using the Vite build tool. Whether you're a beginner or an experienced developer, this template is designed to make your development process more efficient and enjoyable.


## Features

- **React**: Use the popular and powerful React library for building your user interfaces.
- **Vite**: Harness the lightning-fast build tool for modern web development.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- [Node.js](https://nodejs.org/) installed on your machine.
- A package manager like [npm](https://www.npmjs.com/get-npm) or [Yarn](https://classic.yarnpkg.com/en/docs/install/).
- Familiarity with React and JavaScript.

## Getting Started

To get started with this template, follow these steps:

1. Click on Green `Use this template button` and select `Create a new repository`:
2. Give your repository a name
3. Clone the repository
```
git clone https://github.com/<your-user-name>/<your-repo-name>
```
4. Change directory to repository folder:
```
cd <your-cloned-repo-name>
```
5. Change directory to frontend folder and install dependencies:
```
cd frontend
npm i
```
6. Open another terminal, change directory to contract and install dependencies:
```
cd contract
npm i
```
7. To deploy contracts, navigate to contracts folder and run:
```
npm run deploy
```
8. After deploy of contract to run frontend in browser:
```
npm run dev
```
The frontend will automatically take up the contract address from `.env` file from contract folder and frontend will be visible at `http://localhost:5173/`(by default)

Happy Hacking!! 🚀