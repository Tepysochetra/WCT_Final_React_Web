import { useState, useEffect } from 'react';
import { collection, addDoc, getDocs, query, orderBy } from 'firebase/firestore'; 
import { db } from '../lib/firebaseClient'; // Hooks into your project configuration file
import PostForm from '../components/PostForm';
import PostList from '../components/PostList';

export default function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // 1. Fetch live comment streams from Cloud Firestore on page load
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const commentsRef = collection(db, "blog_comments");
        // Pull logs automatically ordered by newest submission timestamps
        const sortedQuery = query(commentsRef, orderBy("timestamp", "desc"));
        const snapshot = await getDocs(sortedQuery);
        
        const data = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setPosts(data);
      } catch (err) {
        console.error("Error reading live comment rows matrix: ", err);
      } finally {
        setLoading(false);
      }
    };

    fetchComments();
  }, []);

  // 2. Publish and write a comment permanently to the database
  const handleAddPost = async (newPostData) => {
    try {
      const collectionRef = collection(db, "blog_comments");
      
      const payload = {
        name: newPostData.name,
        text: newPostData.text,
        timestamp: new Date().toISOString() // Saves precise international time strings
      };

      const docRef = await addDoc(collectionRef, payload);
      
      // Prepend cleanly onto your visible feed deck instantly
      setPosts([{ id: docRef.id, ...payload }, ...posts]);
    } catch (err) {
      alert("Database write error! Check if your Firestore Rules tab is published in Test Mode.");
      console.error(err);
    }
  };

  return (
    <div className="bg-white w-full pt-40 pb-12 px-6 font-poppins min-h-screen">
      <section className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* Left Side: Inputs Form and Scrollable Feed Decks */}
        <div className="lg:col-span-2 space-y-8">
          
          <div className="w-full rounded-xl overflow-hidden shadow-sm border border-gray-100">
            <img src="/images/graduates.jpg" alt="RUPP Graduates" className="w-full h-auto max-h-80 object-cover block" />
          </div>

          <div className="text-left">
            <h2 className="text-gray-800 font-bold text-2xl mb-2">Our Certificate</h2>
            <p className="text-gray-500 text-sm font-light leading-relaxed">
              The Royal University of Phnom Penh certifies engineering compliance tracks across computing systems design pipelines.
            </p>
          </div>

          <PostForm onAddPost={handleAddPost} />
          
          {loading ? (
            <div className="text-center py-6 text-sm text-gray-400 font-light animate-pulse">
              Syncing live cloud feedback loops...
            </div>
          ) : (
            <PostList posts={posts} />
          )}
        </div>

        {/* Right Side: Sidebar Navigation Panels */}
        <div className="text-left">
          <h3 className="bg-red-500 text-white font-semibold text-center text-sm py-2 px-4 rounded shadow-sm mb-4">
            Department Portal
          </h3>
          <div className="border border-gray-100 rounded-lg divide-y bg-white overflow-hidden shadow-sm">
            {["Information Technology Engineering", "Computer Science", "Information Technology", "Bioengineering"].map((dept, idx) => (
              <div key={idx} className="p-4 text-gray-600 text-sm font-light hover:bg-red-50/40 hover:text-red-500 transition-colors cursor-pointer flex justify-between items-center">
                <span>{dept}</span>
                <i className="fa-solid fa-chevron-right text-[10px] text-gray-300" />
              </div>
            ))}
          </div>
        </div>

      </section>
    </div>
  );
}
