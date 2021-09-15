import React, { Component } from 'react';
import axios from 'axios';
import MusicTable from './MusicTable/MusicTable';
import SongForm from './SongForm/SongForm';



class App extends Component {
    constructor(props) {
        super(props);
        
        this.state ={
            songs : [],
           

           
        }
        
    }

    addSongs =(newSong) =>{
        console.log(newSong);
        // Make and axios POST request to our backend API and send the newSong in the body   
        axios.post('http://127.0.0.1:8000/music/',  newSong,)
        .then((response) => {
            console.log(response);
          }, (error) => {
            console.log(error);
          });

        this.getMusicInfo();

    }

   

    handleDelete = (id)=> {

        console.log(id);
        axios.delete(`http://127.0.0.1:8000/music/${id}/`)
        .then((response) => {
            console.log(response);
          }, (error) => {
            console.log(error);
          });
          

        this.getMusicInfo();


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

      /* async deleteMusicInfo (){
        let response = await axios.get('http://127.0.0.1:8000/music/1/' + 'id/');
        
        this.setState({
            song: response.data
        })    
     }*/


         
    render() { 
        return ( 
            
        <React.Fragment>
            <MusicTable mtable = {this.state.songs} hd = {this.handleDelete}/>
            <SongForm addNew ={this.addSongs} />
            

        </React.Fragment>
         );
    } 
    
}
 
export default App;