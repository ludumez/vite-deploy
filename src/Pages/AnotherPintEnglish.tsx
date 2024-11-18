import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid2';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

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

      <div>
            <li>
            <HashLink className='NormalButton' to="#CharacterCreation">Character Creation</HashLink>
            </li> 
            <li>
            <HashLink  className='NormalButton' to="#UserInterface">User Interface</HashLink>
            </li>
      </div>


       <Divider variant="middle"/>
       
       <div className='Card' id="CharacterCreation"> 
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
       </div>   

       <Divider variant="middle"/>
       <div id="div_id"></div>
       <div className='Card' id="UserInterface"> 
             <h2>User Interfrace</h2>     
            <div className="CardBody">  
                  <br></br>
                  <p>
                        In Another Pint I was in charge of implementing most UI in the game. 
                  </p>
                  <p>
                        Since this is a management game the biggest challenge we had was a way to handle all the menu logic in the game. Since some menus are meant to be opened only on given conditions, 
                        or we want to force the closing of the inventories we need a way to control all the UI states.
                  </p>
                  <p>
                        For UI implementation I was given a UI design and the final assets needed for it and I was in charge of adding any UX and feedback to make the UI feel better.
                        Below are some examples of the UI implementation I made.
                  </p>
            </div>
       </div> 

       <div className='Card'> 
             <h3>Animation On Mouse Event</h3>     
            <div className="CardBody"> 
                  <p>
                        This one is our most effective component. We can easily give more feedback to the player when interacting with the UI.
                  </p>
                  <p>
                        To do this I made a script that looks for all the mouse events a UI element can have: mouse enter, mouse click,
                        mouse exit, mouse stay and I follow the philosophy of<b> Expectation → Action → Reaction </b>
                  </p>
                  <p>
                        When designing the UX I always implement a feedback on hover to indicate the UI is <b>interactable, </b>
                        on click to <b>indicate the UI has been interacted with </b> and after click, to indicate the UI <b>has done its interaction.</b>
                  </p> 
                  <img className='SmallerImage' src="https://raw.githubusercontent.com/ludumez/vite-deploy/refs/heads/main/src/assets/UIComponent.JPG"></img>
           
                  <p>
                  I used a Tweening library to facilitate the animations and to have more control on the timing of the animations.
                  </p>
                  <p>
                  The main benefit of this system is that you just have to add a single component and don’t need to implement any behaviour logic that might be repeated multiple times.
                  </p>
                  <p>
                  We also have the benefit of having all visual behaviour coming from the same input.
                  </p>

                  <img className='SmallerImage' src="https://raw.githubusercontent.com/ludumez/vite-deploy/refs/heads/main/src/assets/UIFeedbackComponent.JPG"></img>
                  <img className='SmallerImage' src="https://raw.githubusercontent.com/ludumez/vite-deploy/refs/heads/main/src/assets/ScaleOnClick.JPG"></img>
                  <img className='SmallerImage' src="https://raw.githubusercontent.com/ludumez/vite-deploy/refs/heads/main/src/assets/ScaleOnMouse.JPG"></img>

                  <p>
                  The main drawback of this system is that we may be sacrificing some performance by applying some unused behaviour to the components.
                 </p>
                 <img className='SmallerImage' src="https://raw.githubusercontent.com/ludumez/vite-deploy/refs/heads/main/src/assets/UIFeedbackGif.gif"></img>
                  <p>
                  Example of a final result with just 5 minutes of setup with this system.     
                  </p>
           
            </div>
       </div>       
       <div className='Card'> 
             <h3>Menu Manager</h3>     
            <div className="CardBody">  
                  <p>
                  In Another Pint there are a lot of menus. There are cases where we want to open a specific menu from a given system, or we want to close all menus or any other varied reasons.
                  </p> 
                  <p>
                  I implemented a menu manager and a menu abstract component that handles the opening and closing logic of all menus.
                  </p>    
                  <img className='SmallerImage' src="https://raw.githubusercontent.com/ludumez/vite-deploy/refs/heads/main/src/assets/UIMenuManager.JPG"></img>            
                  <img className='SmallerImage' src="https://raw.githubusercontent.com/ludumez/vite-deploy/refs/heads/main/src/assets/UIMenu.JPG"></img>            
                  <img className='SmallerImage' src="https://raw.githubusercontent.com/ludumez/vite-deploy/refs/heads/main/src/assets/MenuManagerGif.gif"></img>            
                  <br></br>
                  <p>
                  An example of easy to add behaviour to menu management thanks to the menu system.
                  </p>                   
            </div>
       </div> 
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

