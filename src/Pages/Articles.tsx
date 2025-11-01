import { Link } from "react-router-dom"

export function Articles() {



      return (
            <>
                  {/*------------------------------------------------------------------*/}
                  {/*----------------------------------Personal Description--------------------------*/}
                  {/*-----------------------------------------------------------------*/}


                  <div className='headerContainer'>
                        <div className="container">
                              <div className="shortcuts-block">
                                    <Link to={'/'} className="shortcutLink">Home</Link>
                                    <Link to={'/articles'} className="shortcutLink">Articles</Link>
                                    <a>About</a>
                              </div>
                        </div>
                  </div>

                  <div style={{ display: "flex", justifyContent: "center" }}>

                        <div className="container">
                              <div className="image-wrapper">
                                    <img style={{ height: '40px' }} src="https://raw.githubusercontent.com/ludumez/vite-deploy/refs/heads/main/src/assets/ProfilePicture.JPG" alt="Image" />
                              </div>
                              <div className="text-block">
                                    <Link to={'/flowField'} className="smallerTitle">Flow Fields for Large Quantities of AI agents in Unity</Link>
                              </div>
                        </div>
                  </div>
            </>

      )
}

