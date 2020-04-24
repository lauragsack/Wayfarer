import React, {Component} from 'react';
import Carousel from 'react-bootstrap/Carousel';

class Home extends Component {
	render(){
	    return (
			<div>
				<div>
					<h1>Wayfarer</h1>
					<Carousel>
					<Carousel.Item>
						<img
						className="d-block w-100"
						src="https://images.unsplash.com/photo-1490598000245-075175152d25?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
						alt="San Francisco"
						/>
					</Carousel.Item>
					<Carousel.Item>
						<img
						className="d-block w-100"
						src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
						alt="London"
						/>
					</Carousel.Item>
					<Carousel.Item>
						<img
						className="d-block w-100"
						src="https://images.unsplash.com/photo-1503152889424-9c280f38cb1c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
						alt="Gibraltar"
						/>
					</Carousel.Item>
					<Carousel.Item>
						<img
						className="d-block w-100"
						src="https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
						alt="Sydney"
						/>
					</Carousel.Item>
					</Carousel>
				</div>
					<br/>
					<h2 className="text-center">Wayfarer is...</h2>
					<br/>
					<div className="row justify-content-md-center">
						<div className="col-md">
							<h3>Topic 1</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
						</div>
						<div className="col-md">
							<h3>Topic 2</h3>
							<p>orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
						</div>
						<div className="col-md">
							<h3>Topic 3</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					</div>
  	</div>
				
			</div>
	    );
	}
}

export default Home;