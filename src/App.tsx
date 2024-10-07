import './App.css'
import './App.css'
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

function App() {
  return (
    <>
      <div>
        <h1> Lukas Dumez - Game Developer Portfolio </h1>
        <h2> Video game programmer and shader guy. </h2>
           
        <div>
        <b>Contact: </b>
        <a className='aButton' href= "mailto: name@email.com">Email</a>  <a className='aButton' href='https://www.linkedin.com/in/lukas-dumez-988a1a234/' target="_blank">LinkedIn</a>
        </div>
            <p>
            Since 2014, I have been actively involved in video game development in various capacities,
             accumulating over<b> 10 years of experience</b>. Being entirely self-taught, I have consistently demonstrated the ability to take ownership of and<b> lead all
              aspects of video game programming.</b>
            </p>
            <p> 
              I am deeply passionate about video games, and my goal is to work with a small, dedicated team to create fun, polished titles.
            </p> 
              As a programmer, I take pride in my <b>self-sufficiency and problem-solving skills.</b>
               My adaptability and enthusiasm for game development have afforded me the opportunity to work on incredible projects over the last four years, 
               including <b>leading a team of programmers.</b> When collaborating within a team, I emphasize strong communication and cooperation, often taking the lead in 
               providing technical support and facilitating clear communication between programmers and artists.
             <p> 
          </p>  
       </div> 
       
       <Divider variant="middle"/>
       
       <div>
         <h3>
             Projects.
         </h3>      
        </div>   <Box sx={{ flexGrow: 1 }}>
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
               <Grid size="grow">
               <Item elevation={4}>
                <h3>Another Pint</h3>
               <img src="https://raw.githubusercontent.com/ludumez/vite-deploy/refs/heads/main/src/assets/AnotherPint.jpg"></img>

                <p><b>February 2023 - October 2024</b></p> 
                <p><b>Link:</b> <a href="https://anotherpint.williwawgames.com" target="_blank">Another Pint Webpage</a></p> 
                <p><b>Link:</b> <a href="https://store.steampowered.com/app/3150160/Another_Pint/" target="_blank">Steam</a></p> 
                <p><b>What this is:</b> Another Pint is an open-world management game with significant role-playing elements, where all quests, characters, and events are unique to each playthrough.</p>
                <p><b>What I did: </b>
                Developed and later led the programming efforts.
                 Took full ownership of the character controller, NPC generation, world resource generation, 
                 buff and debuff systems, UI menu system, camera controls, and player movement. Additionally, 
                 I maintained and refined the build mode, quest, and dialogue systems. I was also responsible for developing and standardizing most of the shaders in the game.
                </p>
                <p><b>Studio:</b> Williwaw AED. Sofia, Bulgaria.</p>
                <p><b>Platforms:</b> PC | Linux</p>
                  <p><b>Team size:</b> 8 members. Lead for 3 programmers.</p>
                <p><b>Tools:</b> Unity, Unity Input System, Shadergraph, Tweener, Azure Devops, Git, Visual Studio, Blender, Two Notebooks.</p>

                </Item>
                </Grid>
      
                 <Grid size="grow">
                <Item elevation={4}>
                <h3>Race for the Arctic</h3>
                <img src="https://raw.githubusercontent.com/ludumez/vite-deploy/refs/heads/main/src/assets/RaceForTheArcticCaptura.jpg"></img>
              <p><b>May 2022 - February 2023</b></p> 
              <p><b>Link:</b> <a href="https://episod.studio/games/race-for-the-arctic" target="_blank">Race For the Arctic Webpage</a></p> 
              <p><b>What this is:</b>  Race for the Arctic is an immersive narrative game about exploring the Arctic in the near future.</p>
              <p><b>What I did: </b>
              Initially a developer, I later became the sole developer, responsible for creating immersive camera controls, interaction systems, and various movement systems.
              </p>
              <p><b>Studio:</b> Episod Studio. London, United Kingdom.</p>
              <p><b>Platforms:</b> PC</p>
              <p><b>Team size:</b> 3 members.</p>
              <p><b>Tools:</b> Unity, Shadergraph, Figma, Notion, SourceTree, Blender.</p>
               </Item>
              </Grid>
      </Grid>
      </Box>  
      <p> </p>
      <Box sx={{ flexGrow: 1 }}>
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
               <Grid size="grow">
               <Item elevation={4}>
                <h3>Freelance Developer</h3>

                <p><b>June 2021 - May 2022</b></p> 
                <p><b>What this is:</b> Freelancer for around 25 different clients.</p>
                <p><b>What I did: </b> Responsible for developing specific systems for a wide range of clients.
                 Primarily focused on translating game systems and concepts into design documents, 
                implementing them in Unity, and providing thorough documentation for future use.
                </p>
                <p><b>Platforms:</b> PC | Linux | Android</p>
                <p><b>Tools:</b> Unity, Unity Input System, Tweener, Git, Visual Studio, Blender.</p>

                </Item>
                </Grid>     
               
      </Grid>
      </Box>  
      <p> </p>
        <Divider variant="middle"/>
       <div>
        <h3>  Others.</h3>      
       </div>

      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
               <Grid size="grow">
               <Item elevation={4}>
                <h3>Paradise Marsh</h3>             
                <p><b>February 2023 </b></p> 
                <p><b>Link:</b> <a href="https://store.steampowered.com/app/1709170/Paradise_Marsh/" target="_blank">Store Link</a></p> 
                <p><b>What I did: </b>
                Helped with the localization from English to Spanish.</p>
                <p><b>Platforms:</b> PC </p>
                <p><b>Tools:</b> Excel, Brain.</p>

       </Item>
       </Grid>     

      </Grid>
      </Box>
       <p> </p>
        <Divider variant="middle"/>
       <div>
        <h3> Stats.</h3>      
       </div>
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
               <Grid size="grow">
               <Item >                      
                <p><b>Lenguages:</b> Spanish (Native), English (Native), Dutch (Native), Italian (B2)</p> 
                <p><b>Tools:</b> Unity, C#, HTML, React, FMOD, ImGUI, Gitlab, Visual Studio, Blender, Shadergraph, Azure, Git, Excel, Brain, Pen and Paper.</p>
                <p><b>Location:</b> Sofia, Bulgaria | Madrid, Spain</p>
                <p>12 released games on Itch.io, 5 removed games from Itch.io</p>

       </Item>
       </Grid>     

      </Grid>
      </Box>
      
    
    </>
  )
}

export default App
