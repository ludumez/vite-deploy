import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid2';
import { Link } from 'react-router-dom';

export function ParadiseMarsh() {
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
                               <a className='aIcon' href="https://www.linkedin.com/in/lukas-dumez-988a1a234/" target="_blank"><img className='Icon' src="https://raw.githubusercontent.com/ludumez/vite-deploy/refs/heads/main/src/assets/linkedin.jpg"></img></a>
                               <a className='aIcon'href="mailto:ludumez@hotmail.com" target="_blank"><img className='Icon' src="https://raw.githubusercontent.com/ludumez/vite-deploy/refs/heads/main/src/assets/email.jpg"></img></a>
                         </div>   
                   </Grid>
             </Grid>  
      </div>  
      
{/*------------------------------------------------------------------*/}
{/*----------------------------------Home--------------------------*/}
{/*-----------------------------------------------------------------*/}
      <Divider variant="middle"/>
      <p></p>
      <Link  className={"ResponsiveLink"} to='/'>Home</Link>  
      <p></p>
      <Divider variant="middle"/>

{/*------------------------------------------------------------------*/}
{/*----------------------------------Main Body--------------------------*/}
{/*-----------------------------------------------------------------*/}
       <p> </p>
       <div className='Separator'>
             <h2 className='Offset'>Paradise Marsh</h2>
       </div>              
       <p> </p>
        <Divider variant="middle"/>
       <div className='Card'>   
             <h2>English to Spanish Localization</h2>
             <p className='italic'>13 Octobre, 2022</p>
             <Grid container>
                   <Grid size={{ xs: 6, md: 6 }}>           
                         <div className="CardBody">

                              Stars vanished from the sky and scattered across a perfect endless wetland...
                              Catch bugs and chat with many characters while playfully wandering through peaceful scenery. 
                              But don't lose sight of the night sky, the constellations need help!                             
                             
                              <p><b>What I worked on: </b></p>
                              <ul>
                                    <li> Helped localize the game from English to Spanish</li>
                              </ul>
                              <p><b>Tools:</b> Excel.</p>
                         </div >
                   </Grid>
                   <Grid size={{ xs: 6, md: 6 }}>
                         <img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1709170/header.jpg?t=1726417223"></img>
                   </Grid>
             </Grid> 
                  <p></p>
             <div className="CardFooter">
                  <a  className={"ResponsiveLink"} href="https://store.steampowered.com/app/1709170/Paradise_Marsh/" target="_blank">Steam</a>
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
                               <a className='aIcon' href="https://www.linkedin.com/in/lukas-dumez-988a1a234/" target="_blank"><img className='Icon' src="https://raw.githubusercontent.com/ludumez/vite-deploy/refs/heads/main/src/assets/linkedin.jpg"></img></a>
                               <a className='aIcon'href="mailto:ludumez@hotmail.com" target="_blank"><img className='Icon' src="https://raw.githubusercontent.com/ludumez/vite-deploy/refs/heads/main/src/assets/email.jpg"></img></a>
                         </div>   
                   </Grid>
             </Grid> 
 
       </div> 
     </>
  )
}

