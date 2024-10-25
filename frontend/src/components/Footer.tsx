import React from 'react';

interface Props {
  children: React.ReactNode;
  renderContentAboveFooter: () => React.ReactNode;
}

export const Footer = ({ children, renderContentAboveFooter }: Props) => {
  return (
    <div>
      {renderContentAboveFooter()}
      <p>{children}</p>
    </div>
  );
};
