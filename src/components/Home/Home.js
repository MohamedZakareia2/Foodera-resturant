 import React, { Fragment } from "react";
import Header from "./Header";
import "./Home.css";
import prideimage from "./../../Assets/22.png"
import ingredients from "./../../Assets/2.png"
import Data from "../../Data";
const Home = ({ refs })=>{
    const blogitem = Data.map((item) =>{
        return(
            <div className="blog-d" key={item.id} >
                <div className="content-blog">
                <img src={item.img}></img>
                <h5>{item.title}</h5>
                <span>{item.time}</span>
                <h6>{item.price}</h6>
                <button><a>Order Now</a></button>
                </div>
            </div>
        )
    })



    return (
        <Fragment>
            <Header homeRef={refs.homeRef}/>
            <section>
            <div className="container-num">
                <div className="num" >
                <h2>1287+</h2>
                <h6>SAVINGS</h6>
                </div>
                <div className="num" >
                <h2>5786+</h2>
                <h6>PHOTOS</h6>
                </div>
                <div className="num" >
                <h2>1440+</h2>
                <h6>ROCKETS</h6>
                </div>
                <div className="num" >
                <h2>7110+</h2>
                <h6>GLOBES</h6>
                </div>
            </div>
            </section>
            <section ref={refs.aboutRef} className="pride" >
            <div className="container-pride" >
                <div className="left-pride">
                    <img src={prideimage} alt="" ></img>
                </div>
                <div className="right-pride" >
                <h2>We pride ourselves on making real food from the best ingredients.</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus 
                    bibendum in sit amet leo. Mauris feugiat erat tellus.
                    </p>
                <button>
                    <a href="#">Learn More</a>
                </button>
                </div>    
            </div>
            </section>
            <section className="ingredients">
                <div className="container-ing">
                    <div className="left-side" >
                        <h2>We make everything by hand with the best possible ingredients.</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                             Etiam et purus a odio finibus bibendum in sit amet leo. Mauris
                              feugiat erat tellus.Far far away, behind the word mountains, far from 
                              the countries Vokalia and Consonantia,
                             there live the blind texts.</p>
                        <ul>
                            <li>Etiam sed dolor ac diam volutpat.</li>
                            <li>Erat volutpat aliquet imperdiet.</li>
                            <li>purus a odio finibus bibendum.</li>
                        </ul>
                        <button><a>Learn More</a></button>
                    </div>
                    <div className="right-side">
                        <img src={ingredients} alt="ingredients" ></img>
                    </div>
                </div>
            </section>
            <section className="stomack" >
                <h2>When a man's stomach is full it makes no<br/>
                    difference whether he is rich or poor.</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio<br/>
                    finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
                <a href="#">Watch Our Story</a>
            </section>
            <section ref={refs.exploreRef} className="blogs" >
                <div className="container-blog">
                    <h2>Explore Our Foods</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
                </div>
                <div className="blog-d">{blogitem}</div>
            </section>
            <section ref={refs.faqRef} className="Questions">
            <h2>Frequently Asked Questions</h2>    
            <div className="l-p" >
            <div className="caption">
                <h5>~ Is Foodera Bread really baked fresh each day?</h5>
                <p>Far far away, behind the word mountains, far 
                    from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coas
                    t of the Semantics, a large language.</p>
            </div>
            <div className="caption">
                <h5>~ Is Foodera Bread really baked fresh each day?</h5>
                <p>Far far away, behind the word mountains, far 
                    from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coas
                    t of the Semantics, a large language.</p>
            </div>
            </div>
            <div className="r-p" >
            <div className="caption">
                <h5>~ Is Foodera Bread really baked fresh each day?</h5>
                <p>Far far away, behind the word mountains, far 
                    from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coas
                    t of the Semantics, a large language.</p>
            </div>
            <div className="caption">
                <h5>~ Is Foodera Bread really baked fresh each day?</h5>
                <p>Far far away, behind the word mountains, far 
                    from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coas
                    t of the Semantics, a large language.</p>
            </div>
            </div>
            </section>
            <section className="backing" >
                <div className="container-bake" >
                <h3>Baked fresh daily by bakers with passion.</h3>
                <button><a>Learn More</a></button>
                </div>
            </section>
            <section>
                <div className="prefooter" >
                    <h2>Hurry up! Subscribe our newsletter<br/>and get 25% Off</h2>
                    <p>Limited time offer for this month. No credit card required.</p>
                    <div className="sub">
                        <input placeholder="Email Address here" type={"email"} ></input>
                        <button>Subscribe</button>
                    </div>
                </div>
            </section>
            <footer>
                <div className="links" >
                <a>Register</a>
                <a>Forum</a>
                <a>Affiliate</a>
                <a>FAQ</a>
                </div>
                <div className="icons" >
                <a href="#" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-facebook"></i>
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-twitter"></i>
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-youtube"></i>
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-linkedin"></i>
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-instagram"></i>
      </a>
                </div>
                <span>© 2025. Foodera. All rights reserved.</span>
            </footer>
            </Fragment>
        
    )
};

export default Home;