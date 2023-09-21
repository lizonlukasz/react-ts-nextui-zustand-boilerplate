## Project tech stack
- Vite - build tool + local development
- React - solid foundation for whole application
- Typescript - for type safety and better developer experience
- NextUi - bunch of great UI components on top of Tailwind
- Zustand - centralized state management
- Airbnb typescript eslint - to ensure best code quality and keep it clear

## Available Scripts

In the project directory, you can run:

### `yarn dev`
Runs the app in the development mode with mockserver.\
Open [http://localhost:3030](http://localhost:3030) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn preview`
starts local server and serve code from `dist` folder. To built application, you should  
run `yarn build` first

### `yarn lint`
Runs linter check using eslint configuration

### `yarn lint:fix`
Runs linter and fixes all issues that are possible to fix automatically

### `yarn test` TBA
Launches the test runner in the interactive watch mode.\

### `yarn build`
Builds the app for production to the `dist` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list


======

# Vite React TS Tailwind Boilerplate

This project is a bootstrap for frontend application with React + TS + Tailwind, running on Vite
