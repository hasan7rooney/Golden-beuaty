import { useEffect, useState } from "react";
import MyCard from "../components/myCard";
import Login from '../components/login'

const Home = () => {
  const [top, setTop] = useState([]);
  const [popular, setPopular] = useState([]);
  const [topLoading, setTopLoading] = useState(true);
  const [popularLoading, setPopularLoading] = useState(true);

  useEffect(() => {
    fetch(
      "http://makeup-api.herokuapp.com/api/v1/products.json?brand=covergirl&product_type=lipstick")
      .then((response) => response.json())
      .then((result) => {
        setTop(result);
        setTopLoading(false);
      });

    fetch(
"http://makeup-api.herokuapp.com/api/v1/products.json?brand=covergirl&product_type=lipstick")
      .then((response) => response.json())
      .then((result) => {
        console.log(typeof result)
        setPopular(result);
        setPopularLoading(false);
          
      });
  }, []);

  return (
    <>
    <Login/>

    {/* <div>
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
              {top.map((item) => 
                 (
                  <MyCard
                    key={item.id}
                    img={item.image_link}
                    name={item.name}

                  />
                )
              )}
            </div>
          </div>
          <div className="most-popular">
            <h2>Most Popular</h2>
            <div className="cards">
              {popular.map((item) => 
               (
                  <MyCard
                    key={item.id}
                    img={item.image_link}
                    name={item.name}
                  
                  />
                )
              )}
            </div>
          </div>
 
        </div>
      </section>
    </main>
  </div> */}
  </>
  );
};
export default Home;
