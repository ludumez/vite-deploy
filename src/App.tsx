import './App.css'
import './App.css'
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import RFTA from '/Assets/RaceForTheArcticCaptura.jpg'
import AnotherPint from './Assets/AnotherPint.jpg'
import Email from './Assets/email.jpg'
import LinkedIn from './Assets/linkedIn.jpg'

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
        <img src={Email} className='Icon'></img> <a href= "mailto: name@email.com">Email</a> <img src={LinkedIn}  className='Icon'></img> <a href='https://www.linkedin.com/in/lukas-dumez-988a1a234/' target="_blank">LinkedIn</a>
        </div>
            <p>
            Starting in 2014 I have been making video games one way or another for <b>over 10 years</b> now. 
            Being fully self-taught, with a proven track of taking ownership and leading the production on anything code related to video game programming.
            </p>
            <p>   
            I have a big passion for all video games, my dream is to work with a small passionate team on fun and polished video games.   
            </p> 
             <p> 
            As a programmer, I take pride in my capacity of being  <b>self-sufficient</b> and figuring things out. 
            My capacity to adapt and my passion in video games has given me the opportunity to work on some amazing projects, for the last <b>4 years</b>, and the chance to <b>lead</b> a team of programmers. 
            When working in a team, I pride myself in my efforts to <b>collaborate and communicate</b>, taking charge in technical assistance and communication between programmers and artists.
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
               <Item>
                <h3>Another Pint</h3>
               <img src={AnotherPint}></img>

                <p><b>February 2023 - October 2024</b></p> 
                <p><b>Link:</b> <a href="https://anotherpint.williwawgames.com" target="_blank">Another Pint Webpage</a></p> 
                <p><b>What this is:</b> Another Pint is an open world managment game with big roleplaying elements, where all quests, characters and events are unique to each playtrough.</p>
                <p><b>What I did: </b>
                 <b>Developer</b> and later on <b>Lead the programming</b> effort. Took full ownership of the <b>Character Controller, NPC Generation, World Resource Generation, 
                Buff and Debuff system, UI Menu system, Camera controlls and Player Movement</b>; and more.
                As well as, mantained and polished the Build Mode and Quest and Dialogue 
                System.
                Also took ownership developing and unifying of most <b>shaders</b> in the game.</p>
                <p><b>Studio:</b> Williwaw AED. Sofia, Bulgaria.</p>
                <p><b>Platforms:</b> PC | Linux</p>
                  <p><b>Team size:</b> 8 members. Lead for 3 programmers.</p>
                <p><b>Tools:</b> Unity, Unity Input System, Shadergraph, Tweener, Azure Devops, Git, Visual Studio, Blender, Two Notebooks.</p>

                </Item>
                </Grid>
      
                 <Grid size="grow">
                <Item>
                <h3>Race for the Arctic</h3>
                <img src={RFTA}></img>
              <p><b>May 2022 - February 2023</b></p> 
              <p><b>Link:</b> <a href="https://episod.studio/games/race-for-the-arctic" target="_blank">Race For the Arctic Webpage</a></p> 
              <p><b>What this is:</b> Race for the Arctic is an inmersive narrative game about exploring the Artctic in the not so distant future.</p>
              <p><b>What I did: </b>
              Developer and later on sole developer, in charge of developing inmersive: Camera Controlls, Interaction Systems and various Movement Systems.
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
               <Item>
                <h3>Freelance Developer</h3>

                <p><b>June 2021 - May 2022</b></p> 
                <p><b>What this is:</b> Freelancer for around 25 different clients.</p>
                <p><b>What I did: </b> In charge of developing specific systems for a wide arrange of clients. 
                With a main focus of translating game systems and ideas into design documents, implementing them in Unity and 
                documenting them for future use.
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
               <Item>
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
               <Item>                      
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
