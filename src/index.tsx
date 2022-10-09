import { createRoot } from 'react-dom/client';
import { App } from './App';

const Root = () => (
  <App />
);

createRoot(document.getElementById('root') as HTMLDivElement)
  .render(<Root />);
