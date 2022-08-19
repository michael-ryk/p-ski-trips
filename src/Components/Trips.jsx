import Trip from './Trip';

const Trips = ({trips}) => {
  return (
    <section>
      <div className='title'>
        <h2>Title</h2>
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