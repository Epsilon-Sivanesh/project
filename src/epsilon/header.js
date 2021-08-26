export default function Header({img1,img2,img3,img4}){
    return(
        <div className='container-fluid bg d-flex align-items-center'>
        <img  src={img1} alt='img'/>
        <img  className='ms-3' src={img2} alt='img'/>
        <div className='d-flex ms-auto bar align-items-center'>
        <div className='text-center'>  
        <img  src={img3} alt='img'/>
        <p className='text-white fs-6'>Search</p>
        </div>
        <div className='text-center ms-3'>
        <img  src={img4} alt='img'/>
        <p className='text-white fs-6'>Log out</p>
        </div>       
        </div>  
        </div>  
    )
}