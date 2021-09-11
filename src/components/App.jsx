import React, { Component } from 'react';
import axios from 'axios';



class App extends Component {
    constructor(props) {
        super(props);
        this.my_musics = [{song_title:" t", album: "alb", artist: "art", genre: "gen", release_date: "date" }];
        this.state ={
            songs : []
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
        
    
       }
         
    render() { 
        return ( 
            <React.Fragment>
            <table>
               <tr>
                <th>Title</th>
                <th>Album</th>
                <th>Artist</th>
                <th>Genre</th>
                <th>Release Date</th>
            </tr>
                

               {this.state.songs.map((song) =>{
                 
                  return   <tr> 
                            <td>{song.title}</td> 
                            <td>{song.album}</td> 
                            <td>{song.artist}</td> 
                            <td>{song.genre}</td>
                            <td> {song.release_date}</td>
                           
                           
                           </tr>
                
               })}

            </table>   
            </React.Fragment>
         );
    }
}
 
export default App;