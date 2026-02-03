# React App powered by Vite

This project is bootstrapped using Vite to create a fast and lightweight React development setup with Hot Module Replacement (HMR) and basic linting support.

The configuration is optimized for quick development, clean structure, and efficient builds.

## React Fast Refresh Support

Vite allows React Fast Refresh through two commonly used plugins:

- `@vitejs/plugin-react` — Uses Babel (or oxc with rolldown) to enable fast refresh during development.
- `@vitejs/plugin-react-swc` — Uses SWC for faster compilation and refresh performance.

You can choose either based on your performance and tooling preference.

## About React Compiler

The React Compiler is not enabled by default in this setup due to its effect on development and build speed. If needed, it can be integrated later by following the official React documentation.

## Linting and Code Quality

This setup includes basic ESLint rules for maintaining code quality. For larger or production-level applications, it is recommended to integrate TypeScript along with type-aware linting using `typescript-eslint`.

Refer to Vite's React TypeScript template for guidance on extending this configuration.
