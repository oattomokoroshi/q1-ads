import React from 'react';
import ArticleNumber from './ArticleNumber';

const AthletsArticle1 = (props) => {
  const { styleComponent } = props;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', ...styleComponent }}>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <ArticleNumber number="01" />
        <span
          style={{
            width: '239px',
            fontSize: '28px',
            '@media (min-width: 768px)': {
              fontSize: '36px',
            },
            lineHeight: '33px',
            '@media (min-width: 768px)': {
              lineHeight: '42px',
            },
            letterSpacing: '1.5px',
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
          '@media (min-width: 1280px)': {
            letterSpacing: 'normal',
          },
          marginTop: '20px',
          '@media (min-width: 768px)': {
            marginTop: '21px',
          },
          '@media (min-width: 1280px)': {
            marginTop: '31px',
          },
          paddingRight: '20px',
        }}
      >
        Connect with coaches directly, you can ping coaches to view profile.
      </span>
    </div>
  );
};

export default AthletsArticle1;
