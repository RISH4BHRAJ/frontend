import React from 'react';
import {Link} from 'react-router-dom';
//import {useState} from 'react';

function Home(){
    return(
        <section> 
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"/>
            <link rel="stylesheet" href="App.css"></link>
            <div className="welcomeScreen">
                <p></p>
                <br></br>
                Welcome.<br></br>
                <img src="https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg" alt="Burger" width="250" height="250" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpfhi0_tMWHe5U9bFZlTr4TVeBOZHhu_DVew&s" alt="Burger" width="250" height="250" />
                <img src="https://www.foodiesfeed.com/wp-content/uploads/2023/10/bowl-of-ice-cream-with-chocolate.jpg" alt="Burger" width="250" height="250" />
                <img src="https://www.foodiesfeed.com/wp-content/uploads/2023/12/seafood-soup.jpg" alt="Burger" width="250" height="250" />
                <p></p>
                <image></image>
                <div className="homeMsg">"Get Ready to Savor the Symphony of Spices: Dive into Authentic Indian Cuisine!"</div>
                <div className="quote">“Indulge in Flavor: Where Every Bite Tells a Story.” </div>
            </div>
            <Link to='/login'><button id="register-link" className="start-reservation">Make a reservation!</button></Link>
        </section>
    );
}

export default Home;