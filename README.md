<<<<<<< HEAD
# 🌍 NEO Dashboard - React + TypeScript + TailwindCSS

## 🚀 Project Overview
**NEO Dashboard** is a web application that visualizes data about Near-Earth Objects (NEOs) using NASA's NeoWs API.  
The app provides an interactive interface with:
- A **chart view** to display the estimated diameters of NEOs.
- A **table view** to present detailed data in a structured format.
- Fully responsive design using **TailwindCSS** and **PrimeReact**.
- **CSV export** feature using **PapaParse**.
---

## 🛠️ Tech Stack
| Technology | Description |
|------------|-------------|
| **React** | Frontend framework |
| **TypeScript** | Type safety and better development experience |
| **PrimeReact** | UI library for table, pagination, and components |
| **TailwindCSS** | Utility-first CSS framework for styling |
| **PapaParse** | CSV parser for exporting data |
| **NASA NeoWs API** | External data source for NEO information |


---

## 🎯 Features
✅ Fetch NEO data from NASA's API.  
✅ Display data using **BarChart** (Recharts).  
✅ Switch between chart and table view. 
✅ Filter data based on orbital body.  
✅ Responsive layout with smooth height transitions.   
✅ Export data to CSV using **PapaParse**.
---


## 🚀 Getting Started

### **1. Clone the Repository**
```bash
git clone https://github.com/Medamin9/Neo-app-react-test-.git
cd neo-dashboard
```
### **2. Install Dependencies**
```bash
npm install
```

### **3. Start the Development Server**
```bash
npm run dev 
=======
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
>>>>>>> 191d2fb (Step 1 : Implemented data fetching and chart)
```
