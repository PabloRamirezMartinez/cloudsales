import React from 'react'

const ModalProd = () => {
  return (
    <>
  <button
    type="button"
    className="btn btn-default"
    data-toggle="modal"
    data-target="#modal-lg"
  >
    Launch Large Modal
  </button>
  <div className="modal fade" id="modal-lg">
    <div className="modal-dialog modal-lg">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title">Large Modal</h4>
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="modal-body">
          <p>One fine body…</p>
        </div>
        <div className="modal-footer justify-content-between">
          <button
            type="button"
            className="btn btn-default"
            data-dismiss="modal"
          >
            Close
          </button>
          <button type="button" className="btn btn-primary">
            Save changes
          </button>
        </div>
      </div>
      {/* /.modal-content */}
    </div>
    {/* /.modal-dialog */}
  </div>
  {/* /.modal */}
</>

  )
}

export default ModalProd