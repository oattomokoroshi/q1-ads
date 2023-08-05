import React from 'react';
import ArticleNumber from './ArticleNumber';

const PlayerArticle3 = (props) => {
  const { styleComponent } = props;

  return (
    <div style={styleComponent}>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <ArticleNumber
          number="03"
          titleClassName={{color: '#FFFFFF'}}
          lineClassName={{ backgroundColor: 'purple', '@media (min-width: 768px)': { backgroundColor: 'white' } }}
        />
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
          '@media (min-width: 1280px)': {
            lineHeight: '23px',
          },
          letterSpacing: '0.74px',
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
          color: '#FFFFFF',
          '@media (min-width: 768px)': {
            color: 'white',
          },
        }}
      >
        Save your time, recruit proper athletes for your team.
      </span>
    </div>
  );
};

export default PlayerArticle3;
