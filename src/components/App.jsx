import React, { Component } from 'react';
import axios from 'axios';



class App extends Component {
    constructor(props) {
        super(props);
        this.my_musics = [{song_title:" t", album: "alb", artist: "art", genre: "gen", release_date: "date" }];
        this.state ={
            
        }
        
    }
    componentDidMount(){
        this.getMusicInfo ()

    }  
    async getMusicInfo (){
        let response = await axios.get('http://127.0.0.1:8000/music/');
        
        this.setState({
            songs: response.data
        })
        console.log(response.data);
    
       }
         
    render() { 
        return ( 
            <React.Fragment>
               {this.my_musics.map((musicinfo) =>{

                  return<h4>  Title: {musicinfo.song_title}  Album: {musicinfo.album}  Artist: {musicinfo.artist}  Genre: {musicinfo.genre} Release Date: {musicinfo.release_date}</h4>
                  
               })}

               
            </React.Fragment>
         );
    }
}
 
export default App;