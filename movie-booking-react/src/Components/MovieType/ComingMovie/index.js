import React, { Component, Fragment } from 'react'
import MovieItem from '../../MovieItem'
import {connect} from 'react-redux'
class ComingMovie extends Component {

    render() {
        let comingMovie=this.props.movieList.map((item,index)=>{
            return <MovieItem movie={item} key={index}/>
        })
        return (
           <Fragment>
               {comingMovie}
           </Fragment>
        )
    }
}

const mapStateToProps = state=>{
    return{
        movieList: state.movie.movieList
    }
}
export default connect(mapStateToProps)(ComingMovie);

