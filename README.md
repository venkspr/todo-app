# React Analytics Dashboard

A modern React application built with TypeScript, Tailwind CSS, ShadCN UI components, and Framer Motion animations. This dashboard replicates the design and functionality shown in the provided screenshot.

## Features

- **Responsive Layout**: Modern three-panel layout with sidebar, main content, and right panel
- **Interactive Sidebar**: Navigation menu with document structure and collapsible functionality
- **Main Content Area**: Account information forms and service status tracking
- **Traffic Flow Table**: Detailed traffic flow analysis with status indicators
- **Charts & Metrics**: Performance visualizations using Recharts
- **Smooth Animations**: Framer Motion powered transitions and micro-interactions
- **Modern UI**: ShadCN UI components with Tailwind CSS styling

## Tech Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **ShadCN UI** - High-quality UI components
- **Framer Motion** - Animation library
- **Recharts** - Data visualization charts
- **Vite** - Fast build tool and development server
- **Heroicons** - Beautiful SVG icons

## Getting Started

### Prerequisites

- Node.js 16+ recommended
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/           # React components
│   ├── ui/              # ShadCN UI components
│   ├── Sidebar.tsx      # Navigation sidebar
│   ├── MainContent.tsx  # Main content area
│   ├── RightPanel.tsx   # Right panel with charts
│   └── TrafficFlowTable.tsx # Traffic flow data table
├── lib/                 # Utility functions
├── styles/              # Global styles
└── App.tsx              # Main application component
```

## Component Overview

### Sidebar
- Collapsible navigation with Intuit branding
- Document tree structure
- Animated menu items with active states

### Main Content
- Account information forms
- Service status tracking
- Interactive form elements

### Right Panel
- Performance metrics charts
- Usage statistics
- Recent activity feed

### Traffic Flow Table
- Detailed traffic flow analysis
- Status indicators with color coding
- Service health monitoring

## Styling

The application uses Tailwind CSS with a custom design system:
- Consistent color palette
- Responsive design patterns
- Modern shadow and spacing utilities
- Custom width and margin classes

## Animations

Framer Motion provides smooth animations:
- Sidebar collapse/expand
- Component entry animations
- Hover and interaction effects
- Staggered table row animations

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Contributing

1. Fork the repository
2. Create your feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License - feel free to use this project for your own purposes. 