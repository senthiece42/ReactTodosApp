import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Home extends Component {


    /**
    state = {
        posts: []
    };

    componentDidMount() {
        let _this = this;
        Axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(function(res){
            _this.setState({
                posts: res.data.slice(0, 10)
            });
        });
    }**/

    render(){

        console.log(this.props);

        //let { posts } = this.state;
        let { posts } = this.props;

        const postList = posts.length ? (
            posts.map(post => {
                return (
                    <div className="card shadow-sm my-3" key={post.id}>
                        <div className="card-body">                            
                            <h5 className="card-title"><Link to={'/'+post.id}>{post.title}</Link></h5>                            
                            <p className="card-text">{post.body}</p>
                        </div>
                    </div>
                );
            })
        ) : (            
            <div className="card shadow-sm my-3">
                <div className="card-body">
                <p className="card-text text-center">No Posts yet</p>
                </div>
            </div>
        );

        return (
            <div className="container">
                <h4 className="text-center">Home</h4>
                {postList}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    //console.log(state);
    return {
        posts: state.posts.posts
    };
};

export default connect(mapStateToProps)(Home);