import React from 'react'
import list from '../list'
import Card from './Card'

function Shop({ handleClick }) {
  return (
    <section>
      {list.map((item) => (
        <Card item={item} key={item.id} handleClick={handleClick} />
      ))}
    </section>
  );
}


export default Shop