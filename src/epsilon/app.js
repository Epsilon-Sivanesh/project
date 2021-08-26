import './app.css'
import img1 from './Assets/Group 4.png'
import img2 from './Assets/Group 5.png'
import img3 from './Assets/Group 3.png'
import img4 from './Assets/Group 1.png'
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


export default function App(){
    const [state,setState]=useState()
    const [page,setPage]=useState(1)
    const [dataPerPage]=useState(6)
    useEffect(()=>{
        fetch('https://eps-gigya.herokuapp.com/rewardProducts')
        .then(x=>x.json())
        .then(setState)
    },[])
    const indexLastPost=page*dataPerPage;
    const indexFirstpost=indexLastPost-dataPerPage;
    let currentpost;
    if(state){
    currentpost=state.slice(indexFirstpost,indexLastPost);}

    function paginate(number){
      setPage(number)
    }
    return(
        <>
        <Header img1={img1} img2={img2} img3={img3} img4={img4}/> 
        <Camera />
        <Placeholder/>
            {
              state&&<>
              <Data posts={currentpost}/>
            <Pagination dataPerPage={dataPerPage} totalData={state.length} paginate={paginate}/></>
            }
            <Pager/>
            <Corousel state={state}/>
            <Footer img2={img2}/>
         </>
    )
}