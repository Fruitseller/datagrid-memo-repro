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
  }, []);

  return (
    <>
      <NotMemoizedDataGrid flag={flag} />
      <MemoizedDataGrid flag={flag} />
    </>
  );
}
