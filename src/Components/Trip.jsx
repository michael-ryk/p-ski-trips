import classes from './Trip.module.css';

const Trip = ({site, image, country, price, description}) => {
  return (
    <article className={classes['single-trip']}>
      <h1>{site}</h1>
      <img src='' alt='' />
      <div>
        <h3>{country}</h3>
        <h3>{price}</h3>
        <p>{description}</p>
        <button>Button</button>
      </div>
    </article>
  )
}

export default Trip;