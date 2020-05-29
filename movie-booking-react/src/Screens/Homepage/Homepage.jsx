import React, { Component,Fragment} from 'react'
import Header from '../../Layout/Header'
import MyCarousel from '../../Layout/MyCarousel'
import Footer from '../../Layout/Footer'
import AvailableMovie from '../../Components/MovieType/AvailableMovie'
import MovieList from './MovieList'
import News from '../../Components/News'
import Showtime from '../../Components/Showtime'

export default class Homepage extends Component {
    
    render() {
        return (
            <Fragment>
                <Header/>
                <MyCarousel/>
                <MovieList/>
                <Showtime/>
                <News/>
                <Footer/>
            </Fragment>
        )
    }
}
