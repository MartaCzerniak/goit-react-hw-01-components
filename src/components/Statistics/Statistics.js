import styles from '../Statistics/Statistics.module.css';

function Statistics(props) { 
  const statistics = props.stats;
  const view = statistics.map(statistics => (
    <ul>
    <li key={statistics.id}>
      <p>{statistics.label}</p>
      <p>{statistics.percentage}%</p>
    </li>
    </ul>
  ));
  if (!props.title) {
    return (
      <ul>{view}</ul>
    );
  }
    return (
<div className= {styles.statistics}>
  <h2 className= {styles.title}>Upload stats</h2>
  <ul> {view} </ul>
</div>)
};
export default Statistics