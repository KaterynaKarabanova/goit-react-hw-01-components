import PropTypes from 'prop-types';
import css from './StatElem.module.css';
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
export const StatElem = ({ label, percentage }) => {
  return (
    <li style={{ backgroundColor: getRandomColor() }} className={css.item}>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}%</span>
    </li>
  );
};
StatElem.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
};
