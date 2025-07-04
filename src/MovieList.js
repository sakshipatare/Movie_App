import React from "react";
import MovieCard from "./MovieCard";

//state:- build in object
class MovieList extends React.Component{

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
            movie : [
                {
                  title: 'The Avengers',                  
                  plot:
                    "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
                  poster:
                    'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
                  rating: '8.0',            
                  price: 99,            
                  stars: 0,
                  fav: false,
                  card: true                  
                },
                {
                  title: 'The Dark Knight',                  
                  plot:
                    'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
                  poster:
                    'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg',                  
                  rating: '9.0',            
                  price: 199,            
                  stars: 0,            
                  fav: false,
                  card: true                  
                },
                {
                  title: 'Iron Man',                 
                  plot:
                    'After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.',                  
                  poster:
                    'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg',                  
                  rating: '7.9',            
                  price: 139,            
                  stars: 0,            
                  fav: false,
                  card: true                  
                }]
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
      const {movie} = this.state;
      const movieID = movie.indexOf(movies);
       //         fav: !this.state.fav
       movie[movieID].card = !movie[movieID].card;
       this.setState({
            movie:movie
        })
    }
   
    render(){
        // const {title, plot, price, rating, stars, fav, card, poster} = this.state.movie;
        // or use map function
        const {movie} = this.state;
        return (
           <>
           {/* <MovieCard title={title} plot={plot} price={price} rating={rating} stars={stars} fav={fav} card={card} /> */}
           {/* or */}
           {movie.map((movies) =>  
           <MovieCard movie={movies} addStars = {this.handleIncState} subStars = {this.handleDecState} favBtn = {this.handleFavCard} addCard = {this.handleFAddCard}/>
           )}
           </>
        )
    }
}

export default MovieList;

//the setState is async and batched(when their are many setstate in one class it takes only last one)
//but in (prev) it take all call in batch`                                      