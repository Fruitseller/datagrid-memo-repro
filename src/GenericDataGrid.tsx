import * as React from 'react';
import { DataGridPro, GridColDef, GridRowsProp } from '@mui/x-data-grid-pro';

interface GenericDataGridProps {
  rows: GridRowsProp;
  columns: GridColDef[];
}

export default function GenericDataGrid({
  rows,
  columns,
}: GenericDataGridProps) {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGridPro
        rows={rows}
        columns={columns}
        autosizeOnMount={true}
        autosizeOptions={{
          columns: ['actions'],
          includeHeaders: false,
          includeOutliers: false,
        }}
        initialState={{ pinnedColumns: { right: ['actions'] } }}
      />
    </div>
  );
}
