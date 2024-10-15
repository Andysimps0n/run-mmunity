import React from 'react'

function Pagination(props) {

  const paginationArray = Array.from({length : 5}, (_, i) => i + 1)


  return (
    <div className="post-pagination-container">
        <div className="post-pagination">

          <div className="pagination-fbackwards" onClick={()=>{props.setPage(props.page > 1? props.page - 1 : props.page)}}>
            <div className="material-icons" id="arrow">arrow_back_ios</div>
          </div>

          {paginationArray.map((e,i)=>{return(
            <div key={i} className="post-pagination-elements" onClick={()=>{props.setPage(e)}}>{e}</div>
          )})}



          <div className="pagination-fbackwards" onClick={()=>{props.setPage(props.page !== 5 ? props.page + 1 : props.page)}}>
            <div className="material-icons" id="arrow">arrow_forward_ios</div>
          </div>

        </div>
    </div>
  )
}

export default Pagination
