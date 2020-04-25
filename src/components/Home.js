import React, {Component} from 'react';
import Carousel from 'react-bootstrap/Carousel';

class Home extends Component {
	render(){
		return (
			<div>
				<h1>Wayfarer</h1>
				<Carousel>
					<Carousel.Item>
						<img
							className="d-block w-100"
							src="https://images.unsplash.com/photo-1490598000245-075175152d25"
							alt="San Francisco"
							/>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className="d-block w-100"
							src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad"
							alt="London"
							/>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className="d-block w-100"
							src="https://images.unsplash.com/photo-1503152889424-9c280f38cb1c"
							alt="Gibraltar"
							/>
					</Carousel.Item>
				</Carousel>
			</div>
		);
	}
}

export default Home;
