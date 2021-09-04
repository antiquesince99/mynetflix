
import "./home.css";


const Home = () => {
 


  // const card1 = document.querySelectorAll("card");

  return (
    
      <div className="container-fluid">
        <div className="card" id="maincard">
          {/* carousel start here */}

          <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="https://wallpapercave.com/wp/wp8651516.jpg" class="d-block w-100" className="img-fluid"  alt="..." />
              </div>
              <div class="carousel-item">
                <img src="https://thedirect.s3.amazonaws.com/media/article_full/strangerewrite.jpg" class="d-block w-100" className="img-fluid" alt="..." />
              </div>
              <div class="carousel-item">
                <img src="https://cdn.thetealmango.com/wp-content/uploads/2021/07/lucifer-1.jpg" class="d-block w-100" alt="..." className="img-fluid" />
              </div>
              <div class="carousel-item">
                <img src="https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/06/black-widow-character-guide.jpg" class="d-block w-100" alt="..." className="img-fluid" />
              </div>
              <div class="carousel-item">
                <img src="https://cdn.mos.cms.futurecdn.net/fSdNCFhvpmgdeDhG59aN7o.jpg" class="d-block w-100" alt="..." className="img-fluid" />
              </div>
              <div class="carousel-item">
                <img src="https://i.ytimg.com/vi/-FmWuCgJmxo/maxresdefault.jpg" class="d-block w-100" alt="..." className="img-fluid" />
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
       
          {/* <section className="card-info">
            <div
              className="card"
              style={{ background: "transparent", alignItems: "center" }}
            >
              <div className="row">
                <div className="col-md-4">{MainCard}</div>
              </div>
            </div>
          </section> */}

          <hr/><h1 className="divider">WEB SHOWS</h1><hr/>

          {/* rows start here */}

          <div className="row">
            <div className="col-md">
              <div
                className="card"
              >
                <img
                  src="https://www.syfy.com/sites/syfy/files/styles/1170xauto/public/the-witcher-season-2-poster-vertical.jpg"
                  className="img-fluid"
                  alt=""
                /> 
                <h6>THE WITCHER</h6>  
              </div>
            </div>
            <div className="col-md">
              <div
                className="card"
               
                id="lucifer"
              >
                <img
                  src="https://assets2.ignimgs.com/2016/08/24/luciferver3xlgjpg-fe465d.jpg"
                  className="img-fluid"
                  alt=""
                />
                  <h6>LUCIFER</h6>
              </div>
            </div>
            <div className="col-md">
              <div className="card">
                <img
                  src="https://images.squarespace-cdn.com/content/v1/52fc05c9e4b08fc45bd99090/1395777658470-WKSYVFVCAEO3V3SYQPNQ/game-of-thrones-poster.jpg"
                  className="img-fluid"
                  alt=""
                />
                <h6>GOT</h6>
              </div>
            </div>
            <div className="col-md">
              <div className="card">
                <img
                  src="https://images-na.ssl-images-amazon.com/images/I/91muJfdcwUL.jpg"
                  className="img-fluid"
                  alt=""
                />
               <h6>13 REASON WHY?</h6>
              </div>
            </div>
            <div className="col-md">
              <div className="card">
                <img
                   src="https://m.media-amazon.com/images/M/MV5BMTkxNjEwOTY4M15BMl5BanBnXkFtZTgwNTA2ODk0NzE@._V1_.jpg"
                  className="img-fluid"
                  alt=""
                />
                
                <h6>SHANNARA CHRONICLES</h6>
              
              </div>
            </div>
            <div className="col-md">
              <div className="card">
                <img
                  src="https://m.media-amazon.com/images/M/MV5BNjZkNzY4M2ItOWY0Ni00Y2ViLWE1NjItOTIyYzZjMzg5M2E1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg"
                  className="img-fluid"
                  alt=""
                />
               
              <h6>LOCK AND KEY</h6>
              
              </div>
            </div>
            <div className="col-md">
              <div className="card">
                <img
                  src="https://m.media-amazon.com/images/M/MV5BYjA2M2YxMjQtOTIwOS00ODIyLThmYWEtM2Y1NGFkNjI1YmNkXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg"
                  className="img-fluid"
                  alt=""
                />     
              <h6>CURSED</h6> 
              </div>
            </div>
          </div>

          {/* row 2 start */}
          <div class="row">
            <div className="col-md">
              <div className="card">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSefxj9BfJOFWKUoft12NTcsHlgr7PX8eqNxAP2dgvwgq2WI4U1L_lRH0li4luyk6Aawbw&usqp=CAU"
                  className="img-fluid"
                  alt=""
                />     
               <h6>VENOM</h6> 
              </div>
            </div>

            <div className="col-md">
              <div className="card">
                <img
                  src="https://m.media-amazon.com/images/M/MV5BN2ZmYjg1YmItNWQ4OC00YWM0LWE0ZDktYThjOTZiZjhhN2Q2XkEyXkFqcGdeQXVyNjgxNTQ3Mjk@._V1_FMjpg_UX1000_.jpg"
                  className="img-fluid"
                  alt=""
                />     
              <h6>THE STRANGER THINGS</h6> 
              </div>
            </div>

            <div className="col-md">
              <div className="card">
                <img
                  src="https://flxt.tmsimg.com/assets/p12180342_b1t_v8_aa.jpg"
                  className="img-fluid"
                  alt=""
                />     
              <h6>BADLANDS</h6> 
              </div>
            </div>

            <div className="col-md">
              <div className="card">
                <img
                  src="https://m.media-amazon.com/images/M/MV5BZDRmNjVmODUtZjc0Zi00YTVkLWJhZjYtNjRjYmJiMjU4ODJkXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_FMjpg_UX1000_.jpg"
                  className="img-fluid"
                  alt=""
                />     
              <h6>IRREGULERS</h6> 
              </div>
            </div>

            <div className="col-md">
              <div className="card">
                <img
                  src="https://pbs.twimg.com/media/ECbNj-lXkAAWqYV.jpg:large"
                  className="img-fluid"
                  alt=""
                />     
              <h6>TIANS</h6> 
              </div>
            </div>

            <div className="col-md">
              <div className="card">
                <img
                  src="https://flxt.tmsimg.com/assets/p185199_b_v8_ap.jpg"
                  className="img-fluid"
                  alt=""
                />     
              <h6>HEROES</h6> 
              </div>
            </div>

            <div className="col-md">
              <div className="card">
                <img
                  src="https://assets2.ignimgs.com/2014/03/24/the-100-poster-saison1-22jpg-0a57ac.jpg"
                  className="img-fluid"
                  alt=""
                />     
              <h6>THE 100</h6> 
              </div>
            </div>
          </div>
        <hr/><h1 className="divider">Movies</h1><hr/>
          
            {/* row 3 start here  */}
            <div className="row">
            <div className="col-md">
              <div className="card">
                <img
                  src="https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_.jpg"
                  className="img-fluid"
                  alt=""
                />     
              <h6>THE AVENGERS</h6> 
              </div>
            </div>

            <div className="col-md">
              <div className="card">
                <img
                  src="https://www.themoviedb.org/t/p/original/tWqcuPsuGkmD8KWHFEqcq5vEdhu.jpg"
                  className="img-fluid"
                  alt=""
                />     
              <h6>NOW YOU SEE ME </h6> 
              </div>
            </div>

            <div className="col-md">
              <div className="card">
                <img
                  src="https://m.media-amazon.com/images/M/MV5BNDMwNjAzNzYwOF5BMl5BanBnXkFtZTcwMDY5NzcyMw@@._V1_.jpg"
                  className="img-fluid"
                  alt=""
                />     
              <h6>TWILIGHT</h6> 
              </div>
            </div>

            <div className="col-md">
              <div className="card">
                <img
                  src="https://m.media-amazon.com/images/M/MV5BMTQ5NDlmZWUtMjIyMC00NzQ3LTg3OWYtMzRkY2FiNzQ0Njc4XkEyXkFqcGdeQXVyNDQ2MTMzODA@._V1_.jpg"
                  className="img-fluid"
                  alt=""
                />     
              <h6>PARCY JACKSON</h6> 
              </div>
            </div>

            <div className="col-md">
              <div className="card">
                <img
                  src="https://www.themoviedb.org/t/p/original/bdlpf6awE5236w3qsfQUsjR8tT7.jpg"
                  className="img-fluid"
                  alt=""
                />     
              <h6>ZOMBIE LAND</h6> 
              </div>
            </div>

            <div className="col-md">
              <div className="card">
                <img
                  src="https://kalafudra.files.wordpress.com/2021/06/theconjuringthedevilmademedoit.jpg"
                  className="img-fluid"
                  alt=""
                />     
              <h6>CONJURING</h6> 
              </div>
            </div>
            <div className="col-md">
              <div className="card">
                <img
                  src="https://m.media-amazon.com/images/M/MV5BMTk1OTc2ZmUtODU0Yy00NGJiLWJmNmQtODI0MzBjODk3MjI4L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_FMjpg_UX1000_.jpg"
                  className="img-fluid"
                  alt=""
                />     
              <h6>UNDERWORLD</h6> 
              </div>
            </div>

            </div>


        </div>

      
      </div>
    
  );
};
export default Home;
