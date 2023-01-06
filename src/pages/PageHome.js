import "../App.css";
import Clock from "../components/clock";
import Button from "../components/Button";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "./userSlice";
import { Link } from "react-router-dom";


const PageHome = () => {
  const dispatch = useDispatch();
  const users = useSelector(store => store.users);

  const handleRemoveUser = (id) => {
    dispatch(deleteUser({ id }));
  }

  const renderCard = () => users.map(user => (
    <div className=" bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 p-5 flex items-center justify-between   " key={user.id}>
      <div>
      <span className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{user.subject}</span><br />
        <span className="font-bold text-xl text-green-400">{user.StartTime}</span> -  <span className="font-bold text-xl text-green-400">{user.EndTime}</span><br />
        <span className="font-bold text-xl text-gray-600">{user.room}</span><br />
        <p className="font-bold text-lg text-gray-700">{user.name}</p>
        
      </div>
      <div className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-500 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">

        <button
          onClick={() => handleRemoveUser(user.id)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </button>
      </div>
    </div>
  ))

  return (

    <div className="App">
      <header className='header-home'>
        <h1>Meeting Room</h1>
        <Clock />
      </header >
      <body className="App-body">
        <div class="row">
          <br />
          <div className="App-Status">Available</div>
          <br />
          <div className="App-Patner ">
            <h2>Welcome Partner</h2>
            <h1 style={{ color: "Green" }}>02.00 - 03.00</h1>
            <h2>by Admin</h2>
          </div>
          <div className="button">
            <Link to="/PageForm"><Button>Book</Button></Link>
            <div className="grid gap-5 md:grid-cols-2">
              {users.length ? renderCard() : <p className="text-center col-span-2 text-gray-700 font-semibold">Not Booking Now</p>}
            </div>
          </div>
          <br />
        </div>
      </body>
      <footer className="App-footer-home">
        Design Dolly Solution co,td
      </footer>
    </div>
  );
}

export default PageHome;