import * as React from 'react';
import SpecificDataGrid from './SpecificDataGrid';

export default function DataGridWrapper() {
  const [flag, setFlag] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setFlag(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return <SpecificDataGrid flag={flag} />;
}
