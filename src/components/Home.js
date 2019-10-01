import React, {Component} from 'react'
import Axios from 'axios'

class Home extends Component {
    state ={
        posts: [],
    }
    componentDidMount(){

        Axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            console.log(res)
            this.setState({
                posts: res.data.slice(0,10)
            });
        })
    }
    render() {
       const {posts} = this.state;
       const postList = posts.length?(posts.map(post =><div key={post.id}><p>{post.body}</p></div>)
        ) : (<div>No posts yet</div>);
        
        return (postList)
    }
}
export default Home;
