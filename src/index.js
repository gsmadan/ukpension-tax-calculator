import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'; // Import your root component
import ErrorBoundary from './ErrorBoundary';

const container = document.getElementById('root');
if (!container) {
  console.error('Root container missing in index.html');
}  
else {
  const root = createRoot(container);

  root.render(
    <React.StrictMode>
      <ErrorBoundary>
        <App /> 
      </ErrorBoundary>
    </React.StrictMode>
  );
}
