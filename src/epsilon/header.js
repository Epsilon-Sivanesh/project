import { connect } from "react-redux"

function Header(props) {
    return (
        <div className='container-fluid bg d-flex align-items-center'>
            <img src={props.state.img1} alt='img' />
            <img className='ms-3' src={props.state.img2} alt='img' />
            <div className='d-flex ms-auto bar align-items-center'>
                <div className='text-center'>
                    <img src={props.state.img3} alt='img' />
                    <p className='text-white fs-6'>Search</p>
                </div>
                <div className='text-center ms-3'>
                    <img src={props.state.img4} alt='img' />
                    <p className='text-white fs-6'>Log out</p>
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return { state }
}

export default connect(mapStateToProps)(Header);