import React, { Component } from 'react';
import './SongForm.css'


class SongForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            title:" ",
            album: "",
            artist: '',
            genre: "",
            release_date: "",
           
           
            
        }
    }

    

    handleChange = (event)=> {
        
        
        this.setState({
            [event.target.name]: event.target.value,
            
            
             
        });
    }



    handleSubmit = (event)=> {
        event.preventDefault();       
        const newSong= {
            title: this.state.title, 
            album: this.state.album, 
            artist: this.state.artist,
            genre: this.state.genre, 
            release_date: this.state.release_date
        };
        this.props.addNew(newSong);      

        //console.log(this.state.newSong.artist);
        //console.log(this.props.musics.artist);
    };


    render() { 
        return (  
        <form onSubmit={this.handleSubmit}>
            <label htmlFor='title'> Title:</label> 
            <input name= 'title' onChange={this.handleChange} value = {this.state.title}/>
            <label htmlFor='album'> Album:</label> 
            <input  name= 'album' onChange={this.handleChange} value = {this.state.album}/>
            <label htmlFor='artist'> Artist:</label> 
            <input  name= 'artist' onChange={this.handleChange} value = {this.state.artist}/>
            <label htmlFor='genre'> Genre:</label> 
            <input  name= 'genre' onChange={this.handleChange} value = {this.state.genre}/>
            <label htmlFor='release_date'> Release Date:</label> 
            <input  name= 'release_date' onChange={this.handleChange} value = {this.state.release_date}/>
            <button type='submit'> Add New Song</button>
        </form>
        );
    }
}
 
export default SongForm;