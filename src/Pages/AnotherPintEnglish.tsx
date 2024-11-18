import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid2';
import { Link } from 'react-router-dom';

export function AnotherPintEnglish() {
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
      <Divider variant="middle"/>
      </div> 
       <p> </p>
            <div className='leftHeader'>
                  <Link className='SmallButton' to='/'>Home</Link>           
            </div>
            <br></br>
       <div className='Separator'>
            <h2 className='Offset'>Another Pint</h2>
       </div>   
       <p> </p>
        <Divider variant="middle"/>
       <div className='Card'>   
            <div className="CardBody">
                  <p>
                  Another Pint is currently under development, which means, i’m <b>not allowed to disclose any actual game screenshots or code that is used in the game. </b>
                  As such, in this page I will go over all the systems I took ownership of for Another Pint but wont show any real game examples. 
                  </p>
                  <p>
                  These are all <b>recreations and explanations</b> coming out of memory and experience.
                  </p>
            </div > 
       </div>  

       <Divider variant="middle"/>
       
       <div className='Card'> 
             <h2>Character Creation</h2>     
            <div className="CardBody">  
                  <p> Character creation in another pint had <b>4 main objectives:  </b></p>
                  <ul>
                        <li>Being able to customise your character.</li>
                        <li>Being able to reuse the system to procedurally generate new NPCs at runtime without any overhead.</li>
                        <li>Being able to easily add new components and customization options later on.</li>   
                        <li>Being able to save generated characters and player options and load later on. </li>         
                  </ul>  
                  <p> 
                        I decided on a <b>data driven</b> approach, where a character is loaded from a series of data points. 
                        I decided to separate the data into two groups. <b>Visual data</b> and <b>Personality data. </b> 
                  </p>
                  <p>
                        Visual data needs to be <b>retrieved </b>to rebuild the character's body. 
                        Personality data is a bunch of values that are <b>interpreted </b>by other systems. 
                  </p>
            </div>
            <img className='SmallerImage' src="https://raw.githubusercontent.com/ludumez/vite-deploy/refs/heads/main/src/assets/CharacterSeparation.JPG"></img>
       </div> 

       <div className='Card'> 
             <h3>Visual Data</h3>     
            <div className="CardBody">  
                  <p>
                  A key part of this data driven approach is being able to save selected prefabs we want to use for hair, beards or other accessories. 
                  <b> Monobehaviours can’t be serialized</b> and, as such, so can’t prefabs and we can’t save them. 
                  </p>                        
                  <p>
                  To fix this we keep a list of all possible accessories a 
                  character can have and we save its <b>index in that list</b>. This also has the benefit of saving memory since we are saving less data.  
                  </p>
                  <p>
                  The main drawback of indexing the selected accessories is that changing the order of these in the list will change the characters aspect.
                  </p>     
                  <img className='SmallerImage' src="https://raw.githubusercontent.com/ludumez/vite-deploy/refs/heads/main/src/assets/CharacterAspect.JPG"></img>
                  <p>
                  We also want to add variety to the character via body shapes. To do this we make use of the meshes <b>blend shapes</b> (or shape keys in blender). 
                  We have 3 body types which can blend two at a time.
                  Each accessory will have blend shapes that need to be individually adapted to look proper with each body type.
                  </p>                   
                  <img className='SmallerImage' src="https://raw.githubusercontent.com/ludumez/vite-deploy/refs/heads/main/src/assets/BlendShapeExample.gif"></img>
            </div>
       </div>       
       <div className='Card'> 
             <h3>Personality Data</h3>     
            <div className="CardBody">  
                  <p>
                  A Character’s personality is much easier to handle since we are only saving values that need to be interpreted by other systems.
                  </p>     
                  <img className='SmallerImage' src="https://raw.githubusercontent.com/ludumez/vite-deploy/refs/heads/main/src/assets/CharacterPersonality.JPG"></img>            
                  <br></br>
                  <p>
                  Once we have generated these data points we can make them <b>accessible very easily through the UI and modify them. </b> 
                  We also have the added benefit of making this data very easy to export and to inject into someone's game, 
                  potentially letting people make their own characters and making them public.
                  </p>                   
            </div>
       </div>  
      <div className='Card'> 
            <h3>Some notes</h3>     
            <div className="CardBody">  
                  <p>
                  <b>Character Instances: </b>
                  Another big benefit of this data driven approach is being able to reference these characters without them actually being in the world, which would cost more performance. 
                  </p>
                  <p>
                  Strictly differentiating between visual data and personality makes it so that <b>systems 
                  can interact with our NPCs or our player without the body actually being in the world</b> in any shape.
                  In Another Pint other systems can request specific NPCs for story telling reasons. 
                  With this approach <b>it is very easy to generate a NPC on demand with a target personality without much overhead</b> and then generate the actual body when it's needed.
                  </p>                   
            </div>
       </div>   <Divider variant="middle"/>
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
