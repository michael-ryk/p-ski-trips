import classes from './Trip.module.css';

const Trip = ({site, image, country, price, description}) => {
  return (
    <article className={classes['single-trip']}>
      <h1>{site}</h1>
      <img src={image} alt='resort-overview' />
      <div className={classes['trip-info']}>
        <div className={classes['trip-info-header']}>
          <h2>{country}</h2>
          <h3 className={classes['trip-price']}>${price}</h3>
        </div>
        <p>{description}</p>
        <button>Button</button>
      </div>
    </article>
  )
}

export default Trip;