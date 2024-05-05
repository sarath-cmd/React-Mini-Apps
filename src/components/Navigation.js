import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div className=" mx-[22vw] absolute bottom-0 left-0">

      <ul className="flex">
        <li className="inline">
          <Link to="/">
            <button className="p-[3%] bg-black text-lg text-lime-400 font-extrabold rounded-2xl m-4">
              1.Max Count Game
            </button>
          </Link>
        </li>

        <li className="inline">
          <Link to="/Clock" className="inline">
            <button className="p-[10%] bg-black text-lg text-lime-400 font-extrabold rounded-2xl m-4">
              2.Clock
            </button>
          </Link>
        </li>

        <li>
          <Link to="/Stopwatch" className="inline">
            <button className="p-[7%] bg-black text-lg text-lime-400 font-extrabold rounded-2xl m-4">
              3.Stopwatch
            </button>
          </Link>
        </li>

        <li>
          <Link to="/MessageFeed" className="inline">
            <button className="p-[3%] bg-black text-lg text-lime-400 font-extrabold rounded-2xl m-4">
              4.Message Feed
            </button>
          </Link>
        </li>

        <li>
          <Link to="/ReactionTimeGame" className="inline">
            <button className="p-[3%] bg-black text-lg text-lime-400 font-extrabold rounded-2xl m-4">
              5.Reaction Time Game
            </button>
          </Link>
        </li>

      </ul>

    </div>
  );
}

export default Navigation;