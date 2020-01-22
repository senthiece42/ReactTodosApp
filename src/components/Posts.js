import React, { Component } from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';
import { deletePost } from '../actions/postActions';

class Posts extends Component {

    /***
    state = {
        post: null
    };

    componentDidMount() {
        let id = this.props.match.params.post_id;
        Axios.get('https://jsonplaceholder.typicode.com/posts/'+id)
            .then( res => {
                this.setState({
                    post: res.data
                });
            });

    }
    ***/

   handleClick = () => {
       this.props.deletePost(this.props.post.id);
       this.props.history.push('/');
   }

    render() {
        console.log(this.props);
        const post  = this.props.post ? (
            <div className="card my-3 border-0">
                <div className="card-header bg-white border-0">
                    <h5 className="card-title text-center">{this.props.post.title}</h5>
                </div>
                <div className="card-body">
                    <p className="card-text">{this.props.post.body}</p>
                    <div className="text-right" onClick={this.handleClick}>
                        <button className="btn btn-danger">Delete</button>
                    </div>
                </div>
            </div>
        ): (
            <div className="text-center my-3">Loading Posts...</div>
        );

        return (
            <div className="container">
                {post}
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    //console.log(state, ownProps);
    let id = +ownProps.match.params.post_id;
    return {
        post: state.posts.posts.find(post => post.id === id)
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        //deletePost: (id) => { dispatch({type: 'DELETE_POST', id: id}); }
        deletePost: (id) => { dispatch(deletePost(id)); }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Posts);