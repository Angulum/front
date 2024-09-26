const OverviewButton = ({ label, icon, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="rounded-[50px] bg-[#E9E9E9] text-black flex items-center p-1 hover:scale-[1.02] transition-all"
    >
      <div
        className="w-12 h-12 rounded-full  
        inline-flex items-center justify-center  
        bg-[#FFFFFF]"
      >
        {icon}
      </div>
      <span className="ml-2 pr-12">{label}</span>
    </button>
  );
};

export default OverviewButton;
