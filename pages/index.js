import { useEffect, useState } from "react";
import Card from "../components/myCard";
import Login from './login'
import Cover from "./cover"
export async function getStaticProps(){
  const res=await fetch(
    "https://goldenbeauty.herokuapp.com/v1/products"
  );
  const posts=await res.json();
  return {props:{posts}};
}


const Home = (props) => {
  const [top, setTop] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [popular, setPopular] = useState([]);
  const [topLoading, setTopLoading] = useState(true);
  const [upcomingLoading, setUpcomingLoading] = useState(true);
  const [popularLoading, setPopularLoading] = useState(true);
  const [cover, setCover] = useState("");
  const [count, setCount] = useState(1);

  useEffect(() => {
    fetch(
      "https://goldenbeauty.herokuapp.com/v1/products"
    )
      .then((response) => response.json())
      .then((result) => {
        setTop(result.results);
        setTopLoading(false);
      });

    fetch(
      "https://goldenbeauty.herokuapp.com/v1/products"
    )
      .then((response) => response.json())
      .then((result) => {
        setUpcoming(result.results);
        setUpcomingLoading(false);
        setCover({
          img: `https://goldenbeauty.herokuapp.com/v1/products${result.data[1].image}`,
          title: result.data.name,
         
        });
      });

    fetch(
      "https://goldenbeauty.herokuapp.com/v1/products"
    )
      .then((response) => response.json())
      .then((result) => {
        setPopular(result.results);
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

      
    <Cover
        count={count}
        setCount={setCount}
        cover={cover}
        setCover={setCover}
        upcoming={upcoming}
      />
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
  </div> */}
 </>
   );
 };

 export default Home;


// import { Card, Input, Row, Col, Button, message } from "antd";

// import { login } from "../api.js";
// import { useState } from "react";

// import { useRouter } from 'next/router'

// const Login = () => {
//   const router = useRouter()
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [name, setName] = useState("");
//   const [phone, setPhone] = useState("");
//   const [isLoading, setIsLoading] = useState(false);

  // const handlSubmit = () => {
  //   setIsLoading(true);
  //   login({ email, password,name,phone }, (err, result) => {
  //     if (err) throw err;
  //     if (!result.status) {
  //       Object.keys(result.errMsg).forEach((key) => {
  //         message.error(result.errMsg[key]);
  //       });
  //       setIsLoading(false);
  //     } else {
  //       localStorage.setItem("blog_token", result.token);
  //       localStorage.setItem("blog_user", JSON.stringify(result.user));
  //       router.replace('/');
  //       setIsLoading(false);
  //     }
  //   });
  // };

//   const handelRequest = () => {
    
//     var myHeaders = new Headers();
//     myHeaders.append("Content-Type", "application/json");


//         let raw = JSON.stringify({
//           name,
//           phone,
//           password,
//           email
//         });
//         fetch("https://goldenbeauty.herokuapp.com/v1/register", {
//           method: "POST",
//           headers: myHeaders,
//           body: raw,
//           redirect: "follow",
//         })
//           .then((response) => response.text())
//           .then((result) => {
//             console.log(JSON.parse(result));
//             router.replace("/");
//           })
//           .catch((error) => console.log("error", error));
//   };
     
//   return (
//     <div className="login-page">
//       <Card style={{ width: 400 }}>
//         <Row gutter={[20, 20]}>
//           <Col span={24}>
//             <Input
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Email"
//             />
//           </Col>
//           <Col span={24}>
//             <Input.Password
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="Password"
//             />
//           </Col>
//           <Col span={24}>
//             <Input
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               placeholder="name"
//             />
//           </Col>
//           <Col span={24}>
//             <Input
//               value={phone}
//               onChange={(e) => setPhone(e.target.value)}
//               placeholder="phone"
//             />
//           </Col>
//           <Col span={24}>
//             <Button
//               loading={isLoading}
//               onClick={handelRequest}
//               type="primary"
//               block
//             >
//               Login
//             </Button>
//           </Col>
          
//         </Row>
//       </Card>
//     </div>
//   );
// };

// export default Login;
