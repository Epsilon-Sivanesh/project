export default function Corousel({state}){
    return(
        <>
                    <div className='mt-3 container border-bottom'>
                <h1>Related Items</h1>
                <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
  {
                    state&&state.map((a,i)=>(
                        (i===0&&
                            <div className="carousel-item active">
                               <img src={a.image} className="d-block w" alt="img"/>
      <p>{a.title}</p>
      <p className='fw-bold text-primary'>{a.points.basePointsToCharge} Points</p>  
    </div>  
     )   ||
      <div className="carousel-item">
      <img src={a.image} className="d-block w" alt="img"/>
      <p>{a.title}</p>
      <p className='fw-bold text-primary'>{a.points.basePointsToCharge} Points</p>  </div>

                 ))
                }
  </div>
</div>
            </div>
            <div className='mt-3 container'>
                <h1>Recently Viewed Items</h1>
                <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
  {
                    state&&state.map((a,i)=>(
                        (i===0&&
                            <div className="carousel-item active">
      <img src={a.image} className="d-block w" alt="img"/>
      <p>{a.title}</p>
      <p className='fw-bold text-primary'>{a.points.basePointsToCharge} Points</p>
    </div>   )   ||
      <div className="carousel-item">
      <img src={a.image} className="d-block w" alt="img"/>
      <p>{a.title}</p>
      <p className='fw-bold text-primary'>{a.points.basePointsToCharge} Points</p>
    </div>   
                 ))
                }
  </div>
</div>
            </div>
        </>
    )
}