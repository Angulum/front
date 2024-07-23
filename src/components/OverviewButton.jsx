const OverviewButton = ({ label, icon, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="rounded-[50px] bg-[#E9E9E9] text-[#333333] flex items-center p-1"
    >
      <div
        className="w-10 h-10 rounded-full  
        inline-flex items-center justify-center  
        bg-[#FFFFFF]"
      >
        {icon}
      </div>
      <span className="ml-2 pr-4">{label}</span>
    </button>
  );
};

export default OverviewButton;
