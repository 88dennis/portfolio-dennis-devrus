import React, {useEffect, useContext} from 'react'
import { GlobalContext } from "../context/GlobalState";

import LayoutSnapComp from '../components/LayoutSnapComp/LayoutSnapComp'
import NavigationComp from '../components/NavigationComp/NavigationComp'
import{useLocation} from 'react-router-dom';

const PortfolioPage = () => {
  const { handlePageChange, currentPage } = useContext(GlobalContext);

    let location = useLocation();

useEffect(()=>{
  if(location.pathname === "/portfolio"){
    handlePageChange("portfolio");
  }
},[])

    return (
        <>

<NavigationComp />

            <LayoutSnapComp />
        </>
    )
}

export default PortfolioPage
