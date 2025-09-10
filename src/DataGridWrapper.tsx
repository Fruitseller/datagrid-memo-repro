import * as React from 'react';
import NotMemoizedDataGrid from './NotMemoizedDataGrid.tsx';
import MemoizedDataGrid from './MemoizedDataGrid.tsx';

export default function DataGridWrapper() {
  const [flag, setFlag] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setFlag(!flag);
    }, 2000);

    return () => clearTimeout(timer);
  });

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <div style={{ marginBottom: '40px' }}>
        <NotMemoizedDataGrid flag={flag} />
      </div>
      <div>
        <MemoizedDataGrid flag={flag} />
      </div>
    </div>
  );
}
