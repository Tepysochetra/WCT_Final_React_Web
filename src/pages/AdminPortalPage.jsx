import { useState } from 'react';
import DashboardComponents from '../components/DashboardComponents';

export default function AdminPortalPage() {
  // Mock administrative notification inbox stream matching your contact form submissions datasets
  const [inboxMessages] = useState([
    {
      id: 1,
      name: "Kosal Tepysochetra",
      email: "kosaltepysochetra07@gmail.com",
      text: "I want to contact the admin regarding the WCT final assignment guidelines pipeline.",
      time: "Just now",
      status: "New Notification"
    },
    {
      id: 2,
      name: "Sokha Mean",
      email: "sokha.mean@rupp.edu.kh",
      text: "Is the project submission portal open for Faculty of Engineering Gen11 cadences?",
      time: "2 hours ago",
      status: "Archived"
    }
  ]);

  return (
    <div className="w-full bg-gray-50/50 pt-40 pb-16 px-6 text-center min-h-screen font-poppins antialiased">
      
      {/* 1. Header Banner Information Card Container */}
      <div className="max-w-5xl mx-auto mb-10 text-left">
        <h1 className="text-3xl font-bold text-gray-800 mb-1">Administrative Central Console</h1>
        <p className="text-gray-400 text-sm font-light">Secure metric logging pipeline trackers for institutional databases.</p>
      </div>

      {/* 2. Top Metric Statistics Rows Grid Element Box */}
      <DashboardComponents />

      {/* 3. Live Admin Notification Inbox Stream Table Panel */}
      <div className="max-w-4xl mx-auto mt-12 text-left">
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-semibold text-gray-800 text-[18px]">
            Admin Notification Inbox ({inboxMessages.length})
          </h3>
          <span className="px-3 py-1 bg-red-100 text-red-600 text-xs font-semibold rounded-full uppercase tracking-wider animate-pulse">
            Live Stream Connected
          </span>
        </div>

        {/* Message Cards Stream Iteration Deck */}
        <div className="space-y-4">
          {inboxMessages.map((msg) => (
            <div 
              key={msg.id} 
              className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-md flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              <div className="space-y-2 max-w-2xl">
                <div className="flex items-center gap-3">
                  <h4 className="font-bold text-gray-800 text-sm">{msg.name}</h4>
                  <span className="text-xs text-gray-400 font-light">({msg.email})</span>
                </div>
                <p className="text-gray-600 text-sm font-light leading-relaxed">
                  "{msg.text}"
                </p>
                <p className="text-[11px] text-gray-400 font-light flex items-center gap-1">
                  <i className="fa-regular fa-clock text-[10px]"></i> {msg.time}
                </p>
              </div>

              {/* Status Badge Action Triggers */}
              <div className="self-start md:self-center">
                <span className={`px-3 py-1 text-xs font-medium rounded-md tracking-wide ${
                  msg.status === 'New Notification' 
                    ? 'bg-red-50 text-red-500 font-semibold' 
                    : 'bg-gray-100 text-gray-500'
                }`}>
                  {msg.status}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

    </div>
  );
}
