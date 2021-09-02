import { connect } from "react-redux";
function Pagination(props) {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(props.state.totalData / props.state.dataPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <nav className='container d-flex justify-content-center'>
            <ul className='pagination'>
                {
                    pageNumbers.map(number => (
                        <li key={number} className='page-item'>
                            <p onClick={() => props.state.paginate(number)} href='#' className='page-link'>{number}</p>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}
const mapStateToProps = (state) => {
    return { state }
}

export default connect(mapStateToProps)(Pagination);