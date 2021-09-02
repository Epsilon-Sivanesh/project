import { connect } from "react-redux"
function Data(props) {
  return (
    <div className='container mt-5 d-md-flex justify-content-center flex-wrap data'>
      {
        props.state.currentpost && props.state.currentpost.map((a) => (
          <div className="card mb-3 cardW" >
            <div className="row g-0 d-flex align-items-center">
              <div class="col-6 col-md-4">
                <img src={a.image} class="img-fluid rounded-start cardImage" alt="img" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{a.title}</h5>
                  <p className="card-text">This is a shot line of placeholder copy. It shows how 3 lines of copy...</p>
                  {(a.points.basePointsToCharge !== a.points.originalBasePointsToCharge &&
                    <>
                      <p className='fw-bold text-primary'>{a.points.basePointsToCharge} points</p>
                      <p className='text-decoration-line-through'>{a.points.originalBasePointsToCharge} points</p></>)
                    ||
                    <>
                      <p className='fw-bold text-primary'>{a.points.basePointsToCharge} points</p>
                    </>
                  }
                  <button className='bg-danger text-white btn btn-lg'>Detail</button>
                </div>
              </div>
            </div>
          </div>
        ))
      }</div>
  )
}
const mapStateToProps = (state) => {
  return { state }
}

export default connect(mapStateToProps)(Data);