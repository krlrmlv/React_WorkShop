import React, { Component } from 'react'
import instaService from '../services/instaService'
import Error from './Error'

export default class Pallette extends Component {
    
    instaService = new instaService();
    state = {
        error : false,
        photos : [],
        loading : true
    }
    
    updatePhotos(){
        this.instaService.getAllPhotos()
        .then(this.onPhotosLoaded)
        .catch(this.onError)
    }
    
    onError = () =>{
        this.setState({
            error : true
        })
    }
    
    onPhotosLoaded = (photos) =>{
        this.setState({
            error : false,
            photos,
            loading : false
        })
    }
    
    componentDidMount(){
        this.updatePhotos();
    }
    
    
    renderItems(arr){
        return arr.map(item =>{
            const {src,alt} = item;
            return (
                <img src={src} alt={alt} />
                )
            })
        }
        
        
        render() {
            
            const {error,photos,loading} = this.state;
            
            if (loading){
                return (
                    <div>loading</div>
                )
            }
            
            if (error){
                return <Error />
            }
            
            
            const items = this.renderItems(photos);
            
            return (
                <div className="palette">
                    {items}
                </div>
                )
            }
        }
        