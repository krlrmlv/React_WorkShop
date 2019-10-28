import React, { Component } from 'react'
// import Post from './Post'
import instaService from '../services/instaService'
import User from './User';
import Error from './Error';


export default class Posts extends Component {
    
    instaService  = new instaService();
    state = {
        posts:[],
        error : false
    }
    
    componentDidMount(){
        this.updatePosts();
    }
    
    updatePosts(){
        this.instaService.getAllPosts()
        .then(this.onPostsLoaded)
        .catch(this.onError)
    }
    
    
    onPostsLoaded = (posts) => {
        this.setState({
            posts,
            error : false
        })
    }
    
    onError = (err) => {
        this.setState({
            error : true
        })
    }
    
    renderItems(arr){
        return arr.map(item => {
            const {name,altname,photo, src, alt, descr,id} = item;
            
            return (
                <div key={id} className="post">
                <User src={photo} alt={altname} name={name} min />
                <img src={src} alt={alt} />
                <div className="post__name">
                {name} 
                </div>
                <div className="post__descr">
                {descr}
                </div>
                </div>
                )
            })
        }
        
        render() {
            const { error, posts } = this.state;

            if (error){
                return <Error />
            }
            
            const items = this.renderItems(posts)
            return (
                <div className="left">
            { items }
            </div>
            )
        }
    }
    