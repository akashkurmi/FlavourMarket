import React, { Component } from 'react'
import {Link} from 'react-router-dom'


class RecipesItems extends Component {
    render() {
        return (
            <div>
                
	{/* <!-- Recipes section --> */}
	<section className="recipes-page spad">
		<div className="container">
			<div className="row">
				<div className="col-md-8">
					<div className="section-title">
						<h2>Latest recipes</h2>
					</div>
				</div>
				<div className="col-md-4">
					<div className="recipe-view">
						<i className="fa fa-bars"></i>
						<i className="fa fa-th active"></i>
					</div>
				</div>
			</div>
			<div className="row">
			<div className="col-lg-4 col-md-6">
		<Link to={"/Recipes/SingleRecipe"}>
					<div className="recipe">
						<img src="images/1_96b63944-b272-4fe4-b6c6-cad1165ab88b_grande6683.jpg" alt="" width="320px" height="220px"></img>
						<div className="recipe-info-warp">
							<div className="recipe-info">
								<h3>Traditional Pizza</h3>
								<div className="rating">
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star is-fade"></i>
								</div>
							</div>
						</div>
					</div>
				</Link>
				</div>
				<div className="col-lg-4 col-md-6">
					<div className="recipe">
						<img src="images/56494483_162695328065711_4267480339786358474_n.jpg" alt=""></img>
						<div className="recipe-info-warp">
							<div className="recipe-info">
								<h3>Traditional Pizza</h3>

								<div className="rating">
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star is-fade"></i>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-lg-4 col-md-6">
					<div className="recipe">
						<img src="img/recipes/1.jpg" alt=""></img>
						<div className="recipe-info-warp">
							<div className="recipe-info">
								<h3>Traditional Pizza</h3>
								<div className="rating">
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star is-fade"></i>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-lg-4 col-md-6">
					<div className="recipe">
						<img src="img/recipes/1.jpg" alt=""></img>
						<div className="recipe-info-warp">
							<div className="recipe-info">
								<h3>Traditional Pizza</h3>
								<div className="rating">
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star is-fade"></i>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-lg-4 col-md-6">
					<div className="recipe">
						<img src="img/recipes/1.jpg" alt=""></img>
						<div className="recipe-info-warp">
							<div className="recipe-info">
								<h3>Traditional Pizza</h3>
								<div className="rating">
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star is-fade"></i>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	{/* <!-- Recipes section end --> */}
            </div>         
        )
    }
}

export default RecipesItems