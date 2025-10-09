import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';


export function English() {



      return (
            <>
                  {/*------------------------------------------------------------------*/}
                  {/*----------------------------------Personal Description--------------------------*/}
                  {/*-----------------------------------------------------------------*/}


                  <div className='headerContainer'>
                        <div className="container">
                              <div className="image-wrapper">
                                    <img src="https://raw.githubusercontent.com/ludumez/vite-deploy/refs/heads/main/src/assets/ProfilePicture.JPG" alt="Image" />
                              </div>
                              <div className="text-block">
                                    <div className="title">Lukas Dumez</div>
                                    <div className="subtitle">Mid/Senior Unity Developer</div>
                              </div>
                              <div className="shortcuts-block">
                                    <a>Home</a>
                                    <a>Articles</a>
                                    <a>About</a>
                              </div>
                        </div>
                  </div>


                  <p className='DescriptionText'>
                        Hello! I'm Lukas a Unity Developer with 10 years of combined professional and hobbyist experience, specializing in
                        gameplay systems, procedural content, and responsive UI/UX. Experienced in shipping solo and team
                        projects, with full pipeline knowledge from design to release
                  </p>


                  {/*------------------------------------------------------------------*/}
                  {/*----------------------------------My Projects--------------------------*/}
                  {/*-----------------------------------------------------------------*/}

                  <div className="Center">
                        <Box sx={{ flexGrow: 1, padding: 2 }}>
                              <Grid container spacing={4}>
                                    <Grid size={{ md: 12, lg: 6, xl: 6 }}>
                                          <a href='https://store.steampowered.com/app/3150160/Another_Pint/' target='_blank'>
                                                <div className='bigImageContainer'>
                                                      <img className='big-img' src="https://raw.githubusercontent.com/ludumez/vite-deploy/refs/heads/main/src/assets/Another%20Pint%20Square.jpg"></img>
                                                      <p className='smallTitle'><b>Another Pint</b> Lead Developer</p>
                                                </div>
                                          </a>
                                    </Grid>
                                    <Grid size={{ md: 12, lg: 6, xl: 6 }}>
                                          <a href='https://store.steampowered.com/app/4023850/Coasterama/' target='_blank'>
                                                <div className='bigImageContainer'>
                                                      <img className='big-img' src="https://raw.githubusercontent.com/ludumez/vite-deploy/refs/heads/main/src/assets/HeaderCapsule.png"></img>
                                                      <p className='smallTitle'><b>Coasterama</b> Developer</p>
                                                </div>
                                          </a>
                                    </Grid>
                                    <Grid size={{ md: 12, lg: 6, xl: 6 }}>
                                          <a href='https://store.steampowered.com/app/2726060/Fable_Hospital/' target='_blank'>
                                                <div className='bigImageContainer'>
                                                      <img className='big-img' src="https://raw.githubusercontent.com/ludumez/vite-deploy/refs/heads/main/src/assets/FableHospitalSquare.png"></img>
                                                      <p className='smallTitle'><b>Fable Hospital</b> C# Developer</p>
                                                </div>
                                          </a>
                                    </Grid>
                                    <Grid size={{ md: 12, lg: 6, xl: 6 }}>
                                          <a href='https://www.episod.studio/race-for-the-arctic' target='_blank'>
                                                <div className='bigImageContainer'>
                                                      <img className='big-img' src="https://raw.githubusercontent.com/ludumez/vite-deploy/refs/heads/main/src/assets/RFTA%20Square.png"></img>
                                                      <p className='smallTitle'><b>Race For The Arctic</b> Unity Developer</p>
                                                </div>
                                          </a>
                                    </Grid>
                              </Grid>
                        </Box>
                  </div>

                  <div className="Center">
                        <Box sx={{ padding: 2 }}>
                              <Grid container spacing={4} sx={{ flexGrow: 1 }}>
                                    <Grid size={{ md: 6, lg: 3, xl: 3 }}>
                                          <a href='https://store.steampowered.com/app/3212580/Bratz_Ritmo_y_Estilo/' target='_blank'>
                                                <div className='bigImageContainer'>
                                                      <img className='big-img' src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3212580/2d320db8a58e0fd8b205be3c4dcdedf3e055c80f/header_spanish.jpg?t=1757685800"></img>
                                                      <p className='smallTitle'><b>BRATZ Rythm and Style</b> FQA Tester</p>
                                                </div>
                                          </a>

                                    </Grid>
                                    <Grid size={{ md: 6, lg: 3, xl: 3 }}>
                                          <a href='https://store.steampowered.com/app/3210120/The_Elf_on_the_Shelf_Hroes_de_la_Navidad/' target='_blank'>
                                                <div className='bigImageContainer'>
                                                      <img className='big-img' src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3210120/8f8af6f5bb5922a25d6c43612a5e15b1d0999795/header_spanish.jpg?t=1753278657"></img>
                                                      <p className='smallTitle'><b>The Elf on the Shelf: Christmas Heroes </b> FQA Tester</p>
                                                </div>
                                          </a>

                                    </Grid>
                                    <Grid size={{ md: 6, lg: 3, xl: 3 }}>
                                          <a href='https://store.steampowered.com/app/1978210/The_Grinch_Aventuras_navideas/' target='_blank'>
                                                <div className='bigImageContainer'>
                                                      <img className='big-img' src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1978210/header.jpg?t=1759498870"></img>
                                                      <p className='smallTitle'><b>The Grinch: Christmas Adventures</b> FQA Tester</p>
                                                </div>
                                          </a>

                                    </Grid>
                                    <Grid size={{ md: 6, lg: 3, xl: 3 }}>
                                          <a href='https://store.steampowered.com/app/1709170/Paradise_Marsh/' target='_blank'>
                                                <div className='bigImageContainer'>
                                                      <img className='big-img' src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1709170/header.jpg?t=1726417223"></img>
                                                      <p className='smallTitle'><b>Paradise Marsh</b> Spanish Localization</p>
                                                </div>
                                          </a>

                                    </Grid>
                              </Grid>
                        </Box>
                  </div>
                  <div className="Center">
                        <Box sx={{ padding: 2 }}>
                              <Grid container spacing={4} sx={{ flexGrow: 1 }}>
                                    <Grid size={{ md: 6, lg: 2, xl: 2 }}>
                                          <a href='https://lukielue.itch.io/it-could-be-wetter' target='_blank'>
                                                <div className='bigImageContainer'>
                                                      <img className='big-img' src="https://raw.githubusercontent.com/ludumez/vite-deploy/refs/heads/main/src/assets/It%20Could%20Be%20Wetter.png"></img>
                                                      <p className='smallTitle'><b>It Could Be Wetter.</b> Developer</p>
                                                </div>
                                          </a>

                                    </Grid>
                                    <Grid size={{ md: 6, lg: 2, xl: 2 }}>
                                          <a href='https://lukielue.itch.io/hypothetical-fishing-game' target='_blank'>
                                                <div className='bigImageContainer'>
                                                      <img className='big-img' src="https://raw.githubusercontent.com/ludumez/vite-deploy/refs/heads/main/src/assets/Game%20UI%20Prototype.png"></img>
                                                      <p className='smallTitle'><b>UI Sample Project.</b> Open Source Sample Project</p>
                                                </div>
                                          </a>

                                    </Grid>
                                    <Grid size={{ md: 6, lg: 2, xl: 2 }}>
                                          <a href='https://lukielue.itch.io/house-explosion' target='_blank'>
                                                <div className='bigImageContainer'>
                                                      <img className='big-img' src="https://raw.githubusercontent.com/ludumez/vite-deploy/refs/heads/main/src/assets/House%20Explosion.png"></img>
                                                      <p className='smallTitle'><b>Project House Explosion.</b> Developer</p>
                                                </div>
                                          </a>

                                    </Grid>
                                    <Grid size={{ md: 6, lg: 2, xl: 2 }}>
                                          <a href='https://lukielue.itch.io/sisypush' target='_blank'>
                                                <div className='bigImageContainer'>
                                                      <img className='big-img' src="https://raw.githubusercontent.com/ludumez/vite-deploy/refs/heads/main/src/assets/Sisyphush.png"></img>
                                                      <p className='smallTitle'><b>Sisypush.</b> Meditation</p>
                                                </div>
                                          </a>

                                    </Grid>
                                    <Grid size={{ md: 6, lg: 2, xl: 2 }}>
                                          <a href='https://lukielue.itch.io/inventory-system' target='_blank'>
                                                <div className='bigImageContainer'>
                                                      <img className='big-img' src="https://raw.githubusercontent.com/ludumez/vite-deploy/refs/heads/main/src/assets/Inventory%20System.png"></img>
                                                      <p className='smallTitle'><b>Inventory System Template.</b> Open Source Inventory System</p>
                                                </div>
                                          </a>

                                    </Grid>
                                    <Grid size={{ md: 6, lg: 2, xl: 2 }}>
                                          <a href='https://lukielue.itch.io/inventory-system-pacakge' target='_blank'>
                                                <div className='bigImageContainer'>
                                                      <img className='big-img' src="https://raw.githubusercontent.com/ludumez/vite-deploy/refs/heads/main/src/assets/Crafting%20System.png"></img>
                                                      <p className='smallTitle'><b>Crafting System Template.</b> Open Source Crafting System</p>
                                                </div>
                                          </a>

                                    </Grid>
                              </Grid>
                        </Box>
                  </div>
            </>

      )
}

