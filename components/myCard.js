const Card = ({ image, name, description }) => {
    return (
      <div className="card">

    <img src={image} alt="" />
      <h1>{name}</h1>
      <p>{description}</p>
      </div>
    );
  };

  export default Card;

// const Card = ({ id, title, description }) => {
//   return (
//     <div className="card">
//       <h1>{id}</h1>
//       <h1>{title}</h1>
//       <p>{description}</p>
//     </div>
//   );
// };

// export default Card;
