import PropTypes from 'prop-types';
// material
import { Grid } from '@material-ui/core';
import ShopParkinglotCard from './ParkinglotCard';

// ----------------------------------------------------------------------

ParkinglotList.propTypes = {
  parkinglots: PropTypes.array.isRequired
};

export default function ParkinglotList({ parkinglots, ...other }) {
  return (
    <Grid container spacing={3} {...other}>
      {parkinglots.map((parkinglot) => (
        <Grid key={parkinglot.id} item xs={12} sm={6} md={3}>
          <ShopParkinglotCard parkinglot={parkinglot} />
        </Grid>
      ))}
    </Grid>
  );
}
