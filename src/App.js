import React from "react";
import MovieList from "./MovieList.js";
import Navbar from "./Navbar.js";
import { movie } from "./movieData.js";//to reduce the complexity we add that data to diff file.


import "./index.css"

class App extends React.Component{

  constructor(){
        super();
        // this.state={
        //     title:"The Avengers",
        //     plot:"Supernatural power shown in the movie",
        //     price:199,
        //     rating:8.9,
        //     stars:0,
        //     fav: false,
        //     card: true,
        // }

        this.state = {
            movie : movie,
            cartCount: 0
        } 
    }

    handleIncState = (movies) => {
        const {movie} = this.state;
        const movieID = movie.indexOf(movies);

        if(movie[movieID].stars >= 5){
            return; 
        }
        movie[movieID].stars += 0.5;
        this.setState({
            movie:movie
        })
    }

    handleDecState = (movies) => {
        const {movie} = this.state;
        const movieID = movie.indexOf(movies);

        if(movie[movieID].stars <= 0){
            return; 
        }
        //         stars: this.state.stars - 0.5
        movie[movieID].stars -= 0.5;
        this.setState({
            movie:movie
        })
    }

    handleFavCard = (movies) => {
      const {movie} = this.state;
      const movieID = movie.indexOf(movies);
       //         fav: !this.state.fav
       movie[movieID].fav = !movie[movieID].fav;
       this.setState({
            movie:movie
        })
    }

    handleFAddCard = (movies) => {
      let {movie, cartCount} = this.state;
      const movieID = movie.indexOf(movies);
       //         fav: !this.state.fav
       movie[movieID].card = !movie[movieID].card;

       if(movie[movieID].card){
        cartCount += 1;
       }else{
        cartCount -= 1;
       }

       this.setState({
            movie:movie,
            cartCount
        })
    }

  render(){
    const {movie, cartCount} = this.state;
    return (
    <>
      <Navbar cartCount={cartCount}/>
      <MovieList  movie = {movie} 
                      addStars = {this.handleIncState} 
                      subStars = {this.handleDecState} 
                      favBtn = {this.handleFavCard} 
                      addCard = {this.handleFAddCard}/>
    </>
    );
  }
}

export default App;
