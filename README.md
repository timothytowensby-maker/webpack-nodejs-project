# Webpack Node.js Project

A production-ready Node.js project built with webpack, TypeScript, and modern tooling.

## Features

- ✅ **Webpack 5** - Module bundling and optimization
- ✅ **TypeScript** - Type-safe development
- ✅ **Express.js** - Fast, unopinionated web framework
- ✅ **Jest** - Testing framework with coverage
- ✅ **ESLint** - Code linting and formatting
- ✅ **Babel** - JavaScript transpilation
- ✅ **Development Mode** - Fast rebuilds with watch mode
- ✅ **Production Optimized** - Minified bundles and source maps

## Quick Start

### Prerequisites
- Node.js 16+
- npm 7+

### Installation

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env
```

### Development

```bash
# Start webpack in watch mode (rebuilds on file changes)
npm run dev

# In another terminal, start the application
npm start
```

The application will be available at `http://localhost:3000`

### Production Build

```bash
# Build for production (minified, optimized)
npm run build

# Start production server
node dist/index.js
```

## Available Scripts

- `npm run dev` - Watch mode development build
- `npm run build` - Production build
- `npm start` - Run the bundled application
- `npm test` - Run tests
- `npm run test:watch` - Run tests in watch mode
- `npm run lint` - Lint and fix code

## Project Structure

```
├── src/                      # Source code
│   ├── index.ts             # Entry point
│   ├── server.ts            # Express server setup
│   ├── utils/               # Utility functions
│   ├── controllers/         # Request handlers
│   ├── routes/              # Route definitions
│   ├── middleware/          # Express middleware
│   └── __tests__/           # Unit tests
├── dist/                     # Compiled output (generated)
├── webpack.config.js         # Webpack configuration
├── tsconfig.json            # TypeScript configuration
├── jest.config.js           # Jest configuration
├── .eslintrc.json           # ESLint configuration
├── package.json             # Dependencies and scripts
└── README.md                # This file
```

## API Endpoints

### Health Check
```
GET /api/health
```
Response:
```json
{
  "status": "ok",
  "timestamp": "2024-01-15T10:30:00.000Z",
  "uptime": 123.456
}
```

### Math - Sum
```
GET /api/math/sum?a=10&b=20
```
Response:
```json
{
  "a": 10,
  "b": 20,
  "result": 30,
  "operation": "add"
}
```

### Greeting
```
GET /api/greet/john
```
Response:
```json
{
  "greeting": "Hello, John!"
}
```

## Webpack Configuration

The webpack configuration is optimized for:

- **TypeScript support** via ts-loader
- **JavaScript transpilation** via Babel
- **Node.js compatibility** with webpack target='node'
- **External dependencies** excluded from bundle (via webpack-node-externals)
- **Source maps** for debugging
- **Development and production modes**

## Development Workflow

1. Edit files in `src/`
2. Webpack automatically rebuilds on save (with `npm run dev`)
3. Restart your application to see changes
4. Use `npm test` to run tests during development

## Building for Production

```bash
# Create optimized production bundle
npm run build

# The dist/index.js is ready to deploy
node dist/index.js
```

## Testing

Tests are located in `src/__tests__/` directory:

```bash
# Run all tests
npm test

# Watch mode
npm run test:watch

# With coverage
npm test -- --coverage
```

## Code Quality

```bash
# Lint and fix code
npm run lint
```

## Environment Variables

Create a `.env` file based on `.env.example`:

```env
PORT=3000
NODE_ENV=development
```

## Technologies

- **Runtime**: Node.js
- **Bundler**: Webpack 5
- **Language**: TypeScript
- **Framework**: Express.js
- **Testing**: Jest
- **Linting**: ESLint
- **Transpiler**: Babel

## License

MIT
