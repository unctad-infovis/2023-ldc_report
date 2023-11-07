import React from 'react';

import { createRoot } from 'react-dom/client';

import Footer from './jsx/Footer.jsx';

const container_footer = document.getElementById('app-root-2023-ldc_report_footer');
if (container_footer) {
  const root_footer = createRoot(container_footer);
  root_footer.render(<Footer />);
}
