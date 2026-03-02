# AGENTS.md - Developer Guidelines

This repository contains a React + Vite frontend (`portfolio/`) and a Sanity CMS backend (`studio-my-portfolio/`).

## Project Structure

```
my-portfolio/
├── portfolio/                 # React + Vite frontend
│   ├── src/
│   │   ├── app/              # Page components and layouts
│   │   ├── components/       # Reusable React components
│   │   │   └── ui/           # Shadcn/UI components
│   │   └── lib/              # Utilities and clients
│   ├── package.json
│   └── vite.config.ts
├── studio-my-portfolio/       # Sanity CMS
│   ├── schemaTypes/          # Content schemas
│   ├── package.json
│   └── sanity.config.ts
└── README.md
```

## Commands

### Frontend (portfolio/)

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server |
| `npm run build` | Type-check and build for production |
| `npm run lint` | Run ESLint |
| `npm run preview` | Preview production build |

### Backend (studio-my-portfolio/)

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Sanity dev server |
| `npm run start` | Start Sanity Studio |
| `npm run build` | Build Sanity Studio |
| `npm run deploy` | Deploy to Sanity |

## Code Style Guidelines

### General Principles

- **Keep files under 300 lines** - Split larger components
- **Use functional components** with hooks, no class components
- **Prefer explicit exports** over default exports for better refactoring
- **Avoid `any`** - Use proper types or `unknown` when necessary

### Imports

```typescript
// React core
import { useState, useEffect } from 'react'

// External libraries
import { createClient } from '@sanity/client'
import { cn } from '@/lib/utils'

// Local components (use path aliases)
import Navbar from '@/components/navbar/navbar'

// Types
import type { Project } from '@/types'
```

- Use path aliases: `@/` maps to `src/`
- Group imports: external → internal → types
- Sort alphabetically within groups

### TypeScript

- **Always type function parameters and return values**
- Use `interface` for object shapes, `type` for unions/aliases
- Prefer explicit types over type inference for function signatures

```typescript
// Good
function getProject(id: string): Promise<Project | null> {
  // ...
}

// Avoid
function getProject(id) {
  // ...
}
```

### Naming Conventions

| Element | Convention | Example |
|---------|------------|---------|
| Components | PascalCase | `Navbar.tsx`, `ThemeProvider.tsx` |
| Files (utilities) | kebab-case | `sanity.client.ts`, `utils.ts` |
| Functions | camelCase | `getProjects()`, `formatDate()` |
| Constants | PascalCase | `MAX_RETRIES`, `API_VERSION` |
| Types/Interfaces | PascalCase | `Project`, `Resume` |

### React Patterns

- Extract reusable logic into custom hooks
- Keep components focused (single responsibility)
- Use `cn()` from `@/lib/utils` for conditional class merging

```typescript
import { cn } from '@/lib/utils'

function Button({ className, variant, ...props }: ButtonProps) {
  return (
    <button className={cn('base-styles', variant === 'primary' && 'primary', className)}>
      {props.children}
    </button>
  )
}
```

### Error Handling

- Use try/catch for async operations
- Provide user-friendly error messages
- Log errors appropriately for debugging

```typescript
async function fetchData() {
  try {
    const data = await client.fetch(query)
    return data
  } catch (error) {
    console.error('Failed to fetch data:', error)
    throw new Error('Unable to load projects')
  }
}
```

### Tailwind CSS

- Use Tailwind utility classes in components
- Use `cn()` for conditional classes
- Avoid inline styles

### Sanity Schemas

- Use `defineField`, `defineType`, `defineArrayMember` helpers
- Add titles and descriptions for CMS users
- Reference other document types with `to: [{type: 'skill'}]`

```typescript
defineField({
  name: 'skills',
  title: 'Skills Used',
  type: 'array',
  of: [defineArrayMember({ type: 'reference', to: [{ type: 'skill' }] })],
})
```

### Git Conventions

- Use meaningful commit messages
- Create feature branches for new features
- Run `npm run lint` and `npm run build` before committing

## Technology Stack

- **Frontend**: React 19, Vite 6, TypeScript 5.7, Tailwind CSS 4
- **CMS**: Sanity v3
- **UI**: Radix UI primitives, Lucide icons, Shadcn/UI patterns
- **Linting**: ESLint 9 with TypeScript support
