const OverviewButton = ({ label, icon, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="rounded-[50px] bg-[#f8ebe3] text-black flex items-center p-1"
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
