# Modern React App Starter

A blazing-fast, modern React application starter template built with the latest tools and best practices. This is an excellent starting point for any modern React app, offering a superior alternative to Create React App with better performance, smaller bundle sizes, and faster build times.

## ✨ Features

- **React 19** - Latest React with all new features
- **TypeScript** - Full type safety out of the box
- **React Router v7** - Modern client-side routing
- **Rsbuild** - Lightning-fast build tool (Rust-based, faster than Webpack)
- **ESLint** - Code linting with TypeScript support
- **Prettier** - Code formatting
- **pnpm** - Fast, efficient package management
- **Hot Module Replacement** - Instant development feedback

## 🚀 Why This Over Create React App?

Create React App has become bloated and slow. This starter gives you:
- ⚡ **10x faster builds** with Rsbuild
- 📦 **Smaller bundle sizes** 
- 🔧 **Modern tooling** that's actively maintained
- 🎯 **Zero configuration** that just works
- 🛠️ **Easy to eject and customize**

## 🏁 Quick Start

```bash
# Clone this repository
git clone <your-repo-url>
cd your-project-name

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

Your app will be available at [http://localhost:3000](http://localhost:3000) with hot reloading.

## 📋 Available Scripts

```bash
# Development
pnpm dev              # Start dev server with hot reload

# Building
pnpm build            # Build for production
pnpm preview          # Preview production build locally

# Code Quality
pnpm lint             # Run ESLint
pnpm format           # Format code with Prettier
```

## 📁 Project Structure

```
src/
├── components/       # Reusable components
├── pages/           # Route components
├── App.tsx          # Main app component
└── index.tsx        # Entry point
```

## 🔧 Customization

This starter is intentionally minimal and easy to extend. Add your preferred:
- State management (Zustand, Redux Toolkit, etc.)
- UI library (Tailwind CSS, Chakra UI, Material-UI, etc.)
- Testing framework (Vitest, Jest, etc.)
- Additional tools as needed

## 🤝 Contributing

Feel free to submit issues and pull requests to improve this starter template.

## 📚 Learn More

- [Rsbuild Documentation](https://rsbuild.rs) - Modern build tool
- [React Documentation](https://react.dev) - Learn React
- [TypeScript Handbook](https://www.typescriptlang.org/docs/) - TypeScript guide
