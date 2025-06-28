import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid2';
import { Link } from 'react-router-dom';
import { useState } from "react";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

const images = [
      {id: 1, src: "https://raw.githubusercontent.com/ludumez/vite-deploy/refs/heads/main/src/assets/AnotherPint.jpg", tags: ["Programmer"], to:'AnotherPint'},//Another Pint
      {id: 6, src: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2726060/26e8c16f3cbb5a458b60ffd663571d8fa06c724d/header.jpg?t=1748530564", tags: ["Programmer"], to:'FableHospital'},//Fable Hospital
      {id: 2, src: "https://raw.githubusercontent.com/ludumez/vite-deploy/refs/heads/main/src/assets/RaceForTheArcticCaptura.jpg", tags: ["Programmer"], to:'RaceToTheArctic'},//Race to the Arctic
      {id: 3, src: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1978210/header.jpg?t=1701706239", tags: ["QA"], to:'TheGrinch'},//Grinch
      {id: 5, src: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3212580/e191789d5852ed5c2c27183888ca58017b5378fb/header.jpg?t=1750407348", tags: ["QA"], to:'BratzRythmAndStyle'},//Bratz
      {id: 4, src: "https://outrightgames.com/wp-content/themes/og/img/logo.webp", tags: ["QA"], to:'Unnanounced'},//Elf on the Shelf
      {id: 8, src: "https://img.itch.zone/aW1nLzIxODk1NTc1LnBuZw==/original/5jwl0K.png", tags: ["Programmer"], to:'ItCouldBeWetter'},//It could be wetter
      {id: 7, src: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1709170/header.jpg?t=1726417223", tags: ["Other"], to:'ParadiseMarsh'},//Paradise Marsh
];

const allTags = ["Programmer","QA","Other"];

export function English() {

      const [selectedTag,setSelectedTag] = useState("");

      const filteredImages = selectedTag ? images.filter(img=>img.tags.includes(selectedTag)):images;

  return (
      <> 

{/*------------------------------------------------------------------*/}
{/*----------------------------------Header--------------------------*/}
{/*-----------------------------------------------------------------*/}
      <div className='header'>  
            <Link  className={"ResponsiveLink"}  to='/'>EN </Link>  
            <Link  className={"ResponsiveLink"} to='/spanish'>ES</Link>  
      </div>  
      <div className='Card'> 
             <Grid container>                  
                   <Grid size={{ xs: 6, md: 6 }}>    
                   <p>ludumez@hotmail.com</p>
                   </Grid>  
                   <Grid size={{ xs: 2, md: 2 }}> 
                         <p></p>
                         <div className='CardFooter'>
                               <a className='aIcon' href="https://www.linkedin.com/in/lukas-dumez-988a1a234/" target="_blank"><img className='Icon' src="https://raw.githubusercontent.com/ludumez/vite-deploy/refs/heads/main/src/assets/linkedin.jpg"></img></a>
                               <a className='aIcon'href="mailto:ludumez@hotmail.com" target="_blank"><img className='Icon' src="https://raw.githubusercontent.com/ludumez/vite-deploy/refs/heads/main/src/assets/email.jpg"></img></a>
                         </div>   
                   </Grid>
             </Grid>  
      </div> 
      <Divider variant="middle"/>


{/*------------------------------------------------------------------*/}
{/*----------------------------------Personal Description--------------------------*/}
{/*-----------------------------------------------------------------*/}
      <Grid container>
                   <Grid size={{ xs: 4, md: 4 }}>           
                         <img className='SmallImage' src="https://raw.githubusercontent.com/ludumez/vite-deploy/refs/heads/main/src/assets/ProfilePicture.JPG"></img> 
                   </Grid>
                   <Grid size={{ xs: 8, md: 8 }}>
                         <h1> Lukas Dumez - Unity Developer </h1> 
                   </Grid>
             </Grid> 
       <div>
             <h2>Hello! I'm Lukas.</h2>
             <br></br>
            <p>
             I'm a Unity Programmer with 4 years of experience.
             I started my journey as a programmer when I was 14 year old with Unity 5 and haven't stopped since then.
             </p>
             <p>
             I was born in Belgium and I grew up in Spain, my skills and abilities have given me the oportunity to work all over the world.
             I'm fully self taught and I'm always eager to keep learning.
             </p>
             <p>
            I'm a huge sci-fi nerd, I love plants🌱 and my dream is to make weird games.
             My passion are video games and variety is my flavour. I love fishing in games.
             </p>
       </div>
      <Divider variant="middle"/>
      
{/*------------------------------------------------------------------*/}
{/*----------------------------------My Projects--------------------------*/}
{/*-----------------------------------------------------------------*/}

      <div>
             <h2>My work</h2>
             <br></br>
           
           <div>
      <div>
             <br></br>

        <a className={"ResponsiveLink"} onClick={() => setSelectedTag("")}>All</a>
        {allTags.map(tag => (
          <a className={"ResponsiveLink"} key={tag} onClick={() => setSelectedTag(tag)}>
            {tag}
          </a>
        ))}
      </div>
          </div>
             <br></br>
            <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}} >
                <Masonry>

                     {filteredImages.map(img => ( 
                       
                              <Link key={img.id} to={`/${img.to}`}>                 
                              <img className={"HoverImage"} key={img.id} src={img.src} alt="" />  
                              </Link>                        
                        
                  ))} 
                  </Masonry>
            </ResponsiveMasonry>           
      </div>   




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

