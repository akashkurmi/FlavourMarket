import React, { PureComponent } from 'react';
import './Recipes.css';
import './bootstrap.min.css'
import {} from 'react-bootstrap'
import RecipesItems from './RecipesCompnent/RecipesItems';
import SingleRecipe from './RecipesCompnent/SingleRecipe';
import { Switch, Route } from 'react-router-dom';

class Recipes extends PureComponent {
    
    render() {
        return (
            <div className="blurBackground">
            
			    {/* <h1>All Recipes</h1> */}

                {/* <!-- Hero section --> */}
	<section className="page-top-section set-bg"  style={{backgroundImage:"url(images/single-big.jpg)",backgroundSize: "cover"}}>
		<div className="container">
			<h2>Recipe</h2>
		</div>
	</section>
	{/* <!-- Hero section end --> */}


	{/* <!-- Search section --> */}
	<div className="search-form-section">
		<div className="sf-warp">
			<div className="container">
				<form className="big-search-form">
					<select>
						<option>All Recipes Categories</option>
						<option>Pizza</option>
						<option>Salads</option>
						<option>Desserts</option>
						<option>Side Dishes</option>
					</select>
					<select>
						<option>All Ingredients</option>
						<option>Breakfast</option>
						<option>Lunch</option>
						<option>Dinner</option>
					</select>
					<input type="text" placeholder="Search Receipies"></input>
					<button className="bsf-btn">Search</button>
				</form>
			</div>
		</div>
	</div>
	{/* <!-- Search section end --> */}

{/* <RecipesItems></RecipesItems> */}
{/* <SingleRecipe></SingleRecipe> */}
<Switch>
	<Route path="/Recipes/SingleRecipe" component={SingleRecipe}></Route>
	<Route path="/" component={RecipesItems}></Route>
				
</Switch>

	{/* <!-- Gallery section --> */}
	{/* <div className="gallery">
		<div className="gallery-slider owl-carousel">
			<div className="gs-item set-bg" data-setbg="img/instagram/1.jpg"></div>
			<div className="gs-item set-bg" data-setbg="img/instagram/2.jpg"></div>
			<div className="gs-item set-bg" data-setbg="img/instagram/3.jpg"></div>
			<div className="gs-item set-bg" data-setbg="img/instagram/4.jpg"></div>
			<div className="gs-item set-bg" data-setbg="img/instagram/5.jpg"></div>
			<div className="gs-item set-bg" data-setbg="img/instagram/6.jpg"></div>
		</div>
	</div> */}
	{/* <!-- Gallery section end --> */}


            </div>
        )
    }
}
export default Recipes;