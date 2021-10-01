import React, { Fragment } from 'react'
import {Link} from 'react-router-dom'

const FooterComponent=()=>{
    return(
        <Fragment>
            <footer className="footer py-3 bg-secondary mt-3 text-center">
                <div className="container">
                    <span className="text-white ">By: Mubarok, Reference API from <Link to="https://api.quran.sutanlab.id">Klik</Link></span>
                </div>
            </footer>
        </Fragment>
    )
}

export default FooterComponent