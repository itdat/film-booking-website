import React, { Component ,Fragment} from 'react'
import MovieItem from '../../MovieItem'
import {connect} from 'react-redux'

class AvailableMovie extends Component {
    
    render() {
        let availableMovies=this.props.movieList.map((item,index)=>{
            return <MovieItem movie={item} key={index}/>
        })
        return (
           <Fragment>
               {availableMovies}
           </Fragment>
        )
    }
}

const mapStateToProps = state=>{
    return{
        movieList: state.movie.movieList
    }
}
export default connect(mapStateToProps)(AvailableMovie);
