import { Link } from "react-router-dom";
import FetchData from "../Pages/FetchData";

function Home() {
  return (
    <div>
      <Link to='/fetchdata' className="font-bold text-2xl" >
        Calling the data from the API 
      </Link>
    </div>
  );
}

export default Home;