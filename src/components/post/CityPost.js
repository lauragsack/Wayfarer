import React, {Component} from 'react';
import { Link } from 'react-router-dom';


class CityPost extends Component {

  setAction(event){
    this.props.setAction(
      event.target.name,
      this.props.post
     );
  }

  render () {
    let postDate = Intl.DateTimeFormat('en-US').format(new Date(this.props.post.createdAt));

    return (
      <div className="card mt-3 mx-3">
        <div className="row">
          <div className="col">
            <div className="card-header navbar navbar-light bg-light">
              <Link
                className="navbar-brand mr-auto"
                to={`/posts/${this.props.post._id}`}>
                {this.props.post.title}
              </Link>
              <div className="btn-group">
                <button
                  className="btn btn-dark fas fa-pen"
                  name='edit'
                  onClick={this.setAction.bind(this)}
                  />
                <button
                  className="btn btn-dark fas fa-trash-alt"
                  name='delete'
                  onClick={this.setAction.bind(this)}
                  />
              </div>
            </div>
          </div>
        </div>
        <div className="card-body">
          <p className="card-text">{this.props.post.content}</p>
        </div>
        <div className="card-footer text-muted">
          <small className="card-text font-italic">
            Posted by {this.props.post.user.name} on {postDate}
          </small>
        </div>
      </div>
    );
  }
}

export default CityPost;
