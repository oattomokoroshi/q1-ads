import React from 'react';
import ArticleNumber from './ArticleNumber';

const AthletsArticle2 = (props) => {
  const { styleComponent } = props;

  return (
    <div style={{ display: 'flex',flex:1, flexDirection: 'column', ...styleComponent }}>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <ArticleNumber number="02" />
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
          COLLABORATION
        </span>
      </div>
      <span
        style={{
          maxWidth: '717px',
          '@media (max-width: 1280px)': {
            maxWidth: '446px',
          },
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
          marginTop: '20px',
          '@media (min-width: 768px)': {
            marginTop: '21px',
          },
          paddingRight: '0',
        }}
      >
        Work with other student athletes to increase visibility. When you share and like other players' videos, it will increase your visibility as a player. This is the teamwork aspect of Surface 1.
      </span>
    </div>
  );
};

export default AthletsArticle2;
