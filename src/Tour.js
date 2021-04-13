import React, { useState } from 'react'

const Tour = ({ id, name, info, image, price, removeTour }) => {
  const [showMore, setShowMore] = useState(false)
  return (
    <article className='tour'>
      <img src={image} alt={name} />

      <footer>
        <section className='tour__info'>
          <h4 className='tour__name'>{name}</h4>
          <h4 className='tour__price'>{price}</h4>
        </section>

        <p>
          {showMore ? info : `${info.substring(0, 200)}`}
          <button onClick={() => setShowMore(!showMore)}>
            {showMore ? ' show less' : ' show more'}
          </button>
        </p>
        <button className='tour__delete' onClick={() => removeTour(id)}>
          not intersted
        </button>
      </footer>
    </article>
  )
}

export default Tour
