# ADY Dashboard - Data Visualization App with Voice Assistant Integration

A modern Next.js application that creates beautiful data visualizations using ThesysVisualize library, with voice assistant integration through n8n AdiUI tool.

## Features

- 📊 **Data Visualization**: Create beautiful charts from CSV, JSON, and Excel files
- 🎯 **Smart Chart Detection**: Automatic chart type recommendations based on data structure
- 🎨 **Customization**: Extensive chart customization options
- 📱 **Responsive Design**: Works seamlessly across desktop, tablet, and mobile
- 🗣️ **Voice Integration**: URL-based integration for voice assistants
- 🚀 **Vercel Ready**: Deployable on Vercel with no backend dependencies

## Tech Stack

- **Framework**: Next.js 15.5.0 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Data Validation**: Zod
- **Forms**: React Hook Form
- **Visualization**: ThesysVisualize (to be integrated)
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ADY-Dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production with Turbopack
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── app/                 # Next.js App Router pages
├── components/          # React components
│   ├── ui/             # Reusable UI components
│   └── charts/         # Chart-specific components
├── lib/                # Utility functions and validations
├── types/              # TypeScript type definitions
└── public/             # Static assets
```

## Voice Assistant Integration

The application supports voice assistant integration through URL parameters. Voice assistants can trigger visualizations by passing data through URL parameters, enabling seamless voice-controlled data visualization.

## Development

This project follows modern React and TypeScript best practices:

- **TypeScript**: Strict type checking enabled
- **ESLint**: Code quality and consistency
- **Prettier**: Code formatting
- **Tailwind CSS**: Utility-first styling

## Contributing

1. Follow the established code style and conventions
2. Write tests for new features
3. Ensure all linting checks pass
4. Update documentation as needed

## License

This project is licensed under the MIT License.
