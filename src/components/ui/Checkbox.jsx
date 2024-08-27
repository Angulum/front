export const Checkbox = ({ label, checked, onChange }) => {
  return (
    <div className="text-xs flex items-center gap-2">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="rounded-full w-3 h-3 appearance-none border border-[#E5E5E5] checked:bg-[#4F4F4F] checked:border-transparent text-[#85858550] checked:text-[#000000]"
      />
      <p>{label}</p>
    </div>
  );
};
