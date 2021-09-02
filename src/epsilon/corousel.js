import { connect } from "react-redux";
function Corousel(props) {
  var val = [];
  let n = 0;
  for (let i = 0; i < 6; i++) {
    val.push(n);
    n += 3
  }
  return (
    <>
      <h1 className='container mt-3'>Related Items</h1>
      <div className='pic-ctn border-bottom container'>
        {props.state.data && val && val.map((i) =>
        (
          <div className='pic d-flex  text-center '>
            <div>
              <img src={props.state.data[i].image} alt='img' className='w-100' />
              <p>{props.state.data[i].brand}</p>
              <p className='fw-bold text-primary'>{props.state.data[i].points.basePointsToCharge}</p>
            </div>
            <div>
              <img src={props.state.data[i + 1].image} alt='img' className='w-100' />
              <p>{props.state.data[i + 1].brand}</p>
              <p className='fw-bold text-primary'>{props.state.data[i + 1].points.basePointsToCharge}</p>
            </div>
            <div>
              <img src={props.state.data[i + 2].image} alt='img' className='w-100' />
              <p>{props.state.data[i + 2].brand}</p>
              <p className='fw-bold text-primary'>{props.state.data[i + 2].points.basePointsToCharge}</p>
            </div>
          </div>
        ))
        }
      </div>
      <h1 className='container mt-3'>Recently Viewed Items</h1>
      <div className='pic-ctn'>
        {props.state.data && val && val.map((i) =>
        (
          <div className='pic d-flex  text-center'>
            <div>
              <img src={props.state.data[i].image} alt='img' className='w-100' />
              <p>{props.state.data[i].brand}</p>
              <p className='fw-bold text-primary'>{props.state.data[i].points.basePointsToCharge}</p>
            </div>
            <div>
              <img src={props.state.data[i + 1].image} alt='img' className='w-100' />
              <p>{props.state.data[i + 1].brand}</p>
              <p className='fw-bold text-primary'>{props.state.data[i + 1].points.basePointsToCharge}</p>
            </div>
            <div>
              <img src={props.state.data[i + 2].image} alt='img' className='w-100' />
              <p>{props.state.data[i + 2].brand}</p>
              <p className='fw-bold text-primary'>{props.state.data[i + 2].points.basePointsToCharge}</p>
            </div>
          </div>
        ))
        }
      </div>
    </>
  )
}
const mapStateToProps = (state) => {
  return { state }
}

export default connect(mapStateToProps)(Corousel);