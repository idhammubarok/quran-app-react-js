import React, { Fragment, useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import {
    Container, 
    Card, 
    ListGroup,
} from 'react-bootstrap'
import NavbarComponent from '../component/Navbar'
import FooterComponent from '../component/Footer'
import axios from '../helpers/AxiosCreate'

const Home=()=>{
    const [surah, setSurah] = useState([]);
    const [isFooter, setIsFooter] = useState('');
    useEffect(()=>{
        axios.get("/surah")
        .then((res)=>{
            setSurah(res.data.data)
            setIsFooter(true)
        })
        .catch((error)=>{
            console.log(error)
        })
    },[]);
    return(
        <Fragment>
            <NavbarComponent />
            <div className="mt-5">&nbsp;</div>
            <Container fluid>
                <Card className="mt-2">
                    <Card.Body className="text-center">
                        <i>Assalamu'alaikum Wr Wb.</i><br/>
                        <strong>Selamat datang di Quran Mu</strong>
                    </Card.Body>
                </Card>
                <div className="mt-3">
                    <p className="fs-2">Daftar Surah:</p>
                </div>
                <ListGroup variant="flush">
                    {surah.map((item, index)=>(
                        <Surah key={index} no={item.number} nama={item.name.transliteration.id} ayat={item.name.short}/>
                    ))}
                </ListGroup>  
            </Container>
            {isFooter === true ?
                <FooterComponent/> : ''
            }
        </Fragment>
    )
}

const Surah=(props)=>{
    return(
        <Fragment>
            <ListGroup.Item className="mt-1 fs-2"><Link to={'/surah/' + props.no} className="text-decoration-none text-dark"><span className="btn btn-sm btn-secondary"><strong>{props.no}</strong></span> <strong>{props.nama}</strong> <span className="float-right">{props.ayat}</span></Link></ListGroup.Item>
        </Fragment>
    )
}
export default Home