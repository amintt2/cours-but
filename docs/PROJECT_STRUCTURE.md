# Project Structure

This Next.js project is organized to provide a clear separation of concerns and maintainable codebase.

## Directory Structure

```
├── docs/                   # Documentation files
├── public/                 # Static assets
├── src/                    # Source code
│   ├── app/                # Next.js App Router
│   │   ├── api/            # API routes
│   │   ├── globals.css     # Global styles
│   │   ├── layout.tsx      # Root layout
│   │   └── page.tsx        # Home page
│   ├── components/         # React components
│   │   └── ui/             # UI components (Button, Card, etc.)
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utility libraries
│   │   └── utils.ts        # Common utility functions
│   ├── styles/             # Additional styles
│   └── types/              # TypeScript type definitions
```

## Key Directories Explained

### `/src/app`

Contains the main application code using Next.js 14+ App Router. Each folder represents a route, and `page.tsx` files define the UI for each route.

- **`/api`**: Server-side API routes using Next.js Route Handlers.
- **`layout.tsx`**: The root layout that wraps all pages.
- **`page.tsx`**: The home page component.

### `/src/components`

Reusable React components organized by purpose:

- **`/ui`**: Fundamental UI components like Button, Card, Input, etc.

### `/src/hooks`

Custom React hooks that abstract complex logic:

- `useLocalStorage.ts`: A hook for managing local storage data.

### `/src/lib`

Utility functions and libraries:

- **`/utils.ts`**: Common utility functions like formatting, class name merging, etc.

### `/src/types`

TypeScript type definitions shared across the application.

## Backend Structure

API routes are organized in the `/src/app/api` directory following Next.js App Router conventions:

```
src/app/api/
├── hello/
│   └── route.ts
```

## Development Workflow

1. Run development server: `bun run dev`
2. Build for production: `bun run build`
3. Start production server: `bun run start`
4. Lint the codebase: `bun run lint`

## Bun Integration

This project is configured to use Bun for faster development and builds. Bun serves as both a JavaScript runtime and package manager, replacing Node.js and npm/yarn.

## Key Features

- **TypeScript**: Full type safety throughout the codebase
- **Tailwind CSS**: Utility-first CSS framework
- **Next.js**: React framework with built-in API routes
- **Bun**: Fast JavaScript runtime and package manager 