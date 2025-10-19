
import { toast } from 'react-toastify';

const Customercard = ({
  data,
  setProgress,
  progress,
  setSelectTitle,
  selectTitle
}) => {
  const clickHanlde = title => {
    console.log('clicked');
    setProgress(progress + 1);
    toast('✅ In Progress!')
    setSelectTitle([...selectTitle, title]);
  };
  return (
    <div
      className="space-y-2 my-1 bg-white p-4 rounded-2xl shadow"
      onClick={() => clickHanlde(data.title)}
    >
      <div className="flex items-center justify-between">
        <h2 className="text-[#001931] text-[18px] font-semibold">
          {data.title}
        </h2>
        <h3
          className={`text-[16px] font-medium rounded-2xl py-1 px-2.5 ${
            data.status == 'Open'
              ? 'bg-[#B9F8CF] text-[#0B5E06]'
              : 'bg-[#F8F3B9] text-[#9C7700]'
          }`}
        >
          <i className="fa-solid fa-circle"></i> {data.status}
        </h3>
      </div>
      <p className="text-[#627382] ">{data.description}</p>
      <div className="flex justify-between items-center">
        <div className="flex gap-3.5">
          <p className="text-[#627382]">{data.id}</p>
          <p
            className={`font-semibold ${
              data.priority == 'HIGH PRIORITY'
                ? 'text-[#F83044]'
                : data.priority == 'MEDIUM PRIORITY'
                ? 'text-[#FEBB0C]'
                : 'text-[#02A53B]'
            }`}
          >
            {data.priority}
          </p>
        </div>
        <div className="flex gap-3.5 text-[#627382]">
          <p>{data.customer}</p>
          <p>
            <i className="fa-regular fa-calendar"></i> {data.createdAt}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Customercard;