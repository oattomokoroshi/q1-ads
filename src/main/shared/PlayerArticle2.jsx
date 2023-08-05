import React from 'react';
import ArticleNumber from './ArticleNumber';

const PlayerArticle2 = (props) => {
  const { styleComponent } = props;

  return (
    <div style={styleComponent}>
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
          '@media (min-width: 768px)': {
            letterSpacing: '0.93px',
          },
          '@media (min-width: 1280px)': {
            letterSpacing: '0.65px',
          },
          marginTop: '20px',
          '@media (min-width: 768px)': {
            marginTop: '21px',
          },
        }}
      >
        Work with recruiter to increase your chances of finding talented athlete.
      </span>
    </div>
  );
};

export default PlayerArticle2;
