import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { StyledEngineProvider } from '@mui/material/styles';
import DataGridWrapper from './DataGridWrapper';

ReactDOM.createRoot(document.querySelector('#root')!).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <DataGridWrapper />
    </StyledEngineProvider>
  </React.StrictMode>
);
