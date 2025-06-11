# Public Assets

This folder contains static assets that are served directly from the root of your domain.

## Folder Structure

- **`/images/`** - Static images (profile photos, project screenshots, logos, etc.)
- **`/documents/`** - PDFs and other documents (resume, certificates, etc.)
- **`/icons/`** - Icon files and app icons
- **`/favicon.ico`** - Site favicon

## Usage

Files in this folder are accessible from the root path:
- `public/images/profile.jpg` → `/images/profile.jpg`
- `public/documents/resume.pdf` → `/documents/resume.pdf`
- `public/favicon.ico` → `/favicon.ico`

## Examples

```jsx
// In your React components
<img src="/images/profile.jpg" alt="Profile" />
<a href="/documents/resume.pdf" download>Download Resume</a>
``` 