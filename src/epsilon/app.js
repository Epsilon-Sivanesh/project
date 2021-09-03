import './app.css'
import React from 'react'
import Pagination from './pagination'
import Data from './data'
import Header from './header'
import Footer from './footer'
import Camera from './camera'
import Corousel from './corousel'
import Pager from './pager'
import Placeholder from './placeholder'

import './fontawesome-free-5.15.3-web/css/all.css'
import { useEffect, useState } from 'react'
import { connect } from 'react-redux'


const App = (props) => {
  const [page, setPage] = useState(1)
  useEffect(() => {
    fetch('https://eps-gigya.herokuapp.com/rewardProducts')
      .then(x => x.json())
      .then(payload => props.dispatch({ type: 'data', payload }))
      .then(end => {
        const indexLastPost = page * props.state.dataPerPage;
        const indexFirstpost = indexLastPost - props.state.dataPerPage;
        let currentpost = end.payload.slice(indexFirstpost, indexLastPost);
        props.dispatch({ type: 'post', currentpost })
        const paginate = (number) => {
          setPage(number)
        }
        props.dispatch({ type: 'paginate', paginate })
      })
  }, [page])




  return (
    <>
      <Header />
      <Camera />
      <Placeholder />
      <Data />
      <Pagination />
      <Pager />
      <Corousel />
      <Footer />
    </>
  )
}


const mapDispatchToProps = (dispatch) => {
  return { dispatch }
}
const mapStateToProps = (state) => {
  return { state }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
