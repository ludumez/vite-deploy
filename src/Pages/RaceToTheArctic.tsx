import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid2';
import { Link } from 'react-router-dom';

export function RaceToTheArctic() {
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
             <h2 className='Offset'>Race For The Arctic</h2>
       </div>              
       <p> </p>
        <Divider variant="middle"/>
       <div className='Card'>   
             <h2>Programmer</h2>
             <p className='italic'>May 2022 - February 2023</p>
             <Grid container>
                   <Grid size={{ xs: 6, md: 6 }}>           
                         <div className="CardBody">

                              Developed by Episod Studio, Race for the Arctic is an 
                              immersive narrative game about exploring the Arctic in the near future.
                              
                              <p>Team size: 3</p>
                             
                              <p><b>What I worked on: </b></p>
                              <ul>
                                    <li> Developed various camera and transition systems..</li>
                                    <li> Developed the movement system.</li>
                                    <li> Developed the interaction system.</li>
                              </ul>
                              <p><b>Tools:</b> Unity, Shadergraph, Figma, Notion, SourceTree, Blender.</p>
                         </div >
                   </Grid>
                   <Grid size={{ xs: 6, md: 6 }}>
                         <img src="https://raw.githubusercontent.com/ludumez/vite-deploy/refs/heads/main/src/assets/RaceForTheArcticCaptura.jpg"></img>
                   </Grid>
             </Grid> 
                  <p></p>
             <div className="CardFooter">
                  <a  className={"ResponsiveLink"} href="https://www.episod.studio/race-for-the-arctic" target="_blank">Website</a>
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

