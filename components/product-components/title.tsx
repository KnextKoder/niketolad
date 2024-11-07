import React from 'react';

interface TitleProps {
  text: string;
}

export const Title: React.FC<TitleProps> = ({ text }) => {
  return (
    <div className='md:text-4xl text-2xl font-bold align-text-bottom'>
      {text}
    </div>
  );
};