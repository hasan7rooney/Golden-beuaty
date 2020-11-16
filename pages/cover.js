const Cover = ({ cover, setCover, count, setCount,upcoming}) => {

    const handlePrev=() => {
      if (count == 1) return;
      else {
        setCount(count - 1);
        setCover({
          img: `https://goldenbeauty.herokuapp.com/v1/products${id[count].image}`,
          title: id[count].name,
         
        });
      }
    }
    const handlNext=() => {
      if (count == upcoming.length) {
        setCount(1);
      } else {
        setCount(count + 1);
        setCover({
          img: `https://goldenbeauty.herokuapp.com/v1/products${id[count].image}`,
          title: upcoming[count].name,
         
        });
      }
    }
  
    return (
      <section className="cover">
        <img className="cover-img" src="/makeup.jpg" alt="" />
        <div className="dim">
          <div className="container">
            <div className="text">
              <h1>{cover.title}</h1>
              <p style={{ color: "#ffba00" }} className="year">
                {cover.year}
              </p>
              
            </div>
            <div className="controls">
             
            </div>
          </div>
        </div>
      </section>
    );
  };
  export default Cover;