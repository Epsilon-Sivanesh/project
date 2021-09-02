import { connect } from "react-redux"

function Footer(props) {
    return (
        <div className='back'>
            <div className='container border-bottom border-white'>
                <p className='text-white pt-4 text-decoration-underline'>Contact Us</p>
                <img className='float-end img' src={props.state.img2} alt='img' />
                <p className='text-white text-decoration-underline'>Program Rules</p>
                <p className='text-white text-decoration-underline'>FAQs</p>
                <p className='text-white text-decoration-underline'>Privacy</p>
            </div>

            <div className='container text-white p-2'>
                <p ><i class="far fa-copyright"></i> 2019 U.S.Bank </p>
                <p>The creditor and issuer of your card is U.S. Bank National Association,pursuant to a license from Visa U.S.A. Inc.</p></div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return { state }
}

export default connect(mapStateToProps)(Footer);