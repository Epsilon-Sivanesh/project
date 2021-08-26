export default function Pagination({dataPerPage, totalData,paginate}){
    const pageNumbers=[];
    for(let i=1;i<=Math.ceil(totalData/dataPerPage);i++){
        pageNumbers.push(i);
    }
    return(
        <nav className='container d-flex justify-content-center'>
        <ul className='pagination'>
        {
            pageNumbers.map(number=>(
                <li key={number} className='page-item'>
                    <a onClick={()=>paginate(number)} href='#' className='page-link'>{number}</a>
                </li>
            ))
        }
        </ul>
        </nav>
    )
}