import React from 'react'
import products from "./products.json";
import { useState,useEffect } from 'react';
import Table from 'react-bootstrap/Table'
import { Pagination } from '../Componets/Pagination';



export const Tables = () => {
  const [currentPage, setcurrentPage] = useState(1)
  const [productPerPage] = useState(10)
  const indexOfLastPage = productPerPage * currentPage
  const inndexofFirstPage = indexOfLastPage - productPerPage
  const currentProducts = products.slice(inndexofFirstPage, indexOfLastPage)
  // console.log(currentProducts)
  const paginate = (pageNumber) => {
    setcurrentPage(pageNumber)
  }
  const [searchName, setsearchName] = useState('')
  const [unitsInStock, setunitsInStock] = useState('')
  const [searchStatus,setsearchStatus]=useState(false)
  // console.log(unitsInStock)
  useEffect(() => {
    if(searchName === '' && unitsInStock ===''){
      setsearchStatus(false)
    }
    else{
      console.log(searchName)
      console.log(unitsInStock)
      setsearchStatus(true)
    }
  }, [searchName,unitsInStock])
  
  return (
    <div className='table-wrapper'>
      <Table>
        <thead>
          <tr>
            <th>ProductId</th>
            <th>Name</th>
            <th>Price</th>
            <th>InStock</th>
            <th>Discount</th>
          </tr>
          <tr>

            <th>ProductId</th>
            <th><input type='text' onChange={(e)=>{setsearchName(e.target.value)}} /></th>
            <th><input type='number' /></th>
            <th><input type='number' onChange={(e)=>{setunitsInStock((e.target.value).toString())}}/></th>
            <th>Discount</th>

          </tr>
        </thead>
        { searchStatus? (
          <tbody>
            {products.filter((pro) => {
              if(searchName!==''){
                return pro.ProductName.toLowerCase().includes(searchName.toLowerCase())
              }else if(unitsInStock!==''){
                return pro.UnitsInStock.toString().includes(unitsInStock.toString())
              }else{
                return pro
              }
              
            }).map(pro => (
              <tr key={pro.ProductID}>
                <td>{pro.ProductID}</td>
                <td>{pro.ProductName}</td>
                <td>{pro.UnitPrice}</td>
                <td>{pro.UnitsInStock}</td>
                <td>{pro.Discontinued}</td>
              </tr>
            ))}
          </tbody>
        ):
          (<tbody>
            {currentProducts.map(pro => (
              <tr key={pro.ProductID}>
                <td>{pro.ProductID}</td>
                <td>{pro.ProductName}</td>
                <td>{pro.UnitPrice}</td>
                <td>{pro.UnitsInStock}</td>
                <td>{pro.Discontinued}</td>
              </tr>
            ))}
          </tbody>)}

      </Table>
      <Pagination productPerPage={productPerPage} totalPost={products.length} paginate={paginate} />
    </div>
  )
}

