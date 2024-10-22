import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid2';
import { Link } from 'react-router-dom';

export function Spanish() {
  return (
      <> 
      <div className='header'>  
            <Link className='SmallButton' to='/'>EN </Link>  
            <Link className='SmallButton' to='/'>ES</Link>  
      </div>  
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
      <Grid container>
                   <Grid size={{ xs: 4, md: 4 }}>           
                         <img className='SmallImage' src="https://raw.githubusercontent.com/ludumez/vite-deploy/refs/heads/main/src/assets/ProfilePicture.JPG"></img> 
                   </Grid>
                   <Grid size={{ xs: 8, md: 8 }}>
                         <h1> Lukas Dumez - Programador de sistemas en Unity </h1> 
                   </Grid>
             </Grid> 
       <div>
             <h2>Hola!  Soy Lukas.</h2>
             <br></br>
            <p>
                Soy un programador de sistemas con (casi) 4 años de experiencia. Mi pasión son los videojuegos y su variedad mi estilo.
                Me encanta la pesca en los videojuegos.
             </p>
       </div>
       <br></br>
 
        <Divider variant="middle"/>
       <p> </p>
       <div className='Separator'>
             <h2 className='Offset'>Proyectos</h2>
       </div>              
       <p> </p>
        <Divider variant="middle"/>
       <div className='Card'>   
             <h2>Desarrollador principal.</h2>
             <h3>Another Pint</h3>
             <p className='italic'>Febrero 2023 - Octubre 2024</p>
             <Grid container>
                   <Grid size={{ xs: 6, md: 6 }}>           
                         <div className="CardBody">
                               <p>Desarrollado por <b>Williwaw Games</b>, Another Pint es un juego de gestión de recursos dinámico donde construirás y manejaras tu propia taverna. Encargado con manejar una cabaña ruinosa, tu decides tu destino.  </p>
                               <p><b>Tamaño de equipo:</b> 9</p>
                               <p><b>En que trabajé: </b></p>
                               <ul>
                                     <li>Dirigí el un equipo de 3 programadores.</li>
                                     <li>Implemente varios sistemas de RPG.</li>
                                     <li>Desarrollé, mejoré y optimicé los shaders base del juego.</li>  
                                     <li>Implementé el sistema de animación de los personajes.</li>  
                                     <li>Desarrollé un creador de personajes y NPCs.</li>  
                                     <li>Desarrollé y pulí el sistema de construcción y su UX.</li>  
                               </ul>
                               <p><b>Herramientas:</b> Unity, Unity Input System, Shadergraph, Azure Devops, Git, Visual Studio, Blender, Dos libretas.</p>
                         </div >
                   </Grid>
                   <Grid size={{ xs: 6, md: 6 }}>
                         <img src="https://raw.githubusercontent.com/ludumez/vite-deploy/refs/heads/main/src/assets/AnotherPint.jpg"></img>
                   </Grid>
             </Grid> 
             <div className="CardFooter">
                  <a href="https://store.steampowered.com/app/3150160/Another_Pint/" target="_blank">Steam</a> <a href="https://anotherpint.williwawgames.com" target="_blank">Página web</a> 
             </div>  
       </div>     
       
       <p> </p>
       <Divider variant="middle"/>
       
       <div className='Card'> 
             <h2>Programador Unity</h2>
             <h3>Race for the Arctic</h3>
             <p className='italic'>Mayo 2022 - Febrero 2023 </p>
             <Grid container>
                   <Grid size={{ xs: 6, md: 6 }}>
 
     
                         <div className="CardBody">
                               <p>Desarrollado por <b>Episod Studio</b>, Race for the Arctic es un juego narrativo inmersivo sobre la exploración del ártico en un futuro cercano.</p>
                               <p><b>Tamaño de equipo:</b> 3</p>
                               <p><b>En que trabajé: </b></p>
                               <ul>
                                     <li>Desarrollé varios sistemas de camera y transiciones.</li>
                                     <li>Desarrolle el sistema de movimiento.</li>
                                     <li>Desarrollé el sistema de interacciones.</li>         
                               </ul>                 
                               <p><b>Herramientas:</b> Unity, Shadergraph, Figma, Notion, SourceTree, Blender.</p>
                         </div >
                   </Grid>
                   <Grid size={{ xs: 6, md: 6 }}>
                         <img src="https://raw.githubusercontent.com/ludumez/vite-deploy/refs/heads/main/src/assets/RaceForTheArcticCaptura.jpg"></img>
                   </Grid>
             </Grid> 
             <p></p>
             <div className="CardFooter">
                    <a href="https://episod.studio/games/race-for-the-arctic" target="_blank">Página web</a>         
             </div>  
       </div> 
       <p></p>
       <Divider variant="middle"/>
       <div className='Card'> 
             <h2>Desarrollador Unity - Autónomo</h2>
             <p className='italic'>Junio 2021 - Mayo 2022 </p>
             <Grid container>
                   <Grid size={{ xs: 12, md: 12 }}>   
                         <div className="CardBody">
                               <p> Trabajo autónomo para diversos clientes enfocado al desarrollo en Unity de mecánicas y sistemas de videojuegos. Al rededor de 25 clientes. </p>                              
                               <p><b>Plataformas:</b> PC | Linux | Android</p>
                               <p><b>Herramientas:</b> Unity, Unity Input System, Git, Visual Studio, Blender, Firebase, Photon, Android.</p>
                         </div>
                   </Grid>
             </Grid> 
             <div className="CardFooter">
             </div>  
       </div>

       <Divider variant="middle"/>      
       <p> </p>
       <div className='Separator'>
             <h2 className='Offset'>Otras experiencias</h2>    
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
                               <h2>Localización: Inglés - Español</h2>
                               <h3>Paradise Marsh</h3>
                               <p className='italic'>Mayo 2022 </p>
                         </div>
                         <div className="CardBody">
                               <p> Asistencia en la localización del Ingles al español para el juego base.</p>
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
                               <p>Control y revision de la calidad de traducción en inglés, español y holandés.</p>
                                </div >
                   </Grid>
             </Grid> 
             <p></p>
             <div className="CardFooter">
                    <a href="https://www.localsoft.com" target="_blank">Página web</a>         
             </div>  
       </div> 
       <Divider variant="middle"/>
       <p> </p>
       <div className='Separator'>
             <h2 className='Offset'>Estadísticas</h2>    
       </div>              
       <p> </p>
       <Divider variant="middle"/>     
                 <p><b>Idiomas:</b> Español (Nativo), Inglés (Nativo), Holandés (Nativo), Italiano (B2)</p> 
                 <p><b>Herramientas:</b> Unity, C#, HTML, React, FMOD, ImGUI, Gitlab, Visual Studio, Blender, Shadergraph, Azure, Git, Excel, Photon, Firebase, Brain, Papel y boli.</p>
                 <p><b>Localización:</b> Sofia, Bulgaria | Madrid, España</p>       
       <Divider variant="middle"/>
       <p> </p>
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

