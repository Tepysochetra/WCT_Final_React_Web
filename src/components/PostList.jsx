export default function PostList({ posts }) {
  
  // Dynamic system time converter utility function
  const formatTimeDifference = (timestampString) => {
    if (!timestampString) return "Just now";
    
    const commentTime = new Date(timestampString);
    const currentTime = new Date();
    const differenceInSeconds = Math.floor((currentTime - commentTime) / 1000);

    // If the data comes back skewed or format errors exist
    if (differenceInSeconds < 0) return "Just now"; 

    // Time evaluation tracking cascades
    if (differenceInSeconds < 60) {
      return "Just now";
    }

    const differenceInMinutes = Math.floor(differenceInSeconds / 60);
    if (differenceInMinutes < 60) {
      return `${differenceInMinutes} ${differenceInMinutes === 1 ? 'minute' : 'minutes'} ago`;
    }

    const differenceInHours = Math.floor(differenceInMinutes / 60);
    if (differenceInHours < 24) {
      return `${differenceInHours} ${differenceInHours === 1 ? 'hour' : 'hours'} ago`;
    }

    // If the message is older than 24 hours (Tomorrow / Later dates), print the true calendar day
    return commentTime.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div className="max-w-xl mx-auto space-y-4 mt-8">
      <h3 className="font-semibold text-gray-800 text-[18px] text-left">
        Live Feedback Stream ({posts.length})
      </h3>
      
      {posts.length === 0 ? (
        <p className="text-gray-400 text-sm text-left font-light">No entries logged yet. Be the first to leave a comment!</p>
      ) : (
        posts.map((post, idx) => (
          <div key={post.id || idx} className="bg-white border border-gray-200 rounded-[12px] p-5 text-left shadow-sm transition-all hover:shadow-md">
            <div className="flex justify-between items-center mb-2">
              <h4 className="font-semibold text-gray-800 text-sm tracking-wide">{post.name}</h4>
              
              {/* Runs the calculations dynamically right inside your display list cards */}
              <span className="text-xs text-gray-400 font-light">
                {formatTimeDifference(post.timestamp)}
              </span>
            </div>
            <p className="text-gray-600 text-sm font-light leading-relaxed whitespace-pre-wrap">{post.text}</p>
          </div>
        ))
      )}
    </div>
  );
}
