export default function DashboardComponents() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto mt-6">
      <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm text-center">
        <h4 className="text-gray-400 text-xs font-semibold tracking-wider uppercase">Total Majors</h4>
        <p className="text-3xl font-bold text-gray-800 mt-2">24</p>
      </div>
      <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm text-center">
        <h4 className="text-gray-400 text-xs font-semibold tracking-wider uppercase">Active Students</h4>
        <p className="text-3xl font-bold text-red-500 mt-2">1,240</p>
      </div>
      <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm text-center">
        <h4 className="text-gray-400 text-xs font-semibold tracking-wider uppercase">Total Faculty</h4>
        <p className="text-3xl font-bold text-gray-800 mt-2">180</p>
      </div>
    </div>
  );
}
