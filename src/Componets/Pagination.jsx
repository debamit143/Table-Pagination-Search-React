import React from 'react'

export const Pagination = ({productPerPage,totalPost,paginate}) => {

    const pageNumber = []

    for (let index = 1; index <= Math.ceil(totalPost/productPerPage); index++) {
        pageNumber.push(index)
        
    }
  return (
    <nav>
        <ul className="pagination">
            {pageNumber.map(number=>(
            <li key={number} className="page-item">
                <a onClick={()=>{paginate(number)}}href='/#' className='page-link'>{number}</a>
            </li>
            ))}
        </ul>
    </nav>
  )
}
