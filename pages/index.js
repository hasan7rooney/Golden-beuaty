import { useEffect, useState } from "react";
import Card from "../components/myCard";
import Login from '../components/login'

export async function getStaticProps(){
  const res=await fetch(
    "https://goldenbeauty.herokuapp.com/v1/products"
  );
  const posts=await res.json();
  return {props:{posts}};
}


const Home = (props) => {

  return (
    <>
    {/* <Login/> */}

    <div>
    <header>
      <div className="container">
        <nav>
          <h1 className="golden">Golden Beauty</h1>         
          <ul className="nav-area">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">COLLECTIONS</a>
            </li>
            <li>
              <a href="#">LOGIN</a>
            </li>
            <li>
              <a href="#">CONTACT US</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    <main>
      <section className="grid">
        <div className="container">
          <div className="top-rated">
            <h2>Top Rated</h2>
            <div className="cards">
              {props.posts.data.map((e) => 
                 (
                  <Card
                  image={e.image}
                  title={e.name}
                  description={e.description}
                  />
                )
              )}

            </div>
          </div>
          <div className="most-popular">
            <h2>Most Popular</h2>
            <div className="cards">
            {props.posts.data.map((e) => 
                 (
                  <Card
                  image={e.image}
                  title={e.name}
                  description={e.description}
                  />
                )
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
  </>
  );
};

export default Home;
