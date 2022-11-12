import React from 'react';
import { useDates } from '../FuctionReducer/Index';

const ViewComponent = () => {
  const data = useDates();

  return (
    <pre>
      {data.data.map((el, index) => (
        <div key={index}>
          {JSON.stringify({ index: index + 1, data: el }, null, 3)}
        </div>
      ))}
    </pre>
  );
};

export default React.memo(ViewComponent);
