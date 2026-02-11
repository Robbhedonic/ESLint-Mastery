# ESLint Mastery

![ESLint Logo](https://raw.githubusercontent.com/eslint/eslint/main/resources/logo.png)

## Description

This project is designed to **learn and master ESLint with TypeScript** using a modern workflow with the new flat config system from ESLint 9.  
It includes:

- ESLint configuration for TypeScript  
- Basic linting rules (`semi`, `quotes`) and recommended ESLint and TypeScript rules  
- Project structure ready for practicing tasks by levels

---

## Technologies and Dependencies

| Package                          | Installed Version | Description |
|---------------------------------|-----------------|------------|
| `eslint`                         | 9.x             | Tool to identify and report problematic patterns in code |
| `typescript`                     | 5.x             | JavaScript superset that adds static typing |
| `ts-node`                        | Latest          | Runs TypeScript files directly |
| `@typescript-eslint/parser`      | Latest          | ESLint parser that understands TypeScript |
| `@typescript-eslint/eslint-plugin` | Latest       | Set of ESLint rules for TypeScript |
| `jiti`                            | Latest         | Allows importing ESM modules in Node.js |

---

## Scripts

The `package.json` includes the following scripts:

- **`lint`**: Run ESLint on the project  
- **`lint:fix`**: Run ESLint and automatically fix issues

```json
"scripts": {
  "lint": "eslint .",
  "lint:fix": "eslint . --fix"
}
ESLint-Mastery/
├─ src/
│  └─ index.ts
├─ eslint.config.mts
├─ package.json
├─ package-lock.json
└─ node_modules/

## How to Run

git clone https://github.com/Robbhedonic/ESLint-Mastery.git

cd ESLint-Mastery

npm install

npm run lint:fix
