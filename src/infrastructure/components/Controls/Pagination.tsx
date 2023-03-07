import React from 'react'

type PaginationProps = {
    page: number,
    nextPage: any,
    prevPage: any
}

const Pagination: React.FC<PaginationProps> = () => {
  return (
      <div className="row">
          <div className="col-sm-12">
              <div className="pagination font-alt">
                  <a href="#">
                      <i className="fa fa-angle-left"></i>
                  </a>
                  <a className="active" href="#">1</a>
                  <a href="#">2</a>
                  <a href="#">3</a>
                  <a href="#">4</a>
                  <a href="#">
                      <i className="fa fa-angle-right"></i>
                  </a>
              </div>
          </div>
      </div>
  )
}

export default Pagination
