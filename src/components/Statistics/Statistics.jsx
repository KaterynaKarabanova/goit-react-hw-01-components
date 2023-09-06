import { StatElem } from './StatElem/StatElem';
import PropTypes from 'prop-types';
import css from './Statistic.module.css';
export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>{title}</h2>

      <ul className={css.stat_list}>
        {stats.map(el => {
          return (
            <StatElem key={el.id} label={el.label} percentage={el.percentage} />
          );
        })}
      </ul>
    </section>
  );
};
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
};
