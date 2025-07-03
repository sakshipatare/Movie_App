import React from "react";

//state:- build in object
class MovieCard extends React.Component{
    // constructor(){
    //     super();
    //     this.state={
    //         title:"The Avengers",
    //         plot:"Supernatural power shown in the movie",
    //         price:199,
    //         rating:8.9,
    //         stars:0,
    //         fav: false,
    //         card: true,
    //     }
    // }

    //this will become undefine so bind should be done while calling 
    // addStars(){} //to avoid using bind use arrow function
    // addStars = () => {
    //     //this.state.stars += 0.5; //error it doesnot happenece soo...
    //     if(this.state.stars >= 5){
    //         return;
    //     }

    //     //use of useState :- form 1
    //     // this.setState({
    //     //     stars: this.state.stars + 0.5
    //     // });

    //     //form 2
    //     this.setState((prev) => {
    //         return{
    //             stars: prev.stars + 0.5
    //         }
    //     });
    // }

    // subStars = () => {
    //     if(this.state.stars <= 0){
    //         return;
    //     }
    //     this.setState({
    //         stars: this.state.stars - 0.5
    //     })
    // }

    // handleFav = () => {
    //     this.setState({
    //         fav: !this.state.fav
    //     })
    // }

    // handleCard = () => {
    //     this.setState({
    //         card: !this.state.card
    //     })
    // }

    render(){
        const {title, plot, price, rating, stars, fav, card} = this.props.movie || {}; {/* no it is shifted to the parent so props not state and because all in one in MovieList.js*/}
        return (
            <div className="main">
                <div className="movie-card">
                    <div className="left">
                        <img alt="Poster" src="https://filmartgallery.com/cdn/shop/products/The-Avengers-Vintage-Movie-Poster-Original_7886e41c.jpg?v=1741719179"/>
                    </div>
                    <div className="right">
                        {/* <div className="title">{this.props.title}</div> no i have put all in parent class that is movieList so it wont be state now it will props:- ols this.stste.title */}
                        <div className="title">{title}</div>
                        <div className="plot">{plot}</div>
                        {/*OR you can write this like this also by adding this:- const {title, plot, price, rating} = this.state; and then*/}
                        <div className="price">Rs. {price}</div>

                        <div className="footer">
                            <div className="rating">{rating}</div>
                            <div className="star-dis">
                                <img className="str-btn" alt="decrease" src="https://cdn-icons-png.flaticon.com/128/43/43625.png" onClick={this.subStars}/>
                                <img alt="star" src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" className="stars"/>
                                {/* <img className="str-btn" alt="increase" src="https://cdn-icons-png.flaticon.com/128/1828/1828925.png" onClick={this.addStars.bind(this)}/> */}
                                <img className="str-btn" alt="increase" src="https://cdn-icons-png.flaticon.com/128/1828/1828925.png" onClick={() => {this.props.addStars(this.props.movie)}}/>
                                <span>{stars}</span>
                            </div>

                            {fav? <button className="unfavourite-btn" onClick={this.handleFav}>Un-favourite</button> : 
                            <button className="favourite-btn" onClick={this.handleFav}>Favourite</button> }

                            {/* or */}

                            {/* <button className={fav ? "unfavourite-btn": "favourite-btn"} onClick={this.handleFav}>{fav?" Un-favourite":"Favourite"}</button>

                            or */}

                            {/* <button className="favourite-btn">Favourite</button>
                            <button className="unfavourite-btn">Un-favourite</button> */}

                            {/* <button className="cart-btn">Add to card</button> */}
                            
                            {/* or */}

                            {card? <button className="cart-btn" onClick={this.handleCard}>Add to card</button> : <button className="remove-btn" onClick={this.handleCard}>Remove from card</button>}
                        </div>
 
                    </div>
                </div>
            </div>
        )
    }
}

export default MovieCard;

//the setState is async and batched(when their are many setstate in one class it takes only last one)
//but in (prev) it take all call in batch`                                      