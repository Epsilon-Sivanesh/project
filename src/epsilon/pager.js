export default function Pager() {
    return (
        <>
            <div className='container mt-3 d-flex justify-content-center border-bottom pb-4'>
                <i className="fas fa-chevron-circle-left text-danger i i1"></i>
                <p className='text-primary text-decoration-underline i2'>Page 1 of 3</p>
                <i className="fas fa-chevron-down i i3"></i>
                <i className="fas fa-chevron-circle-right text-danger i"></i>
            </div>
        </>
    )
}