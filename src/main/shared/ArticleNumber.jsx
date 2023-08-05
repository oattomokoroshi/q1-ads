import React from 'react';

const ArticleNumber = (props) => {
  const { number, titleClassName, lineClassName, styleComponent } = props;

  return (
    <div
      style={{
        height: '22px',
        '@media (min-width: 768px)': {
          height: '30px',
        },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        ...styleComponent,
      }}
    >
      <span
        style={{
          width: '21px',
          fontSize: '14px',
          '@media (min-width: 768px)': {
            fontSize: 'lg',
          },
          lineHeight: '16px',
          '@media (min-width: 768px)': {
            lineHeight: '21px',
          },
          letterSpacing: '1.5px',
          ...titleClassName,
        }}
      >
        {number}
      </span>
      <div
        style={{
          backgroundColor: 'purple',
          width: number === '01' ? '19px' : '22px',
          '@media (min-width: 768px)': {
            width: number === '01' ? '19px' : '22px',
          },
          height: '5px',
          borderRadius: '2.5px',
          marginTop: '2px',
          '@media (min-width: 768px)': {
            marginTop: '3px',
          },
          ...lineClassName,
        }}
      />
    </div>
  );
};

export default ArticleNumber;
