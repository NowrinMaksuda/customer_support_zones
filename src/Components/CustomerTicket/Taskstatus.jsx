import React from 'react';
import { toast } from 'react-toastify';

const Taskstatus = ({
  selectTitle,
  setSelectTitle,
  progress,
  setProgress,
  setResolveTask,
  resolveTasks,
  setResolve,
  resolve,
  setTickets,
  tickets
}) => {
  const resoveHandle = card => {
    setProgress(progress - 1);
    const filter = selectTitle.filter(title => title !== card);
    setSelectTitle(filter);
    toast('✅ Completed!');
    setResolveTask([...resolveTasks, card]);
    setResolve(resolve + 1);
    setTickets(tickets.filter(ticket=>ticket.title!==card))
  };

  const removeHandle = task => {
    console.log('removed', task);
    setResolve(resolve - 1);
    toast('removed');
    const fil = resolveTasks.filter(tas => tas !== task);
    setResolveTask(fil);
  };
  return (
    <div>
      <h1 className="text-[#34485A] font-semibold text-2xl my-3">
        Task Status
      </h1>
      <div className="text-[#627382] text-[16px]">
        {selectTitle.length > 0
          ? selectTitle.map((card, ind) => (
              <div
                key={ind}
                className="space-y-2.5 bg-white shadow p-2.5 rounded-sm mb-2"
              >
                <h2 className="text-[#001931] font-medium text-[20px]">
                  {card}
                </h2>
                <button
                  className="bg-[#02A53B] text-white rounded-[10px] w-full py-2 text-[18px]"
                  onClick={() => resoveHandle(card)}
                >
                  Complete
                </button>
              </div>
            ))
          : ' Select a ticket to add to Task Status'}
      </div>

      <h1 className="text-[#34485A] font-semibold text-2xl my-3 mt-10">
        Resolved Task
      </h1>
      <div>
        {resolveTasks.length > 0
          ? resolveTasks.map((task, ind) => (
              <div
                key={ind}
                className="bg-[#E0E7FF] mb-3 p-5 text-[20px] rounded-2xl text-[#001931]"
              >
                <p>{task}</p>

                <div className=" flex justify-between items-center space-y-1.5">
                  <p className="text-[15px] mt-2">✅ Completed</p>
                  <span onClick={() => removeHandle(task)}>
                    <i className="fa-solid fa-trash-can text-red-600"></i>
                  </span>
                </div>
              </div>
            ))
          : 'No resolved tasks yet.'}
      </div>
    </div>
  );
};

export default Taskstatus;