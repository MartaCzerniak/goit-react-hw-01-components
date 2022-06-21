/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

function getRandomColor() {
  //stackoverflow https://stackoverflow.com/questions/1484506/random-color-generator
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
function Statistics(props) { 
  const statistics = props.stats;
  const view = statistics.map(statistics => (
    <ul css={css`
    padding-inline-start: 0px;`}>
    <li css={css`
    
     list-style: none;
     padding-top: 10px;
     padding-bottom: 10px;
     padding-right: 20px;
     padding-left: 20px;
     min-width: 100%;
     display:flex;
     flex-direction: column;
     justify-content: center;
     background-color: ${getRandomColor()};
    `}
    key={statistics.id}>
      <span css={css`
         margin-bottom: 10px;
        fonst-size: 12;
        color: white;`}>
      {statistics.label}</span>
      <span css={css`
        margin-bottom: 10px;
        fonst-size: 12;
        color: white;`}>
      {statistics.percentage}%</span>
    </li>
    </ul>
  ));
  if (!props.title) {
    return (
      <ul>{view}</ul>
    );
  }
    return (
<div
 css={css`
 margin-top: 50px;
 justify-content: center;
 font-size: 24px;
 border-radius: 4px;
`}>
  <h2
  css={css`
  margin: 0px;
  padding: 30px;
  background-color: white;
  text-align: center;
  text-transform: uppercase;
  color: grey;
  `}>Upload stats</h2>
  <ul css={css`
  padding-inline-start: 0px;
  display: flex;
  justify-content: center;
  padding: 0;
  margin: 0;`}> {view} </ul>
</div>)
};
export default Statistics