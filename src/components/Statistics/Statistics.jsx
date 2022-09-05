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
    <ul
      css={css`
        width: 100%;
        padding-inline-start: 0px;
      `}
    >
      <li
        css={css`
          list-style: none;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background-color: ${getRandomColor()};
        `}
        key={statistics.id}
      >
        <span
          css={css`
            margin-bottom: 10px;
            fonst-size: 12;
            color: white;
          `}
        >
          {statistics.label}
        </span>
        <span
          css={css`
            margin-bottom: 10px;
            fonst-size: 12;
            color: white;
          `}
        >
          {statistics.percentage}%
        </span>
      </li>
    </ul>
  ));
  if (!props.title) {
    return <ul>{view}</ul>;
  }
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        max-width: 500px;
        margin-left: auto;
        margin-right: auto;
        margin-top: 50px;
        justify-content: center;
        font-size: 24px;
        border-radius: 5px;
        box-shadow: -1px, 3px, 20px, -11px, rgba(66, 68, 90, 1);
      `}
    >
      <h2
        css={css`
          margin: 0px;
          padding-top: 30px;
          padding-bottom: 30px;
          background-color: white;
          text-align: center;
          text-transform: uppercase;
          color: grey;
        `}
      >
        Upload stats
      </h2>
      <ul
        css={css`
          width: 500px;
          display: flex;
          justify-content: center;
          padding: 0;
          margin: auto;
          margin-bottom: 10px;
        `}
      >
        {' '}
        {view}{' '}
      </ul>
    </div>
  );
}
export default Statistics;
