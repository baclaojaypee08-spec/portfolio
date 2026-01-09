function SectionHeader({ icon: Icon, title }) {
  return (
    <h2 className="text-lg font-semibold flex items-center gap-2 mb-4">
      <Icon className="w-7 h-7 p-1 rounded-full transition-transform duration-200 hover:scale-110 rounded-full bg-gray-100 dark:bg-slate-700" />
      <span>{title}</span>
    </h2>
  );
}

export default SectionHeader;
