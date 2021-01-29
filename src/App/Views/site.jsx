import React, {useState} from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

import Competences from './competences'
import Introduction from './introduction'
import StepTwo from './step2'
import StepTree from './step3'

const Site = ({}) => {
    const [page, setPage] = useState(1)

    return <> 
        <div className="container w-75 mt-5 p-5 ">
            <div className="card border-0 rounded-0 shadow mt-3">
                <div className="card-body border-0 rounded-0">
                    <div className="d-flex justify-content-center">
                        {page > 1 && <>
                            <h3 className="mr-5"><a href="#" onClick={() => setPage(page - 1)}><FontAwesomeIcon icon={faChevronLeft}/></a></h3>
                        </>}
                        {page < 4 && <>
                            <h3><a href="#" onClick={() => setPage(page + 1)}><FontAwesomeIcon icon={faChevronRight}/></a></h3>
                        </>}
                    </div>
                    <div className="d-flex justify-content-center">
                        <small className="text-muted">changer de page</small>
                    </div>
                    {page === 1 ? <Competences/> : <></>}
                    {page === 2 ? <Introduction/> : <></>}
                    {page === 3 ? <StepTwo/> : <></>}
                    {page === 4 ? <StepTree/> : <></>}
                    <br/>
                    <div className="d-flex justify-content-center">
                        {page > 1 && <>
                            <h3 className="mr-5"><a href="#" onClick={() => setPage(page - 1)}><FontAwesomeIcon icon={faChevronLeft}/></a></h3>
                        </>}
                        {page < 4 && <>
                            <h3><a href="#" onClick={() => setPage(page + 1)}><FontAwesomeIcon icon={faChevronRight}/></a></h3>
                        </>}
                    </div>
                    <div className="d-flex justify-content-center">
                        <small className="text-muted">changer de page</small>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Site