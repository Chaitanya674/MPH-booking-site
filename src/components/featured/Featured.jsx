import useFetch from "../../hooks/useFetch";
import Audi from "../../images/Auditorium.jpeg";
import Mph from "../../images/MPH.jpeg";
import playground from "../../images/Playground.jpeg";
import "./featured.css";

const Featured = () => {

  return (
    <>
      <div className="featured">
          <>
            <div className="featuredItem">
              <img src={Audi} alt="" className="featuredImg" />
              <div className="featuredTitles">
                <h1>Auditorium</h1>
              </div>
            </div>

            <div className="featuredItem">
              <img src={Mph} alt="" className="featuredImg" />
              <div className="featuredTitles">
                <h1>M.P. Hall</h1>
              </div>
            </div>
            <div className="featuredItem">
              <img src={playground} alt="" className="featuredImg" />
              <div className="featuredTitles">
                <h1>Playground</h1>
              </div>
            </div>
          </>
      </div>
      <div className="featured">
          <>
            <div className="featuredItem">
              <img src={Audi} alt="" className="featuredImg" />
              <div className="featuredTitles">
                <h1>Auditorium</h1>
              </div>
            </div>

            <div className="featuredItem">
              <img src={Mph} alt="" className="featuredImg" />
              <div className="featuredTitles">
                <h1>M.P. Hall</h1>
              </div>
            </div>
            <div className="featuredItem">
              <img src={playground} alt="" className="featuredImg" />
              <div className="featuredTitles">
                <h1>Playground</h1>
              </div>
            </div>
          </>
      </div>
      <div className="featured">
          <>
            <div className="featuredItem">
              <img src={Audi} alt="" className="featuredImg" />
              <div className="featuredTitles">
                <h1>Auditorium</h1>
              </div>
            </div>

            <div className="featuredItem">
              <img src={Mph} alt="" className="featuredImg" />
              <div className="featuredTitles">
                <h1>M.P. Hall</h1>
              </div>
            </div>
            <div className="featuredItem">
              <img src={playground} alt="" className="featuredImg" />
              <div className="featuredTitles">
                <h1>Playground</h1>
              </div>
            </div>
          </>
      </div>
    </>
  );
};

export default Featured;
