


// import { login } from "../api";
// import { useState } from "react";

// import { useRouter } from 'next/router'
// const Login = () => {

//   const router = useRouter()
//   const [email, setEmail] = useState();
//   const [password, setPassword] = useState();
//   const [isLoading, setIsLoading] = useState(false);


//   const handlSubmit = () => {
//     setIsLoading(true);
//     login({ email, password }, (err, result) => {
//       if (err) throw err;
//       if (!result.status) {
//         Object.keys(result.errMsg).forEach((key) => {
//           message.error(result.errMsg[key]);
//         });
//         setIsLoading(false);
//       } else {
//         localStorage.setItem("blog_token", result.token);
//         localStorage.setItem("blog_user", JSON.stringify(result.user));
//         router.replace('/');
//         setIsLoading(false);
//       }
//     });
//   };
//   return (
//     <>
//       <div className="login-box">
//         <h1>Login</h1>
//         <div className="textbox">
//           <i className="fas fa-user"></i>
//           <label>
//             <input type="text"     value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Email" /> 
//           </label>
//         </div>
//         <div className="textbox">
//           <i className="fas fa-lock"></i>
//           <label>
//             <input  value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="Password" />
//           </label>
//         </div>

//         <label>
//           <button className="btn" loading={isLoading}
//               onClick={handlSubmit}
//               type="primary"
//               block  > login </button>
//         </label>
//       </div>
//     </>
//   );
// };

// export default Login;
import { Card, Input, Row, Col, Button, message } from "antd";

import { login } from "../api";
import { useState } from "react";

import { useRouter } from 'next/router'

const Login = () => {
  const router = useRouter()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handlSubmit = () => {
    login({ email, password }, (err, result) => {
      setIsLoading(true);
      if (err) throw err;
      if (!result.status) {
        Object.keys(result.errMsg).forEach((key) => {
          message.error(result.errMsg[key]);
        });
        setIsLoading(false);
      } else {
        localStorage.setItem("blog_token", result.token);
        localStorage.setItem("blog_user", JSON.stringify(result.user));
        router.replace('facebook.com');
        setIsLoading(false);
      }
    });
  };

  return (
    <div className="login-page">
      <Card style={{ width: 400 }}>
        <Row gutter={[20, 20]}>
          <Col span={24}>
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
          </Col>
          <Col span={24}>
            <Input.Password
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </Col>
          <Col span={24}>
            <Button
              loading={isLoading}
              onClick={handlSubmit}
              type="primary"
              block
            >
              Login
            </Button>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default Login;
