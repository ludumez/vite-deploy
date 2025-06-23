import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid2';
import { Link } from 'react-router-dom';

export function BratzRythmAndStyle() {
  return (
      <>     
  <div className='Card'> 
             <Grid container>                  
                   <Grid size={{ xs: 6, md: 6 }}>    
                   <p>ludumez@hotmail.com</p>
                   </Grid>  
                   <Grid size={{ xs: 6, md: 6 }}> 
                         <p></p>
                         <div className='CardFooter'>
                               <a className='aIcon' href="https://www.linkedin.com/in/lukas-dumez-988a1a234/" target="_blank">   <img className='Icon' src="https://raw.githubusercontent.com/ludumez/vite-deploy/refs/heads/main/src/assets/linkedin.jpg"></img></a>
                               <a className='aIcon'href="mailto:ludumez@hotmail.com" target="_blank">  <img className='Icon' src="https://raw.githubusercontent.com/ludumez/vite-deploy/refs/heads/main/src/assets/email.jpg"></img></a>
                         </div>   
                   </Grid>
             </Grid>  
      </div>  
      
{/*------------------------------------------------------------------*/}
{/*----------------------------------Home--------------------------*/}
{/*-----------------------------------------------------------------*/}
      <Divider variant="middle"/>
      <p></p>
      <Link className='SmallButton' to='/'>Home</Link>  
      <p></p>
      <Divider variant="middle"/>

{/*------------------------------------------------------------------*/}
{/*----------------------------------Main Body--------------------------*/}
{/*-----------------------------------------------------------------*/}
       <p> </p>
       <div className='Separator'>
             <h2 className='Offset'>Bratz Rythm And Style</h2>
       </div>              
       <p> </p>
        <Divider variant="middle"/>
       <div className='Card'>   
             <h2>FQA with aditional LQA support</h2>
             <p className='italic'>12 September, 2025</p>
             <Grid container>
                   <Grid size={{ xs: 6, md: 6 }}>           
                         <div className="CardBody">
                               Rule the runway and take the stage with the Bratz Pack! Customize fierce fashions, 
                               groove to songs from the Bratz Universe like ‘So Good’, and jet off to iconic cities. 
                               Outshine mean Burdine and the Tweevil Twins in epic fashion battles—solo or with friends. 
                               <p><b>What I worked on: </b></p>
                               <ul>
                                     <li>Provided FQA for the full release of the game.</li>
                                     <li>Helped QA meets deadlines for full release on <b>Nintendo Switch, Xbox Series and One and Playstation 4 and 5. </b></li>
                                     <li>Leveraged my language skill to give additional LQA support in <b>English, Spanish, Dutch, French, German and Chinese.</b></li>
  
                               </ul>
                               <p><b>Tools:</b> Jira, Teams, Xbox One and Series, Nintendo Switch, PlayStation 4 and 5, Steam.</p>
                         </div >
                   </Grid>
                   <Grid size={{ xs: 6, md: 6 }}>
                         <img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3212580/e191789d5852ed5c2c27183888ca58017b5378fb/header.jpg?t=1750407348"></img>
                   </Grid>
             </Grid> 
                  <p></p>
             <div className="CardFooter">
                  <a href="https://store.steampowered.com/app/3212580/Bratz_Rhythm__Style/" target="_blank">Steam</a>
             </div>  
       </div> 
       <p> </p>
             
{/*------------------------------------------------------------------*/}
{/*----------------------------------Footer--------------------------*/}
{/*-----------------------------------------------------------------*/}
      <br></br>
      <Divider variant="middle"/>
       <div className='Card'> 
             <Grid container>                  
                   <Grid size={{ xs: 6, md: 6 }}>    
                   <p>ludumez@hotmail.com</p>
                   </Grid>  
                   <Grid size={{ xs: 6, md: 6 }}> 
                         <p></p>
                         <div className='CardFooter'>
                               <a className='aIcon' href="https://www.linkedin.com/in/lukas-dumez-988a1a234/" target="_blank">   <img className='Icon' src="https://raw.githubusercontent.com/ludumez/vite-deploy/refs/heads/main/src/assets/linkedin.jpg"></img></a>
                               <a className='aIcon'href="mailto:ludumez@hotmail.com" target="_blank">  <img className='Icon' src="https://raw.githubusercontent.com/ludumez/vite-deploy/refs/heads/main/src/assets/email.jpg"></img></a>
                         </div>   
                   </Grid>
             </Grid> 
 
       </div> 
     </>
  )
}

