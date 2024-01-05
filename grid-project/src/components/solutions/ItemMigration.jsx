import React from 'react'

const ItemMigration = ({number,title,subtitle}) => {
  return (
    <div className='itemMigration'>
        <span>{number} </span>
        <div>{title}</div>
        <p>{subtitle}</p>
    </div>
  )
}

export default ItemMigration