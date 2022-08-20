import Trip from './Trip';

import classes from './Trips.module.css';

const Trips = ({trips}) => {
  return (
    <section>
      <div className={classes.title}>
        <h1>List of Ski resorts to visit</h1>
      </div>
      <div>
        {trips.map(trip => {
          return <Trip key={trip.id} {...trip}/>
          }
        )}
      </div>
    </section>
  )
}

export default Trips;