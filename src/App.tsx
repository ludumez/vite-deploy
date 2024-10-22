import './App.css'
import './App.css'
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid2';



function App() {
return (
      <>
      <Grid container>
                   <Grid size={{ xs: 4, md: 4 }}>           
                         <img className='SmallImage' src="https://raw.githubusercontent.com/ludumez/vite-deploy/refs/heads/main/src/assets/ProfilePicture.JPG"></img> 
                   </Grid>
                   <Grid size={{ xs: 8, md: 8 }}>
                         <h1> Lukas Dumez - System Developer </h1> 
                   </Grid>
             </Grid> 
       <div>
             <h2>Hello! I'm Lukas.</h2>
             <br></br>
            <p>
             I'm a systems programmer with (almost) 4 years of experience  with a background in environmental science.
             My passion are videogames and variety is my flavour. I love fishing in games.
             </p>
       </div>
       <br></br>
 
        <Divider variant="middle"/>
       <p> </p>
       <div className='Separator'>
             <h2 className='Offset'>Projects</h2>
       </div>              
       <p> </p>
         <Divider variant="middle"/>
        <Divider variant="middle"/>
       <div className='Card'>   
             <h2>Lead Systems Programmer</h2>
             <h3>Another Pint</h3>
             <p className='italic'>February 2023 - May October 2024</p>
             <Grid container>
                   <Grid size={{ xs: 6, md: 6 }}>           
                         <div className="CardBody">
                               <p> Developed by <b>Williwaw Games</b>, Another Pint is a dynamic management game where you get to build and run your own medieval tavern. Tasked with taking over a barebones shack, where you take it is up to you.  </p>
                               <p><b>Team size:</b> 9</p>
                               <p><b>What I worked on: </b></p>
                               <ul>
                                     <li>Led the programming team.</li>
                                     <li>Implemented system driven RPG elements.</li>
                                     <li>Shader improvements and optimizations.</li>                   
                               </ul>
                               <p><b>Tools:</b> Unity, Unity Input System, Shadergraph, Azure Devops, Git, Visual Studio, Blender, Two Notebooks.</p>
                         </div >
                   </Grid>
                   <Grid size={{ xs: 6, md: 6 }}>
                         <img src="https://raw.githubusercontent.com/ludumez/vite-deploy/refs/heads/main/src/assets/AnotherPint.jpg"></img>
                   </Grid>
             </Grid> 
             <div className="CardFooter">
                  <a href="https://store.steampowered.com/app/3150160/Another_Pint/" target="_blank">Steam</a> <a href="https://anotherpint.williwawgames.com" target="_blank">Website</a> 
             </div>  
       </div>     
       
       <p> </p>
       <Divider variant="middle"/>
       
       <div className='Card'> 
             <h2>Programmer</h2>
             <h3>Race for the Arctic</h3>
             <p className='italic'>May 2022 - February 2023 </p>
             <Grid container>
                   <Grid size={{ xs: 6, md: 6 }}>
 
     
                         <div className="CardBody">
                               <p> Race for the Arctic is an immersive narrative game about exploring the Arctic in the near future.  </p>
                               <p><b>Team size:</b> 3</p>
                               <p><b>What I worked on: </b></p>
                               <ul>
                                     <li>Developed various camera and transition systems.</li>
                                     <li>Developed the movement system.</li>
                                     <li>Developed the interaction system.</li>         
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
                    <a href="https://episod.studio/games/race-for-the-arctic" target="_blank">Website</a>         
             </div>  
       </div> 
       <p></p>
       <Divider variant="middle"/>
       <div className='Card'> 
             <h2>Unity Developer - Freelancing</h2>
             <p className='italic'>June 2021 - May 2022 </p>
             <Grid container>
                   <Grid size={{ xs: 12, md: 12 }}>   
                         <div className="CardBody">
                               <p> Freelance work focused on gameplay a system development for 25 different clients.  </p>
                               <p><b>Platforms:</b> PC | Linux | Android</p>
                               <p><b>Tools:</b> Unity, Unity Input System, Git, Visual Studio, Blender, Firebase, Photon, Android.</p>
                         </div>
                   </Grid>
             </Grid> 
             <div className="CardFooter">
             </div>  
       </div>
 
       <Divider variant="middle"/>
       <p> </p>
       <div className='Separator'>
             <h2 className='Offset'>Stats</h2>    
       </div>              
       <p> </p>
       <Divider variant="middle"/>     
                 <p><b>Lenguages:</b> Spanish (Native), English (Native), Dutch (Native), Italian (B2)</p> 
                 <p><b>Tools:</b> Unity, C#, HTML, React, FMOD, ImGUI, Gitlab, Visual Studio, Blender, Shadergraph, Azure, Git, Excel, Photon, Firebase, Brain, Pen and Paper.</p>
                 <p><b>Location:</b> Sofia, Bulgaria | Madrid, Spain</p>
       
       <Divider variant="middle"/>
       <p> </p>
       <div className='Separator'>
             <h2 className='Offset'>Other Experiences</h2>    
       </div>              
       <p> </p>
       <Divider variant="middle"/>
 
       <div className='Card'> 
             <Grid container>
                   <Grid size={{ xs: 6, md: 6 }}>
                         <img className='SmallImage' src="https://raw.githubusercontent.com/ludumez/vite-deploy/refs/heads/main/src/assets/ParadiseMarsh.jpg"></img>
                   </Grid>
                   <Grid size={{ xs: 6, md: 6 }}>    
                         <div>
                               <h2>Localization: English - Spanish</h2>
                               <h3>Paradise Marsh</h3>
                               <p className='italic'>May 2022 </p>
                         </div>
                         <div className="CardBody">
                               <p> Localization support english to spanish.</p>
                                </div >
                   </Grid>
             </Grid> 
             <p></p>
             <div className="CardFooter">
                    <a href="https://store.steampowered.com/app/1709170/Paradise_Marsh/" target="_blank">Steam</a>         
             </div>  
       </div> 
       <p> </p>
       <Divider variant="middle"/>
 
       <div className='Card'> 
             <Grid container>                  
                   <Grid size={{ xs: 10, md: 10 }}>    
                         <div>
                               <h2>Localization QA</h2>
                               <h3>Localsoft</h3>
                               <p className='italic'>February 2022</p>
                         </div>
                         <div className="CardBody">
                               <p> Localization quality asurrance in english, spanish and dutch.</p>
                                </div >
                   </Grid>
             </Grid> 
             <p></p>
             <div className="CardFooter">
                    <a href="https://www.localsoft.com" target="_blank">Website</a>         
             </div>  
       </div> 
 
       <p> </p>
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

export default App
