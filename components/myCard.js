const MyCard = ({ img, name, currency, description}) => {
    return (
      <div className="card">
        <img src={img} alt="" />
        <div className="overlay">
          <small className="date">{currency}</small>
          <br />
          <small>{description}</small>
        </div>
        <p>{name}</p>
      </div>
    );
  };
  
  export default MyCard;
  