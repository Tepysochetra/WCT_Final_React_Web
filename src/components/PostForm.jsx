import { useState } from 'react';

export default function PostForm({ onAddPost }) {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');

  const handlePublish = (e) => {
    e.preventDefault();
    if (!name.trim() || !comment.trim()) return;
    onAddPost({ name, text: comment });
    setName('');
    setComment('');
  };

  return (
    <div className="border border-gray-200 rounded-[10px] p-6 bg-white shadow-sm max-w-xl mx-auto">
      <h3 className="font-semibold text-gray-800 text-[18px] mb-4 text-left">Leave a comment</h3>
      <form onSubmit={handlePublish} className="space-y-4">
        <input 
          type="text" placeholder="Enter Name" required value={name} onChange={(e) => setName(e.target.value)}
          className="w-full p-3 bg-gray-50 border border-gray-200 outline-none rounded text-sm text-gray-700 focus:ring-2 focus:ring-red-400"
        />
        <textarea 
          rows="4" placeholder="Your comment" required value={comment} onChange={(e) => setComment(e.target.value)}
          className="w-full p-3 bg-gray-50 border border-gray-200 outline-none rounded text-sm text-gray-700 resize-none focus:ring-2 focus:ring-red-400"
        />
        <button type="submit" className="w-full py-3 bg-red-500 text-white font-medium text-xs tracking-wider rounded transition-colors hover:bg-red-600 cursor-pointer">
          POST COMMENT
        </button>
      </form>
    </div>
  );
}
