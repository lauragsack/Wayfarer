import React, {Component} from 'react';
import Carousel from 'react-bootstrap/Carousel';

class Home extends Component {
	render(){
	    return (
			<div>
				<div>
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
					<div className="row justify-content-center">
						<div className="col-md">
							<h4>See the world</h4>
							<p>Ready for your next adventure but not sure where to go or what to do when you get there? Enter Wayfarer. Explore cities and read posts to get ready for your best trip yet.</p>
						</div>
						<div className="col-md">
							<h4>Share the world</h4>
							<p>Know of an awesome hike? Eat the best meal of your life? Your Wayfarer community wants to know! Hit us with a post and keep the travel vibes vibing.</p>
						</div>
						<div className="col-md">
							<h4>Repeat</h4>
							<p>After you tell us all about your latest trip, start planning your next great adventure right here on Wayfarer. We can't wait for you to start the journey with us.</p>
					</div>
  	</div>
				
			</div>
	    );
	}
}

export default Home;
