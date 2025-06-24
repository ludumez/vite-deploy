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
      <Link  className={"ResponsiveLink"}  to='/'>Home</Link>  
      <p></p>
      <Divider variant="middle"/>


{/*------------------------------------------------------------------*/}
{/*----------------------------------Body--------------------------*/}
{/*-----------------------------------------------------------------*/}
        <Divider variant="middle"/>
       <p> </p>
       <div className='Separator'>
             <h2 className='Offset'>Another Pint</h2>
       </div>              
       <p> </p>
        <Divider variant="middle"/>
       <div className='Card'>   
             <h2>Lead Systems Programmer</h2>
             <h3>Another Pint</h3>
             <p className='italic'>February 2023 - October 2024</p>
             <Grid container>
                   <Grid size={{ xs: 6, md: 6 }}>           
                         <div className="CardBody">
                               <p> Developed by <b>Williwaw Games</b>, Another Pint is a dynamic management game where you get to build and run your own medieval tavern. Tasked with taking over a barebones shack, where you take it is up to you.  </p>
                               <p><b>Team size:</b> 9</p>
                               <p><b>What I worked on: </b></p>
                               <ul>
                                     <li>Led the programming team.</li>
                                     <li>Implemented system driven RPG elements.</li>
                                     <li>Developed and implemented shader improvements and optimizations.</li>  
                                     <li>Implemented a character animation system.</li>  
                                     <li>Developed character creation and NPC generation.</li>  
                                     <li>Developed and polished build mode UX.</li>  
                                     <li>Many many more things.</li>  
                               </ul>
                               <p><b>Tools:</b> Unity, Unity Input System, Shadergraph, Azure Devops, Git, Visual Studio, Blender, Two Notebooks.</p>
                         </div >
                   </Grid>
                   <Grid size={{ xs: 6, md: 6 }}>
                         <img src="https://raw.githubusercontent.com/ludumez/vite-deploy/refs/heads/main/src/assets/AnotherPint.jpg"></img>
                   </Grid>
             </Grid> 
                  <p></p>
             <div className="CardFooter">
                  <a  className={"ResponsiveLink"} href="https://store.steampowered.com/app/3150160/Another_Pint/" target="_blank">Steam</a> 
                  <a  className={"ResponsiveLink"} href="https://anotherpint.williwawgames.com" target="_blank">Website</a> 
             </div>  
       </div> 
       <p> </p>
      <Divider variant="middle"/>

       <div className='Card'>   
            <div className="CardBody">
                  <p>
                  Another Pint is currently under development, which means, i’m <b>not allowed to disclose any actual game screenshots or code that is used in the game. </b>
                  As such, in this page I will go over some of the systems I took ownership of for Another Pint but wont show any real game examples. 
                  </p>
                  <p>
                  These are all <b>recreations and explanations</b> coming out of memory and experience.
                  </p>
            </div > 
       </div>  

      <div>
            <li>            <HashLink className='NormalButton' to="#CharacterCreation">Character Creation</HashLink>            </li> 
            <li>            <HashLink  className='NormalButton' to="#UserInterface">User Interface</HashLink>            </li>
            <li>            <HashLink  className='NormalButton' to="#MetaProgression">Meta Progression</HashLink>            </li>
            <li>            <HashLink  className='NormalButton' to="#Shaders">Shaders</HashLink>            </li>
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
       <div id="div_id"></div>
       <div className='Card' id="MetaProgression"> 
             <h2>Meta Progression</h2>     
            <div className="CardBody">  
                  <br></br>
                  <p>
                  In Another Pint the player has the ability to level up, gain knowledge and experience and to upgrade the world. 
                  NPCs and the world react to the player's progression modifying the game's difficulty.
                  </p>                 
            </div>
       </div> 

       <div className='Card' > 
             <h3>World progression</h3>     
            <div className="CardBody"> 
                  <p>
                  All systems derive their difficulty and settings from the current World Level. 
                  Another Pint is a tavern management game and as such our World Level is derived from our current tavern reputation 
                  as well as the player level.                        
                  </p>
                  <p>
                  As inspiration we looked at the way Genshin Impact handles world progression. 
                  We divide the world level into distinct tiers. 
                  Inside each tier we have a number of world levels but to jump from one tier to another a requirement of 
                  player level and tavern reputation needs to be met. 
                  </p>
                  <p>                        
                  This ensures that system elements we unlock don’t get locked back once we fall 
                  back on tavern reputation after the difficulty of the game has gone up. 
                  But it also ensures that there is meaningful progression where you don’t feel locked out after a single bad day.                  
                  </p>
                  <p>                        
                  Most actions in Another Pint grant experience and player levels, while tavern reputation gain has a potential 
                  max amount you can gain per game day. This means we can have better control of the overall difficulty progression while 
                  still rewarding the player who wants to progress quickly.                  
                  </p>
                  <p>                        
                  To mitigate the damage a very good day or a very bad day can have to your tavern reputation, 
                  the actual world difficulty takes a couple of days to catch up to the real value. 
                  This ensures that there aren’t huge spikes of difficulty.                   
                  </p>
                  <p>
                  Details: Currently the world is designed around 4 world tiers, up to player level 50.
                   Where parts of some systems are unlocked one their target tier is reached. 
                   We control the values of the systems through a progression curve.                    
                   </p>
                   <p>                        
                   One system dependent on world progression is the NPC generation. 
                   We have a target number of NPCs that want to go to the tavern, this value increases with the world level. 
                   Once the world level is over player level 50 we extrapolate these targets values from the given progression curve.
                  </p>
            </div>
       </div>
       <div className='Card'> 
             <h3>Player Level</h3>     
            <div className="CardBody"> 
                  <p>
                  In Another Pint the Player gains experience for most actions he commits. The player has a series of attributes, 
                  like strength or charisma. Whenever you interact with a system, like the dialogue system or the resources system, 
                  you gain experience in a given attribute. This experience gain onto the attribute translates to experience gain to the player level. 
                  </p>
                  <p>
                  Attributes can level up as well as the player level. 
                  Whenever the player levels up he gains an attribute point he gets to spend. 
                  This ensures that the player is rewarded by repeatedly interacting with the same system but can also decide to 
                  spend those extra points into attributes he doesn't interact with if he feels so.
                  </p>
                  <p>
                  The player level is used as a condition to trigger some quests and for the world progression. 
                  </p>
                  <p>
                  The amount of experience needed for a player to reach the next level is controlled by a curve with a given max level of 50. 
                  Once it reaches level 50 it extrapolates the next amount of experience needed from the given curve.
                  </p>
                       
                 
            </div>
       </div><div className='Card'> 
             <h3>Probability             </h3>     
            <div className="CardBody"> 
                  <p>
                  One key part of Another Pint is the randomness. 
                  We want each playthrough to be unique and as such most systems have randomness applied to them.
                  </p>
                  <p>
                  One of the biggest problems we were facing is people not feeling rewarded when exploring after having progressed enough in the game. 
                  To mitigate this we wanted to better control the chance and the quality of the loot, 
                  as well as the complexity of the structures by implementing a probability system.
                  </p>
                  <p>
                  The probability system meant to influence the players luck. 
                  It is a system that mathematically produces a probability curve. 
                  It being generated mathematically means we can easily move the peak and valley of these curves to make the player be “more lucky”.
                  </p>
                  <p>
                  To do this we describe 3 types of probability. 
                  	<li>A linear distribution: everything has the same chance of happening.</li>
                        <li>A normal distribution: There is a peak where this is most likely to happen and then it falls off on both sides.</li>
                        <li>An exponential distribution (and an inverse modifier one): Where there is a peak and a cutoff, meaning anything after that won't happen.</li>
                  </p>
                  <p>      
                  An example of our three types when the player is looting a generated chest would be:
                        <li>Linear: The chest has a loot pool of random ingredients with the same rarity. The amount of items it choses is random since all of them are as favourable.</li>
                        <li>Normal: The chest has a loot pool of random equipment. When the player is higher level we want the stats of the equipment to be higher. </li>
                              So we move our normal peak to a given value meaning the given equipment stats will be more likely to be of a higher value close to the player's level.
                        <li> Exponential: The chest has a loot pool in which the higher the player level the more items it will get from it. We move the peak with the world progression 
                              but we cut it off after the peak, meaning the player will never get more items than a certain amount. We can control the amount 
                              of special items the player can get from a chest this way for example.</li>
                  </p>
            </div>
       </div>   
       <Divider variant="middle"/>
       <div className='Card' id="Shaders"> 
             <h3>Shaders</h3>     
            <div className="CardBody"> 
                  <p>
                  In Another Pint I was <b>in charge of most </b>shader development.
                  </p>                 
                  <p>
                  Shader development in Another Pint had these main targets:
                  </p>                 
                       <li>  Develop a single shader that easily adds visual variety to models.</li>
                       <li>  Develop a grass shader.</li>                    
            </div>
       </div>
       <div className='Card' > 
             <h3>Recolor Shader.</h3>     
            <div className="CardBody"> 
                  <p>
                  Our main target with the base shader is <b>adding visual variety without sacrificing performance. </b> 
                  I developed a base shader that <b>implemented Unity’s PBR and facilitated recoloring of our assets.</b>
                  </p> 
                  <img className='SmallerImage' src="https://raw.githubusercontent.com/ludumez/vite-deploy/refs/heads/main/src/assets/RecolorFinalExample.JPG"></img>            
                  <p>
                  <b>Credits to: </b><a className='NormalButton' href='https://sketchfab.com/3d-models/lizard-wizard-4a36fcde390f42b1957b79fd8c35146f'>SadAlexey</a> for the model and textures and <a className='NormalButton' href='https://kenney.nl/assets'>KenneyNL</a> for the grass textures.
                  </p> 
                  <p>
                  Here is a sample of how our recoloring would work. The left one being the original texture and the other 3 being variants.
                  </p>
                  <p> 
                  <b>Resulting shader:</b>
                  </p> 
                  <img className='SmallerImage' src="https://raw.githubusercontent.com/ludumez/vite-deploy/refs/heads/main/src/assets/RecolorShaderCode.JPG"></img>            
                  <p>                  
                  The colour override works by creating 2 masks. 
                  </p> 
                  <p>
                  The first one is a <b>saturated version of our texture. </b>
                  One of the main problems when applying a new colour over an existing texture is that we lose all those details we have. 
                  This saturated mask tries to <b>re-apply those lost details over our texture.</b>
                  </p> 
                  <p>
                  The second mask is a <b>grayscale texture </b>that indicates what <b>areas of our model we don’t want to recolour. </b>
                  Like the eyes or the staff in our example. 
                  </p> 
                  <p>
                  I decided on a workflow of packing all our other PBR details in a single mask texture with the channels: 
                  <b> R:metallic, G: Ambient Occlusion, B:Smoothness.</b>
                  </p> 
                  <p>
                  Since the main goal of our shader is to add variety we need to see how well it performs under a bigger load.
                  </p>
                  <img className='SmallerImage' src="https://raw.githubusercontent.com/ludumez/vite-deploy/refs/heads/main/src/assets/RecolorShaderResults.JPG"></img>            
                  <p>
                  Measurements taken with a Nvidia 1050ti at a resolution of 1366x768. 
                  </p>
                  <p>
                  Looking at our performance in an empty lit scene with a plane and a given amount of characters we can see that,
                   while our <b>batching increases with our material count our render times don't increase and our frame counts stay very similar.</b> 
                   There is also a notable improvement between static batching compared to no batching.
                   </p> 
                   <p>
                   Comparing our shader with the default unity material we can see <b>we maintain the same performance.</b>
                   </p> 
                   <p>
                  For my testing I used the Unity Profile Analyzer.
                   </p> 
                   <img className='SmallerImage' src="https://raw.githubusercontent.com/ludumez/vite-deploy/refs/heads/main/src/assets/RecolorShaderPofiler.JPG"></img>            
                   <p>
                  In this example we can see our render time for our scene with a single recolorable material, 
                   left and our scene with the unity default material, right. <b>Both render times are almost the same, with our material having a .05ms of improvement. </b>
                   </p> 
                   <img className='SmallerImage' src="https://raw.githubusercontent.com/ludumez/vite-deploy/refs/heads/main/src/assets/RecolorShaderSceneTesting.JPG"></img>            
                   <p>
                   Example of our performance test scene.
                   </p>
            </div>
       </div> 
       <div className='Card'> 
             <h3>Grass Shader.</h3>     
            <div className="CardBody"> 
                  <p>
                  When developing a grass shader for Another Pint our main objective was to develop a grass that <b>adds movement and dynamism while also improving visual fidelity with little performance impact.</b>
                  </p> 
                  <img className='SmallerImage' src="https://raw.githubusercontent.com/ludumez/vite-deploy/refs/heads/main/src/assets/GrassSampleFinal.gif"></img>            
                  <p>
                  Final Result
                  </p> 
                  <p>
                  There was a lot of struggling where we had to <b>balance between visual fidelity and performance, </b>
                  so I decided on a <b>test heavy approach </b>where I would test each step of the shader to look for any bottlenecks.
                  </p> 
                  <p>                  
                  Here are the results of my testing
                  </p> 
                  <img className='SmallerImage' src="https://raw.githubusercontent.com/ludumez/vite-deploy/refs/heads/main/src/assets/GrassShaderResults.JPG"></img>            
                  <p> 
                  We ended up using a <b> prefab with a custom two sided plane with its normals facing upwards. </b>
                  Our plane consists of a square with a division in two for added curve on the movement.
                  </p> 
                  <p>                   
                  As we can see, the <b>default unity plane is a lot faster than using our custom plane, </b>
                  however <b>because our top down view, normal rigid planes don't look proper</b>. We ended up using the custom double sided mesh, which takes the vertice count from 4 to 12 and the triangles from 2 to 4 per grass plane.
                  </p> 
                  <p> 
                  I also tested the grass shader with no vertex based movement and we can see only a slight decrease in cost. 
                  We can understand from this that <b>most of the cost comes from the given geometry of our prefab.</b>
                  </p> 
                  <img className='SmallerImage' src="https://raw.githubusercontent.com/ludumez/vite-deploy/refs/heads/main/src/assets/GrassSampleFinal.gif"></img>            
                  <img className='SmallerImage' src="https://raw.githubusercontent.com/ludumez/vite-deploy/refs/heads/main/src/assets/GrassSamplePlane.gif"></img>            
                  <p>                   
                  First, we can see our final shader with height based movement. Second, default unity grass with billboard planes.
                  </p>    
                  <p> 
                  Resulting shader:
                  </p> 
                  <img className='SmallerImage' src="https://raw.githubusercontent.com/ludumez/vite-deploy/refs/heads/main/src/assets/GrassShaderCode.JPG"></img>            
                  <p> 
                  We are adding a range from -1 to 1 to the z vertex object position, 
                  meaning, we are adding or removing the position in the forward direction.<b> Object position is in local space.</b> 
                  </p> 
                  <p> 
                  <b> We are masking the offset by its object height</b>, meaning on the base there is no movement and at the top there is.
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
                               <a className='aIcon' href="https://www.linkedin.com/in/lukas-dumez-988a1a234/" target="_blank"><img className='Icon' src="https://raw.githubusercontent.com/ludumez/vite-deploy/refs/heads/main/src/assets/linkedin.jpg"></img></a>
                               <a className='aIcon'href="mailto:ludumez@hotmail.com" target="_blank"><img className='Icon' src="https://raw.githubusercontent.com/ludumez/vite-deploy/refs/heads/main/src/assets/email.jpg"></img></a>
                         </div>   
                   </Grid>
             </Grid> 
 
       </div>          
 
     </>
  )
}

