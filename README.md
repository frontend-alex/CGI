# MonoMERN Stack Boilerplate

A production-ready MERN stack boilerplate with TypeScript, authentication, and modern development tools.

<div align="center">
  <h3>Frontend Technologies</h3>
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" alt="React Router" />
  <img src="https://img.shields.io/badge/TanStack_Query-FF4154?style=for-the-badge&logo=react-query&logoColor=white" alt="TanStack Query" />
  <img src="https://img.shields.io/badge/React_Hook_Form-EC5990?style=for-the-badge&logo=react-hook-form&logoColor=white" alt="React Hook Form" />
  <img src="https://img.shields.io/badge/Zod-3E67B1?style=for-the-badge&logo=zod&logoColor=white" alt="Zod" />
</div>

<div align="center">
  <h3>Backend Technologies</h3>
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge" alt="Express.js" />
  <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
  <img src="https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white" alt="Mongoose" />
  <img src="https://img.shields.io/badge/Passport.js-34E27A?style=for-the-badge&logo=passport&logoColor=white" alt="Passport.js" />
  <img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=json-web-tokens&logoColor=white" alt="JWT" />
  <img src="https://img.shields.io/badge/Bcrypt-00A8CC?style=for-the-badge&logo=bcrypt&logoColor=white" alt="Bcrypt" />
  <img src="https://img.shields.io/badge/Nodemailer-339933?style=for-the-badge&logo=nodemailer&logoColor=white" alt="Nodemailer" />
  <img src="https://img.shields.io/badge/Winston-FF6B6B?style=for-the-badge&logo=winston&logoColor=white" alt="Winston" />
</div>

<div align="center">
  <h3>Development Tools</h3>
  <img src="https://img.shields.io/badge/PNPM-F69220?style=for-the-badge&logo=pnpm&logoColor=white" alt="PNPM" />
  <img src="https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white" alt="ESLint" />
  <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker" />
  <img src="https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white" alt="Jest" />
</div>

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Step-by-Step Installation](#step-by-step-installation)
- [Environment Configuration](#environment-configuration)
- [Project Structure Explained](#project-structure-explained)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Development Commands](#development-commands)
- [Troubleshooting](#troubleshooting)

## Overview

This boilerplate provides a complete foundation for building modern web applications using MongoDB, Express.js, React, and Node.js with TypeScript for type safety and comprehensive authentication.

## Features

- ✅ Complete authentication system with JWT and OAuth providers
- ✅ Modern React frontend with TypeScript and Tailwind CSS
- ✅ Express.js backend with RESTful API and comprehensive middleware
- ✅ MongoDB integration with Mongoose ODM
- ✅ Monorepo structure with shared packages using PNPM workspaces
- ✅ Docker support for development and production
- ✅ Security-first approach with proper middleware
- ✅ Email system for notifications and verification
- ✅ OTP-based email verification and password reset
- ✅ Comprehensive error handling and logging with Winston

## Prerequisites

Before you begin, ensure you have the following installed on your system:

### Required Software

1. **Node.js** (v18 or higher)
   - Download from: https://nodejs.org/
   - Verify installation: `node --version`

2. **PNPM** (v8 or higher)
   - Install globally: `npm install -g pnpm`
   - Verify installation: `pnpm --version`

3. **MongoDB** (v6 or higher)
   - **Option A - Local Installation:**
     - Download from: https://www.mongodb.com/try/download/community
     - Start MongoDB service: `mongod`
   - **Option B - MongoDB Atlas (Cloud):**
     - Create free account at: https://www.mongodb.com/cloud/atlas
     - Create a cluster and get connection string

4. **Git**
   - Download from: https://git-scm.com/
   - Verify installation: `git --version`

### Optional Software

5. **Docker** (for containerized development)
   - Download from: https://www.docker.com/products/docker-desktop
   - Verify installation: `docker --version`

## Step-by-Step Installation

Follow these steps carefully to set up the project on your local machine:

### Step 1: Clone the Repository

```bash
# Clone the repository
git clone <repository-url>

# Navigate to the project directory
cd CGI
```

### Step 2: Install Dependencies

This project uses PNPM workspaces to manage a monorepo structure. Install all dependencies with a single command:

```bash
# Install all dependencies for all workspaces (client, server, shared packages)
pnpm install
```

**What happens here:**
- PNPM reads `pnpm-workspace.yaml` which defines workspaces: `app/*` and `packages/*`
- Dependencies are installed for:
  - Root workspace (testing tools, shared dev dependencies)
  - `app/client` (React frontend)
  - `app/server` (Express backend)
  - `packages/shared` (shared TypeScript types and utilities)
  - `site` (Next.js documentation site)

### Step 3: Set Up Environment Variables

The project includes a convenient script to copy environment templates:

```bash
# Copy .env.example files to .env for all workspaces
pnpm run cp:env
```

**What this script does:**
- Copies `app/server/.env.example` → `app/server/.env`
- Copies `app/client/.env.example` → `app/client/.env`
- Copies `site/.env.example` → `site/.env` (if exists)

You should see output like:
```
Environment files created successfully!
Server .env: app/server/.env
Client .env: app/client/.env
Site .env: site/.env
Remember to update the values in your .env files as needed!
```

### Step 4: Configure Server Environment Variables

Open `app/server/.env` in your text editor and configure the following **required** variables:

#### 4.1 Database Configuration

Choose **ONE** of the following options:

**Option A - Local MongoDB:**
```env
DB_LOCAL_URI=mongodb://localhost:27017/mern-boilerplate
DB_ATLAS_URI=
```

**Option B - MongoDB Atlas (Cloud):**
```env
DB_LOCAL_URI=
DB_ATLAS_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/mern-boilerplate?retryWrites=true&w=majority
```

Replace `<username>`, `<password>`, and cluster details with your MongoDB Atlas credentials.

#### 4.2 JWT Secrets (REQUIRED)

Generate secure random strings for JWT tokens:

```env
# Generate using: node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
JWT_SECRET=your-super-secret-jwt-key-min-32-characters-long
JWT_REFRESH_SECRET=your-super-secret-refresh-key-min-32-characters-long
```

**How to generate secure secrets:**
```bash
# Run this command twice to generate two different secrets
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

#### 4.3 Application Settings

```env
NODE_ENV=development
PORT=3000
HOST=0.0.0.0
CORS_ORIGINS=http://localhost:5173
```

#### 4.4 Email Configuration (Optional - for OTP functionality)

To enable email verification and password reset:

```env
OTP_EMAIL=your-email@gmail.com
OTP_EMAIL_PASSWORD=your-app-specific-password
OTP_EMAIL_SERVICE=gmail
```

**For Gmail users:**
1. Enable 2-factor authentication on your Google account
2. Generate an App Password: https://myaccount.google.com/apppasswords
3. Use the 16-character app password (not your regular password)

#### 4.5 OAuth Providers (Optional)

Configure any OAuth providers you want to use:

**Google OAuth:**
```env
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

**GitHub OAuth:**
```env
GITHUB_CLIENT_ID=your-github-client-id
GITHUB_CLIENT_SECRET=your-github-client-secret
```

**Facebook OAuth:**
```env
FACEBOOK_CLIENT_ID=your-facebook-app-id
FACEBOOK_CLIENT_SECRET=your-facebook-app-secret
```

### Step 5: Configure Client Environment Variables

Open `app/client/.env` and verify/update:

```env
VITE_NODE_ENV=development
VITE_API_URL=http://localhost:3000/api/v1
VITE_SITE_URL=http://localhost:3000
```

**Important:** The `VITE_API_URL` should match your server's PORT (default: 3000).

### Step 6: Start MongoDB

If using local MongoDB, ensure it's running:

**Windows:**
```bash
# Start MongoDB service
net start MongoDB
```

**macOS/Linux:**
```bash
# Start MongoDB daemon
mongod
```

**Verify MongoDB is running:**
```bash
mongosh --eval "db.adminCommand('ping')"
```

### Step 7: Start Development Servers

Start all development servers concurrently:

```bash
# Start both client and server in development mode
pnpm run dev
```

**What happens:**
- Turbo runs the `dev` script for all workspaces
- **Server** (app/server):
  - TypeScript compiler watches for changes (`tsc --watch`)
  - Email templates are copied to build directory
  - Nodemon restarts server on file changes
  - Server starts on http://localhost:3000
- **Client** (app/client):
  - Vite dev server starts
  - Hot Module Replacement (HMR) enabled
  - Client starts on http://localhost:5173

**You should see output like:**
```
client:dev: VITE v7.0.0  ready in 500 ms
client:dev: ➜  Local:   http://localhost:5173/
server:dev: [nodemon] starting `node build/index.js`
server:dev: Server running on http://localhost:3000
server:dev: MongoDB connected successfully
```

### Step 8: Verify Installation

1. **Open your browser:**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:3000/api/v1

2. **Test the application:**
   - Try registering a new user
   - Check if you receive OTP email (if configured)
   - Test login functionality

## Environment Configuration

### Server Environment Variables Explained

| Variable | Required | Description | Example |
|----------|----------|-------------|---------|
| `NODE_ENV` | ✅ | Environment mode | `development` or `production` |
| `PORT` | ✅ | Server port | `3000` |
| `HOST` | ✅ | Server host | `0.0.0.0` |
| `DB_LOCAL_URI` | ✅* | Local MongoDB connection | `mongodb://localhost:27017/dbname` |
| `DB_ATLAS_URI` | ✅* | MongoDB Atlas connection | `mongodb+srv://...` |
| `JWT_SECRET` | ✅ | JWT signing secret (min 32 chars) | Generated random string |
| `JWT_REFRESH_SECRET` | ✅ | Refresh token secret | Generated random string |
| `JWT_EXPIRATION` | ❌ | Access token expiration | `1h` (default) |
| `CORS_ORIGINS` | ✅ | Allowed frontend URLs | `http://localhost:5173` |
| `OTP_EMAIL` | ❌ | Email for sending OTPs | `your-email@gmail.com` |
| `OTP_EMAIL_PASSWORD` | ❌ | Email password/app password | App-specific password |
| `OTP_EMAIL_SERVICE` | ❌ | Email service provider | `gmail`, `outlook`, etc. |
| `GOOGLE_CLIENT_ID` | ❌ | Google OAuth client ID | From Google Console |
| `GOOGLE_CLIENT_SECRET` | ❌ | Google OAuth secret | From Google Console |
| `GITHUB_CLIENT_ID` | ❌ | GitHub OAuth client ID | From GitHub Settings |
| `GITHUB_CLIENT_SECRET` | ❌ | GitHub OAuth secret | From GitHub Settings |
| `FACEBOOK_CLIENT_ID` | ❌ | Facebook OAuth app ID | From Facebook Developers |
| `FACEBOOK_CLIENT_SECRET` | ❌ | Facebook OAuth secret | From Facebook Developers |
| `SESSION_SECRET` | ✅ | Express session secret | Generated random string |
| `RATE_LIMIT_WINDOW_MS` | ❌ | Rate limit window | `900000` (15 min) |
| `RATE_LIMIT_MAX` | ❌ | Max requests per window | `100` |

*Either `DB_LOCAL_URI` or `DB_ATLAS_URI` is required, not both.

### Client Environment Variables Explained

| Variable | Required | Description | Example |
|----------|----------|-------------|---------|
| `VITE_NODE_ENV` | ✅ | Environment mode | `development` |
| `VITE_API_URL` | ✅ | Backend API base URL | `http://localhost:3000/api/v1` |
| `VITE_SITE_URL` | ✅ | Frontend site URL | `http://localhost:3000` |

## Project Structure Explained

```
CGI/
├── app/                          # Application workspaces
│   ├── client/                   # React Frontend (Vite + TypeScript)
│   │   ├── src/
│   │   │   ├── api/             # API client and axios configuration
│   │   │   ├── components/      # Reusable React components
│   │   │   │   ├── ui/         # shadcn/ui components
│   │   │   │   └── ...         # Feature components
│   │   │   ├── hooks/          # Custom React hooks
│   │   │   ├── lib/            # Utility functions
│   │   │   ├── pages/          # Page components (routes)
│   │   │   ├── routes/         # React Router configuration
│   │   │   ├── schemas/        # Zod validation schemas
│   │   │   ├── types/          # TypeScript type definitions
│   │   │   ├── App.tsx         # Root App component
│   │   │   └── main.tsx        # Application entry point
│   │   ├── public/             # Static assets
│   │   ├── .env.example        # Client environment template
│   │   ├── package.json        # Client dependencies
│   │   ├── vite.config.ts      # Vite configuration
│   │   └── tsconfig.json       # TypeScript configuration
│   │
│   └── server/                  # Express Backend (Node.js + TypeScript)
│       ├── src/
│       │   ├── api/            # API routes and controllers
│       │   │   ├── controllers/ # Request handlers
│       │   │   ├── middlewares/ # Custom middleware
│       │   │   └── routes/     # Route definitions
│       │   ├── config/         # Configuration files
│       │   │   ├── database.ts # MongoDB connection
│       │   │   ├── env.ts      # Environment validation
│       │   │   └── passport.ts # Passport.js strategies
│       │   ├── core/           # Business logic
│       │   │   ├── entities/   # Domain models
│       │   │   ├── repositories/ # Data access layer
│       │   │   ├── services/   # Business services
│       │   │   └── usecases/   # Application use cases
│       │   ├── infrastructure/ # External services
│       │   │   ├── email/      # Email service (Nodemailer)
│       │   │   │   └── templates/ # Email HTML templates
│       │   │   ├── logging/    # Winston logger
│       │   │   └── security/   # Security utilities
│       │   ├── shared/         # Shared utilities
│       │   │   ├── constants/  # Application constants
│       │   │   ├── errors/     # Custom error classes
│       │   │   └── utils/      # Helper functions
│       │   ├── app.ts          # Express app configuration
│       │   └── index.ts        # Server entry point
│       ├── build/              # Compiled JavaScript (generated)
│       ├── .env.example        # Server environment template
│       ├── package.json        # Server dependencies
│       └── tsconfig.json       # TypeScript configuration
│
├── packages/                    # Shared packages
│   └── shared/                 # Shared TypeScript types
│       ├── src/
│       │   ├── types/          # Shared type definitions
│       │   └── index.ts        # Package entry point
│       ├── build/              # Compiled types (generated)
│       ├── package.json        # Package configuration
│       └── tsconfig.json       # TypeScript configuration
│
├── site/                        # Next.js Documentation Site
│   ├── app/                    # Next.js app directory
│   ├── components/             # Site components
│   ├── public/                 # Static assets
│   └── package.json            # Site dependencies
│
├── scripts/                     # Development scripts
│   └── setup-env.js            # Environment setup script
│
├── tests/                       # Test files
│   ├── integration/            # Integration tests
│   └── unit/                   # Unit tests
│
├── .gitignore                   # Git ignore rules
├── package.json                 # Root package (workspace config)
├── pnpm-workspace.yaml          # PNPM workspace definition
├── turbo.json                   # Turborepo configuration
├── vitest.config.mjs            # Vitest test configuration
└── README.md                    # This file
```

### Key Files Explained

#### Root Level

- **`package.json`**: Defines workspace structure and root-level scripts
- **`pnpm-workspace.yaml`**: Configures PNPM workspaces (`app/*`, `packages/*`)
- **`turbo.json`**: Turborepo configuration for parallel task execution
- **`vitest.config.mjs`**: Testing framework configuration

#### Server (`app/server`)

- **`src/app.ts`**: Express application setup with middleware
  - CORS configuration
  - Security middleware (Helmet, HPP, rate limiting)
  - Body parsers
  - Session management
  - Passport.js initialization
  - Route mounting
  - Error handling

- **`src/index.ts`**: Server entry point
  - Database connection
  - Server startup
  - Graceful shutdown handling

- **`src/config/database.ts`**: MongoDB connection logic
  - Mongoose configuration
  - Connection retry logic
  - Connection event handlers

- **`src/config/passport.ts`**: Authentication strategies
  - JWT strategy
  - Google OAuth strategy
  - GitHub OAuth strategy
  - Facebook OAuth strategy

- **`src/api/routes/`**: API route definitions
  - `auth.routes.ts`: Authentication endpoints
  - `user.routes.ts`: User management endpoints

- **`src/api/controllers/`**: Request handlers
  - `auth.controller.ts`: Login, register, OTP verification
  - `user.controller.ts`: Profile management

- **`src/core/services/`**: Business logic
  - `auth.service.ts`: Authentication logic
  - `user.service.ts`: User operations
  - `otp.service.ts`: OTP generation and verification

- **`src/infrastructure/email/`**: Email functionality
  - `email.service.ts`: Nodemailer configuration
  - `templates/auth/otp.html`: OTP email template
  - `templates/auth/reset-password.html`: Password reset template

#### Client (`app/client`)

- **`src/main.tsx`**: Application entry point
  - React DOM rendering
  - Router provider
  - Query client provider

- **`src/App.tsx`**: Root component
  - Route configuration
  - Global providers

- **`src/routes/`**: React Router configuration
  - Route definitions
  - Protected routes
  - Public routes

- **`src/api/`**: API client
  - Axios instance configuration
  - Request/response interceptors
  - API endpoint functions

- **`src/components/ui/`**: shadcn/ui components
  - Button, Input, Dialog, etc.
  - Reusable UI primitives

- **`src/pages/`**: Page components
  - `Login.tsx`: Login page
  - `Register.tsx`: Registration page
  - `Dashboard.tsx`: User dashboard
  - `Profile.tsx`: User profile

- **`src/schemas/`**: Zod validation schemas
  - Form validation
  - Type-safe data validation

#### Shared Package (`packages/shared`)

- **`src/types/`**: Shared TypeScript types
  - User types
  - API response types
  - Common interfaces

## Running the Application

### Development Mode

Start all services in development mode with hot-reloading:

```bash
# Start everything (recommended)
pnpm run dev

# Or start individual services:
pnpm run dev --filter client    # Client only
pnpm run dev --filter server    # Server only
```

### Production Build

Build all packages for production:

```bash
# Build all workspaces
pnpm run build

# Build specific workspace
pnpm run build --filter server
pnpm run build --filter client
```

### Production Mode

Start the production server:

```bash
# Build first
pnpm run build

# Start production server
pnpm run start
```

### Email Template Management

Email templates must be copied to the build directory for OTP functionality:

```bash
# Copy email templates (automatically done during dev)
pnpm run copy-templates --filter server
```

**Template locations:**
- Source: `app/server/src/infrastructure/email/templates/`
- Build: `app/server/build/infrastructure/email/templates/`

Templates include:
- `auth/otp.html`: Email verification OTP
- `auth/reset-password.html`: Password reset email

## API Endpoints

### Authentication Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/api/v1/auth/register` | Register new user | ❌ |
| POST | `/api/v1/auth/login` | User login | ❌ |
| POST | `/api/v1/auth/logout` | User logout | ✅ |
| POST | `/api/v1/auth/refresh` | Refresh access token | ❌ |
| POST | `/api/v1/auth/verify-email` | Verify email with OTP | ❌ |
| POST | `/api/v1/auth/forgot-password` | Request password reset | ❌ |
| POST | `/api/v1/auth/reset-password` | Reset password with OTP | ❌ |

### OAuth Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/v1/auth/google` | Initiate Google OAuth |
| GET | `/api/v1/auth/google/callback` | Google OAuth callback |
| GET | `/api/v1/auth/github` | Initiate GitHub OAuth |
| GET | `/api/v1/auth/github/callback` | GitHub OAuth callback |
| GET | `/api/v1/auth/facebook` | Initiate Facebook OAuth |
| GET | `/api/v1/auth/facebook/callback` | Facebook OAuth callback |

### User Management Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/api/v1/users/profile` | Get user profile | ✅ |
| PUT | `/api/v1/users/profile` | Update user profile | ✅ |
| PUT | `/api/v1/users/password` | Change password | ✅ |
| DELETE | `/api/v1/users/account` | Delete user account | ✅ |

## Development Commands

### Package Management

```bash
# Install all dependencies
pnpm install

# Add dependency to specific workspace
pnpm add <package> --filter client
pnpm add <package> --filter server
pnpm add <package> --filter shared

# Add dev dependency
pnpm add -D <package> --filter client

# Remove dependency
pnpm remove <package> --filter client
```

### Development

```bash
# Start all development servers
pnpm run dev

# Start specific workspace
pnpm run dev --filter client
pnpm run dev --filter server

# Build all packages
pnpm run build

# Build specific package
pnpm run build --filter server

# Lint all packages
pnpm run lint

# Lint specific package
pnpm run lint --filter client
```

### Testing

```bash
# Run all tests
pnpm run test

# Run tests with UI
pnpm run test:ui

# Run tests with coverage
pnpm run test:coverage

# Watch mode
pnpm run test:watch
```

### Environment Setup

```bash
# Copy environment templates
pnpm run cp:env

# This creates:
# - app/server/.env (from .env.example)
# - app/client/.env (from .env.example)
# - site/.env (from .env.example)
```

### Docker Commands

```bash
# Start development with Docker
pnpm run docker:dev

# Stop development environment
pnpm run docker:dev:down

# Build Docker images
pnpm run docker:build

# Start production containers
pnpm run docker:up

# Stop all containers
pnpm run docker:down

# View container logs
pnpm run docker:logs

# Clean up Docker resources
pnpm run docker:cleanup
```

## Database Schema

### User Model

```typescript
{
  _id: ObjectId,              // Unique identifier
  username: string,           // Unique username
  email: string,              // Unique email address
  password: string,           // Hashed password (bcrypt)
  emailVerified: boolean,     // Email verification status
  providers: {                // OAuth provider IDs
    google?: string,
    github?: string,
    facebook?: string
  },
  profile: {                  // User profile information
    firstName?: string,
    lastName?: string,
    avatar?: string,
    bio?: string
  },
  createdAt: Date,           // Account creation date
  updatedAt: Date            // Last update date
}
```

### OTP Model

```typescript
{
  _id: ObjectId,             // Unique identifier
  email: string,             // User email
  code: string,              // Hashed verification code
  type: string,              // 'email_verification' | 'password_reset'
  expiresAt: Date,           // Expiration timestamp (10 minutes)
  used: boolean,             // Usage status
  createdAt: Date            // Creation timestamp
}
```

## Authentication Flow

### JWT Authentication

1. **Registration/Login:**
   - User submits credentials
   - Server validates and hashes password
   - Server generates JWT access token (15 min expiry)
   - Server generates refresh token (7 days expiry)
   - Tokens returned to client

2. **API Requests:**
   - Client sends access token in Authorization header
   - Server validates token
   - Request processed if valid

3. **Token Refresh:**
   - When access token expires, client uses refresh token
   - Server validates refresh token
   - New access token generated and returned

### OAuth Flow

1. User clicks "Login with Google/GitHub/Facebook"
2. Redirected to OAuth provider
3. User authorizes application
4. Provider redirects back with authorization code
5. Server exchanges code for user profile
6. Server creates/links account
7. JWT tokens generated and returned

## Troubleshooting

### MongoDB Connection Issues

**Problem:** Cannot connect to MongoDB

**Solutions:**

1. **Check if MongoDB is running:**
   ```bash
   # Windows
   net start MongoDB
   
   # macOS/Linux
   sudo systemctl status mongod
   ```

2. **Verify connection string:**
   - Local: `mongodb://localhost:27017/dbname`
   - Atlas: Check username, password, and cluster URL

3. **Check MongoDB logs:**
   ```bash
   # Linux
   sudo journalctl -u mongod
   
   # macOS
   tail -f /usr/local/var/log/mongodb/mongo.log
   ```

### Port Already in Use

**Problem:** Error: Port 3000 or 5173 already in use

**Solutions:**

1. **Find process using port:**
   ```bash
   # Windows
   netstat -ano | findstr :3000
   
   # macOS/Linux
   lsof -i :3000
   ```

2. **Kill process:**
   ```bash
   # Windows
   taskkill /PID <PID> /F
   
   # macOS/Linux
   kill -9 <PID>
   ```

3. **Use different port:**
   ```bash
   # In app/server/.env
   PORT=3001
   
   # In app/client/.env
   VITE_API_URL=http://localhost:3001/api/v1
   ```

### Email/OTP Not Working

**Problem:** OTP emails not being sent

**Solutions:**

1. **Verify email configuration in `app/server/.env`:**
   ```env
   OTP_EMAIL=your-email@gmail.com
   OTP_EMAIL_PASSWORD=app-specific-password
   OTP_EMAIL_SERVICE=gmail
   ```

2. **For Gmail, use App Password:**
   - Enable 2FA on Google account
   - Generate App Password: https://myaccount.google.com/apppasswords
   - Use 16-character password (not regular password)

3. **Ensure email templates are copied:**
   ```bash
   pnpm run copy-templates --filter server
   ```

4. **Check template paths exist:**
   - `app/server/build/infrastructure/email/templates/auth/otp.html`
   - `app/server/build/infrastructure/email/templates/auth/reset-password.html`

### Environment Variables Not Loading

**Problem:** Environment variables are undefined

**Solutions:**

1. **Verify .env files exist:**
   ```bash
   # Should show .env files
   ls -la app/server/.env
   ls -la app/client/.env
   ```

2. **Re-run environment setup:**
   ```bash
   pnpm run cp:env
   ```

3. **Check variable names:**
   - Server: Use directly (`process.env.JWT_SECRET`)
   - Client: Must prefix with `VITE_` (`import.meta.env.VITE_API_URL`)

4. **Restart development servers:**
   ```bash
   # Stop servers (Ctrl+C)
   # Restart
   pnpm run dev
   ```

### Build Errors

**Problem:** TypeScript compilation errors

**Solutions:**

1. **Clean build directories:**
   ```bash
   # Remove build folders
   rm -rf app/server/build
   rm -rf app/client/dist
   rm -rf packages/shared/build
   ```

2. **Reinstall dependencies:**
   ```bash
   # Remove node_modules and lockfile
   rm -rf node_modules app/*/node_modules packages/*/node_modules
   rm pnpm-lock.yaml
   
   # Reinstall
   pnpm install
   ```

3. **Check TypeScript version:**
   ```bash
   pnpm list typescript
   ```

### PNPM Workspace Issues

**Problem:** Workspace dependencies not resolving

**Solutions:**

1. **Verify workspace configuration:**
   ```yaml
   # pnpm-workspace.yaml should contain:
   packages:
     - 'app/*'
     - 'packages/*'
   ```

2. **Reinstall with proper workspace linking:**
   ```bash
   pnpm install --force
   ```

### Docker Issues

**Problem:** Docker containers not starting

**Solutions:**

1. **Clean up Docker resources:**
   ```bash
   docker system prune -a
   ```

2. **Rebuild containers:**
   ```bash
   pnpm run docker:build --no-cache
   ```

3. **Check container logs:**
   ```bash
   docker logs <container-name>
   ```

## Future Database Support

**Coming Soon:** Multi-database support to give developers flexibility in choosing their preferred database solution.

### Planned Database Support
- **PostgreSQL** - Full relational database support with Prisma ORM
- **MySQL** - Alternative relational database option
- **MongoDB** - Current NoSQL database (already supported)
- **SQLite** - Lightweight option for development and small applications

### Benefits
- **Database Agnostic** - Choose the database that best fits your project requirements
- **Easy Migration** - Switch between databases with minimal code changes
- **Flexible Architecture** - Support both relational and non-relational data models
- **Production Ready** - Each database option will include optimized configurations and best practices

## License

This project is licensed under the MIT License.

---

## Quick Reference

### Access URLs
- **Frontend:** http://localhost:5173
- **Backend API:** http://localhost:3000/api/v1
- **API Docs:** http://localhost:3000/api-docs (if configured)

### Default Ports
- Client (Vite): `5173`
- Server (Express): `3000`
- MongoDB: `27017`

### Important Commands
```bash
pnpm install          # Install dependencies
pnpm run cp:env       # Setup environment files
pnpm run dev          # Start development
pnpm run build        # Build for production
pnpm run test         # Run tests
```

### Support
For issues and questions:
- Check the [Troubleshooting](#troubleshooting) section
- Review environment configuration
- Check server and client logs
- Ensure MongoDB is running
- Verify all required environment variables are set
