import React from 'react';
import ArticleNumber from './ArticleNumber';

const AthletsArticle3 = (props) => {
  const { styleComponent } = props;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', ...styleComponent }}>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <ArticleNumber number="03"    lineClassName={{ backgroundColor: 'purple', '@media (min-width: 768px)': { backgroundColor: 'white' } }} />
        <span
          style={{
            fontSize: '28px',
            '@media (min-width: 768px)': {
              fontSize: '4xl',
            },
            lineHeight: '33px',
            '@media (min-width: 768px)': {
              lineHeight: '42px',
            },
            letterSpacing: '1.5px',
                '--tw-text-opacity': '1',
    color: '#C2C2C2',

            marginLeft: '9px',
            '@media (min-width: 768px)': {
              marginLeft: '10px',
            },
          }}
        >
          GROWTH
        </span>
      </div>
      <span
        style={{
          maxWidth: '717px',
          fontSize: '15px',
          '@media (min-width: 768px)': {
            fontSize: 'lg',
          },
          '@media (min-width: 1280px)': {
            fontSize: 'xl',
          },
          lineHeight: '18px',
          '@media (min-width: 768px)': {
            lineHeight: '28px',
          },
          letterSpacing: '0.74px',
          '@media (min-width: 768px)': {
            letterSpacing: '0.837px',
          },
          '@media (min-width: 1280px)': {
            letterSpacing: '0.93px',
          },
          color: '#FFFFFF',
          '@media (min-width: 768px)': {
            color: 'white',
          },
          marginTop: '20px',
          '@media (min-width: 768px)': {
            marginTop: '21px',
          },
          paddingRight: '0',
          '@media (min-width: 1280px)': {
            paddingRight: '30.8px',
          },
        }}
      >
        Resources and tools for you to get better as a student Athlete. Access to training classes, tutor sessions, etc.
      </span>
    </div>
  );
};

export default AthletsArticle3;
