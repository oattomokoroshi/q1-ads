import React from 'react';
import ArticleNumber from './ArticleNumber';

const PlayerArticle1 = (props) => {
  const { styleComponent } = props;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', ...styleComponent }}>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <ArticleNumber number="01" />
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
          CONNECTION
        </span>
      </div>
      <span
        style={{
          maxWidth: '432px',
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
          marginTop: '20px',
          '@media (min-width: 768px)': {
            marginTop: '21px',
          },
        }}
      >
        Connect with talented athlete directly, you can watch their skills through video showreels directly from Surface 1.
      </span>
    </div>
  );
};

export default PlayerArticle1;
