import React from 'react';

function HeaderTitle({ title }) {
  return (
    <h1 className="font-bold tracking-[2px] text-2xl mb-8 text-center">
      {title}
    </h1>
  );
}

export default HeaderTitle;
