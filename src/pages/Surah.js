import React, { Fragment, useEffect, useState } from 'react'
import NavbarComponent from '../component/Navbar'
import FooterComponent from '../component/Footer'
import {
    Container,
    Card,
    Row,
    Col
} from 'react-bootstrap'
import axios from '../helpers/AxiosCreate'

const Surah = (props) => {
    const [title, setTitle] = useState('')
    const [titleArab, setTitleArab] = useState('')
    const [ayat, setAyat] = useState([])
    const [isFooter, setIsFooter] = useState('')

    useEffect(()=>{
        axios.get("/surah/"+ props.match.params.id)
        .then((res)=>{
            setTitle(res.data.data.name.transliteration.id)
            setTitleArab(res.data.data.name.short)
            setAyat(res.data.data.verses)
            setIsFooter(true)
        })
        .catch((error)=>{
            console.log(error)
        })
    },[ayat])
    return(
        <Fragment>
            <NavbarComponent/>
            <div className="mt-5">&nbsp;</div>
            <Container fluid className="mt-3">
            <p className="fs-2">{title} {titleArab}</p>
            {ayat.map((item, index)=>{
                return(
                    <Card key={index} className="mt-1">
                        <Card.Body>
                            <Row>
                                <Col sm={1}>
                                    <span className="badge bg-secondary">{item.number.inSurah}</span>
                                </Col>
                                <Col sm={11}>
                                    <p className="text-end fs-1">{item.text.arab}</p>
                                    <p className="">{item.text.transliteration.en}</p>
                                    <p className="fst-italic">{item.translation.id}</p>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                )
                
            })}    
            </Container>
            {isFooter === true ?
                <FooterComponent/> : ''
            }
        </Fragment>
    )
}

export default Surah