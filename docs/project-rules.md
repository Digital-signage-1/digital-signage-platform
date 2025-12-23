# Project Rules & Guidelines

## General Code Standards
- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS
- **State Management**: React Context
- **Structure**: Feature-based or Domain-based where possible.
- **Imports**: Use absolute imports `@/` (e.g., `@/components/ui/Button`).

## AI Agent Instructions
- Keep components small and reusable.
- Use meaningful variable and function names.
- Document complex logic.
- Follow the "Wireframe" aesthetic:
    - Minimal colors (grays, blacks, whites).
    - Focus on layout and spacing.
    - Use Tailwind utilities (e.g., `bg-gray-100`, `border`, `rounded`).

## Wireframe Guidelines
- Do not implement real backend logic beyond Auth API calls (mocked if needed).
- Use `localStorage` for data persistence where applicable (e.g., auth tokens).
- Placeholder images/maps can be represented by colored `div`s with labels.
