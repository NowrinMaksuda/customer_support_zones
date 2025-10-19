import { Suspense, useEffect, useState } from 'react'
import './App.css'
  import { ToastContainer } from 'react-toastify';
import Customerticket from './Components/CustomerTicket/Customerticket'
import Footer from './Components/Footer/Footer'
import Herocard from './Components/HeroCard/Herocard'
import Navbar from './Components/Navbar/Navbar'

function App() {
  const [progress, setProgress] = useState(0)
  const [resolve, setResolve] = useState(0)
  const [selectTitle, setSelectTitle] = useState([])
  const [resolveTasks, setResolveTask] = useState([])
  const [tickets, setTickets] = useState([]);
  useEffect(() => {
    fetch('../Data.json')
      .then(res => res.json())
    .then(data=>setTickets(data))
  },[])
  return (
    <>
      <Navbar></Navbar>
      <Herocard progress={progress} resolve={resolve}></Herocard>
      <Suspense
        fallback={<span className="loading loading-spinner loading-xl"></span>}
      >
        <Customerticket
          selectTitle={selectTitle}
          setSelectTitle={setSelectTitle}
          setTickets={setTickets}
          tickets={tickets}
          progress={progress}
          setProgress={setProgress}
          setResolveTask={setResolveTask}
          resolveTasks={resolveTasks}
          resolve={resolve}
          setResolve={setResolve}
        ></Customerticket>
      </Suspense>

      <Footer></Footer>
      <ToastContainer />
    </>
  );
}

export default App;
