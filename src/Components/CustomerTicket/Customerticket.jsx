import Customercard from './Customercard';
import Taskstatus from './Taskstatus';

const Customerticket = ({
  loadData,
  progress,
  setProgress,
  setSelectTitle,
  selectTitle,
  resolveTasks,
  SetResolveTask,
  resolve,
  setResolve,
  tickets,
  setTickets
}) => {
 
  return (
    <div className="bg-[#F5F5F5] p-1">
      <div className="md:max-w-11/12 mx-auto">
        <h1 className="text-[#34485A] font-semibold text-2xl my-3">
          Customer Tickets
        </h1>
        <div className="grid lg:grid-cols-11 gap-5">
          <div className="grid lg:grid-cols-2 gap-5 lg:col-span-8">
            {tickets.map(data => (
              <Customercard
                setSelectTitle={setSelectTitle}
                selectTitle={selectTitle}
                data={data}
                key={data.id}
                setProgress={setProgress}
                progress={progress}
                loadData={loadData}
              ></Customercard>
            ))}
          </div>

          <div className="lg:col-span-3">
            <Taskstatus
              tickets={tickets}
              setTickets={setTickets}
              selectTitle={selectTitle}
              setSelectTitle={setSelectTitle}
              progress={progress}
              setProgress={setProgress}
              setResolveTask={setResolveTask}
              resolveTasks={resolveTasks}
              setResolve={setResolve}
              resolve={resolve}
            ></Taskstatus>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customerticket;