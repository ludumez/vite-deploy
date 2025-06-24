import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid2';
import { Link } from 'react-router-dom';

export function TheGrinch() {
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
             <h2 className='Offset'>The Grinch: Christmas Adventure. Update.</h2>
       </div>              
       <p> </p>
        <Divider variant="middle"/>
       <div className='Card'>   
             <h2>FQA</h2>
             <p className='italic'>To be announced</p>
             <Grid container>
                   <Grid size={{ xs: 6, md: 6 }}>           
                         <div className="CardBody">
                               The Grinch has had a wonderful, awful idea – steal all the presents in Who-ville, using gadgets like his stealthy Santa costume
                               and Candy Cane Lasso. Help him sneak around, freeze creatures with snowballs, 
                               and learn the meaning of Christmas along the way, in this festive platformer! 
                               <p><b>What I worked on: </b></p>
                               <ul>
                                     <li>Provided FQA for the full release of their next update.</li>
                                     <li>Helped QA meets deadlines for full release on <b>Nintendo Switch, Xbox Series and One and Playstation 4 and 5. </b></li>
                                     <li>Leveraged my language skill to give additional LQA support in <b>English, Spanish, Dutch, French, German and Chinese.</b></li>
  
                               </ul>
                               <p><b>Tools:</b> Jira, Teams, Xbox One and Series, Nintendo Switch, PlayStation 4 and 5, Steam.</p>
                         </div >
                   </Grid>
                   <Grid size={{ xs: 6, md: 6 }}>
                         <img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1978210/header.jpg?t=1701706239"></img>
                   </Grid>
             </Grid> 
                  <p></p>
             <div className="CardFooter">
                  <a  className={"ResponsiveLink"} href="https://store.steampowered.com/app/1978210/The_Grinch_Christmas_Adventures/" target="_blank">Steam</a>
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

