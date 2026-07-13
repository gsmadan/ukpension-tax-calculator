# UK Pension Tax Calculator

A React-based web application designed to help UK citizens calculate their pension tax liabilities through an interactive, step-by-step questionnaire.

## Overview

This calculator guides users through a series of questions about their pension situation and provides tax calculations based on their responses. The application features a multi-page flow with conditional routing to tailor the experience to each user's circumstances.

## Features

- **Interactive Questionnaire**: Multi-step form-based interface for gathering pension information
- **Conditional Routing**: Different calculation paths based on user responses
- **React Router Integration**: Smooth navigation between calculation steps
- **Tax Calculations**: Automated tax liability calculations based on UK pension rules
- **Responsive Design**: Clean, user-friendly interface

## Tech Stack

- **React** 18.3.1 - UI library
- **React Router DOM** 6.23.1 - Client-side routing
- **Axios** 1.7.3 - HTTP client for API requests
- **React Scripts** 5.0.1 - Build tooling (Create React App)

## Getting Started

### Prerequisites

- Node.js and npm installed on your system

### Installation

1. Clone the repository:
```bash
git clone https://github.com/gsmadan/ukpension-tax-calculator.git
cd ukpension-tax-calculator
```

2. Install dependencies:
```bash
npm install
```

### Available Scripts

#### Development
```bash
npm start
```
Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) in your browser to view it.

#### Testing
```bash
npm test
```
Launches the test runner in interactive watch mode.

#### Production Build
```bash
npm run build
```
Builds the app for production. The build is optimized and ready for deployment.

## Project Structure

```
src/
├── pages/
│   ├── homepage.js           # Initial landing page
│   ├── secondpage.js
│   ├── thirdpage.js          # Decision point with conditional routing
│   ├── thirdpage-yes.js
│   ├── yes-fourthpage.js
│   ├── yes-fifthpage.js
│   ├── yes-fifthpage-no.js
│   └── yes-fifthpage-yes.js  # Final calculation page
├── App.js                    # Main app component with routing
├── App.css                   # Styles
└── index.js                  # Entry point
```

## How It Works

1. User starts at the homepage
2. Answers questions about their pension situation
3. Application routes to appropriate calculation path based on responses
4. Tax calculations are performed and displayed
5. Results are presented to the user

## Development

To extend the calculator:

1. Add new pages in `src/pages/`
2. Import and add routes in `src/App.js`
3. Update styling in `src/App.css`
4. Test navigation and calculations

## License

Please specify your license here.

## Support

For issues or questions, please open an issue on GitHub.
