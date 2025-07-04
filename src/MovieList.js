import React from "react";
import MovieCard from "./MovieCard.js";
//state:- build in object
class MovieList extends React.Component{

    // move this all to App.js as a parent
   
    render(){
        // const {title, plot, price, rating, stars, fav, card, poster} = this.state.movie;
        // or use map function
        const {movie, addStars, subStars, favBtn, addCard } = this.props;
        return (
           <>
           {/* <MovieCard title={title} plot={plot} price={price} rating={rating} stars={stars} fav={fav} card={card} /> */}
           {/* or */}
           {movie.map((movies) =>  
           <MovieCard movie={movies} 
                      addStars = {addStars} 
                      subStars = {subStars} 
                      favBtn = {favBtn} 
                      addCard = {addCard}
                      key ={movie.id}/>
           )}
           </>
        ) 
    }
}

export default MovieList;

//the setState is async and batched(when their are many setstate in one class it takes only last one)
//but in (prev) it take all call in batch`                                      