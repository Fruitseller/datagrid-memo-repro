import * as React from 'react';
import {
  DataGridPro,
  GridActionsCellItem,
  GridColDef,
  GridRowsProp,
} from '@mui/x-data-grid-pro';
import EditIcon from '@mui/icons-material/Edit';

interface GenericDataGridProps {
  rows: GridRowsProp;
  columns: GridColDef[];
}

export default function GenericDataGrid({
  rows,
  columns,
}: GenericDataGridProps) {
  const muiColumns: GridColDef[] = React.useMemo(() => {
    return [
      ...columns,
      {
        field: 'actions',
        type: 'actions',
        resizable: false,
        getActions: () => [
          <GridActionsCellItem icon={<EditIcon />} label="Edit" />,
        ],
      },
    ];
  }, [columns]);

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGridPro
        rows={rows}
        columns={muiColumns}
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
