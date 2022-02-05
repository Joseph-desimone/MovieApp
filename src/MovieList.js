import React from "react";
import Counter from './rating';
import Movie from "./Movies";
import Review from "./ReviewList";

export default class MovieList extends React.Component {
    render() {
        return (
            <div>
    <div className="card w-75">
                <div className="card-header bg-warning text-white">
                    <h3>Movie List</h3>
                </div>
                <div className="card-body">
                    <h3>
                       The Lego Batman Movie
                    </h3>
                    <Movie name="There are big changes brewing in Gotham, but if Batman (Will Arnett) wants to save the city from the Joker's (Zach Galifianakis) hostile takeover, he may have to drop the lone vigilante thing, try to work with others and maybe, just maybe, learn to lighten up."/>
                    <ul>
                        <li><Counter name="⭐⭐⭐⭐⭐" /></li>
                        <li><Counter name="⭐⭐⭐⭐" /></li>
                        <li><Counter name="⭐⭐⭐" /></li>
                        <li><Counter name="⭐⭐" /></li>
                        <li><Counter name="⭐" /></li>
                </ul>
                <Review/>
                </div>
                
            </div>
            
            </div>
        );
    }
    
}
