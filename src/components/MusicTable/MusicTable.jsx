import React from 'react';
import './MusicTable.css';


const MusicTable = (props)=> {
    return(
        <React.Fragment>
        <table>
          
           
            <th></th>
            <th>ID</th>
            <th>Title</th>
            <th>Album</th>
            <th>Artist</th>
            <th>Genre</th>
            <th>Release Date</th>
           
      
            

            
        {  props.mtable.map((s) =>{

                   

       return   <tr> 
                  <button onClick={(e) => props.hd(s.id, e)}>Delete </button>
                  <td>{s.id}</td>
                  <td>{s.title}</td>  
                  <td>{s.album}</td> 
                  <td>{s.artist}</td> 
                  <td>{s.genre}</td>
                  <td> {s.release_date}</td>

                  
                   
                 
                 </tr>
                

                })}
                               

        </table>   
        </React.Fragment>
    )
}

export default MusicTable;