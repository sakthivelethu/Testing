# Career Navigator

A comprehensive career guidance application built with React, TypeScript, and Express.js.

## Features

- Interactive career path exploration
- Structured guidance for 10th and 12th grade students
- Comprehensive career options across various streams
- Modern, responsive UI with smooth animations

## Development

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

### Build

```bash
npm run build
```

## Deployment

### GitHub Pages

This project is configured for automatic deployment to GitHub Pages:

1. **Enable GitHub Pages** in your repository settings:
   - Go to Settings → Pages
   - Select "GitHub Actions" as the source
   - The deployment will happen automatically on pushes to the main branch

2. **Manual Deployment** (if needed):
   ```bash
   npm run build
   # The built files will be in dist/public/
   ```

3. **Access your deployed site** at: `https://[username].github.io/[repository-name]`

### SPA Routing

The application uses client-side routing. GitHub Pages automatically serves `404.html` for all routes, which redirects to `index.html` to enable proper SPA navigation.

## Project Structure

```
├── client/          # React frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── lib/
│   └── public/
├── server/          # Express backend
├── shared/          # Shared types/utilities
├── data/           # Career data files
└── script/         # Build scripts
```

## Technologies Used

- **Frontend:** React, TypeScript, Vite, Tailwind CSS, Wouter (routing)
- **Backend:** Express.js, Node.js
- **Database:** PostgreSQL with Drizzle ORM
- **UI Components:** Radix UI, Lucide Icons
- **Build Tools:** esbuild, Vite

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License# Testing
