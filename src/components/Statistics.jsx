import data from './data.json';
import css from './statistics.module.css';

const Statistics = ({title, stats}) => {
    return (
    <section className={css.statistics}>
   <h2 className={css.title}>Upload stats</h2>
   <ul className={css.statlist}>
  {data.map(stats =>{
    return (
        
    <li className={css.item} key={stats.id}>
      <span className={css.label}>{stats.label}</span>
      <span className={css.percentage}>{stats.percentage}%</span>
    </li>
   
  
    )})
  }</ul>
  </section>
    );
};

export default Statistics;