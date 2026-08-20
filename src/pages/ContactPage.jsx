import { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../lib/firebaseClient'; // Connects directly to your updated client config script

export default function ContactPage() {
  // Core state objects to capture form input fields dynamically
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);

  // Submit form and upload to Cloud Firestore online clusters
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!fullName.trim() || !email.trim() || !message.trim()) return;

    setSending(true);
    setSuccess(false);

    try {
      // Points exactly to your live Cloud Firestore collections row
      const targetCollectionRef = collection(db, "contact_messages");
      
      const messagePayload = {
        name: fullName,
        email: email,
        text: message,
        timestamp: new Date().toISOString() // Timestamps your entries
      };

      // Push document straight into online cloud nodes
      await addDoc(targetCollectionRef, messagePayload);
      
      // Clear out entry form states upon successful upload
      setSuccess(true);
      setFullName('');
      setEmail('');
      setMessage('');

      // Auto-hide alert badge banner after 4 seconds
      setTimeout(() => setSuccess(false), 4000);
    } catch (err) {
      alert("Database link failed! Ensure your Firestore configuration rules match Test Mode parameters.");
      console.error("Firestore push error logs: ", err);
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="w-full bg-white text-center pt-40 px-6 min-h-screen font-poppins">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">Contact Us</h1>
      <p className="text-gray-400 text-sm font-light max-w-xl mx-auto mb-12">
        Reach out to the department registration bureau or administrative hubs directly.
      </p>
      
      <div className="max-w-xl mx-auto text-left border border-gray-200 p-8 rounded-2xl bg-gray-50 shadow-sm mb-16">
        
        {/* Dynamic Notification Success Alert Banner */}
        {success && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 text-sm font-medium rounded-lg">
            ✓ Message sent successfully! Your message data has been saved live into your online Firebase console nodes.
          </div>
        )}

        <form onSubmit={handleFormSubmit} className="space-y-4">
          <div>
            <label className="text-xs font-semibold tracking-wider text-gray-500 block mb-1 uppercase">Full Name</label>
            <input 
              type="text" required placeholder="Enter name"
              value={fullName} onChange={(e) => setFullName(e.target.value)}
              className="w-full p-3 bg-white border border-gray-200 outline-none rounded text-sm text-gray-700 focus:ring-2 focus:ring-red-400" 
            />
          </div>
          <div>
            <label className="text-xs font-semibold tracking-wider text-gray-500 block mb-1 uppercase">Email Address</label>
            <input 
              type="email" required placeholder="name@domain.com"
              value={email} onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 bg-white border border-gray-200 outline-none rounded text-sm text-gray-700 focus:ring-2 focus:ring-red-400" 
            />
          </div>
          <div>
            <label className="text-xs font-semibold tracking-wider text-gray-500 block mb-1 uppercase">Your Message</label>
            <textarea 
              rows="4" required placeholder="Type query details..."
              value={message} onChange={(e) => setMessage(e.target.value)}
              className="w-full p-3 bg-white border border-gray-200 outline-none rounded text-sm text-gray-700 resize-none focus:ring-2 focus:ring-red-400" 
            />
          </div>
          
          <button 
            type="submit" 
            disabled={sending}
            className="w-full py-3 bg-red-500 text-white font-bold text-xs tracking-wider rounded shadow-sm uppercase border-none hover:bg-red-600 cursor-pointer disabled:bg-gray-400 transition-colors"
          >
            {sending ? "Sending to Cloud..." : "Submit Form"}
          </button>
        </form>
      </div>
    </div>
  );
}
