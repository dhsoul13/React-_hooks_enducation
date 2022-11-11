import React, { useEffect, useState } from 'react';

const ExapleComponent = ({ mas = [] }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(mas());
    console.log(data);
  }, [mas]);

  return (
    <div>
      {Array.isArray(data) ? (
        <>
          {data.length ? (
            <>
              {data.map((el, index) => (
                <div key={index}>{el}</div>
              ))}
            </>
          ) : (
            <>sf</>
          )}
        </>
      ) : (
        'нет ничего'
      )}
    </div>
  );
};

export default ExapleComponent;
