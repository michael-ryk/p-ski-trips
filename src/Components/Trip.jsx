import { useState } from 'react';
import classes from './Trip.module.css';

const Trip = ({site, image, country, price, description}) => {
  
  const [expandDescription, setExpandDescription] = useState(false);
  
  return (
    <article className={classes['single-trip']}>
      <h1>{site}</h1>
      <img src={image} alt='resort-overview' />
      <div className={classes['trip-info']}>
        <div className={classes['trip-info-header']}>
          <h2>{country}</h2>
          <h3 className={classes['trip-price']}>${price}</h3>
        </div>
        <p>{expandDescription ? description : `${description.substring(0,130)}...`}
          <button onClick={() => setExpandDescription(!expandDescription)}>
            {expandDescription ? 'Show less' : 'Show more'}
          </button>
        </p>
      </div>
      <div>
        <button className={classes['primary-btn']}>Button</button>
      </div>
    </article>
  )
}

export default Trip;