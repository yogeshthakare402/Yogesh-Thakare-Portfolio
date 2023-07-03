import React from 'react';
import {Link} from 'react-router-dom';

function Work() {
  return (
    <div>



<div className='portfolio'>
          <h2>My Last Projects are :- </h2>
        </div>
        <div>
          <div id='card'>
            <div className='card'>
              <Link className='links' to={"https://reale-estate-app.netlify.app/"} target={"_blank"}>
                <img id='realestate' src={window.location.origin + '/realestate.png'} alt="realestate" />
                <h3>Real Estate Project</h3>
              </Link>
            </div>

            <div className='card'>
              <Link className='links' to={"https://real-estate-app-2.netlify.app/"} target={"_blank"}>
                <img id='realestate2' src={window.location.origin + '/realestate2.png'} alt="realestate" />
                <h3>Real Estate Project 2</h3>
              </Link>
            </div>


            <div className='card'>
              <Link className='links' to={"https://shopping-cart-yt.netlify.app/"} target={"_blank"}>
                <img id='shoppingcart' src={window.location.origin + '/Shopping_Cart.png'} alt="shoppingCart" />
                <h3>Shopping Cart</h3>
              </Link>
            </div>

            <div className='card'>
              <Link className='links' to={"https://recipeapp-yogesh.netlify.app/"} target={"_blank"}>
                <img id='recipeApp' src={window.location.origin + '/Recipe_App.png'} alt="RecipeApp" />
                <h3>Recipe App</h3>
              </Link>
            </div>

            <div className='card'>
              <Link className='links' to={"https://gallery-app-yogesh.netlify.app/"} target={"_blank"}>
                <img id='galleryApp' src={window.location.origin + '/Gallery_App.png'} alt="galleryApp" />
                <h3>Gallery App</h3>
              </Link>
            </div>

            <div className='card'>
              <Link className='links' to={"https://shopping-cart-yt.netlify.app/"} target={"_blank"}>
                <img id='instaclone' src={window.location.origin + '/Instaclone.png'} alt="instaclone" />
                <h3>Instaclone</h3>
              </Link>
            </div>
            

          </div>
        </div>
    </div>
  )
}

export default Work