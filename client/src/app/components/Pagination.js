import React from 'react'

function Pagination() {
  return (
    <div className="post-pagination-container">
        <div className="post-pagination">

          <div className="pagination-fbackwards">
            <div className="material-icons" id="arrow">arrow_back_ios</div>
          </div>

          <div className="post-pagination-elements">1</div>
          <div className="post-pagination-elements">2</div>
          <div className="post-pagination-elements">3</div>
          <div className="post-pagination-elements">4</div>
          <div className="post-pagination-elements">5</div>

          <div className="pagination-fbackwards">
            <div className="material-icons" id="arrow">arrow_forward_ios</div>
          </div>

        </div>
    </div>
  )
}

export default Pagination
