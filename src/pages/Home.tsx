import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useData } from "../context/DataContext";
import CreatePostForm from "../components/posts/CreatePostForm";
import PostCard from "../components/posts/PostCard";
import { Button } from "@/components/ui/button";
import { Palette } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { isAuthenticated, currentUser } = useAuth();
  const { posts } = useData();
  const navigate = useNavigate(); 

  if (!isAuthenticated) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center py-12 px-4 bg-violet-50/50">
        <div className="mb-8 text-center">
          <div className="flex justify-center mb-6">
            <Palette className="h-16 w-16 text-violet-600" />
          </div>
          <h1 className="text-4xl font-bold text-violet-800 mb-4">Welcome to Chromatique Art Gallery</h1>
          <p className="text-xl text-gray-700 max-w-2xl">
            A community platform for plantation enthusiasts to share knowledge, create polls, access learning materials, and test your knowledge.
          </p>
        </div>

        <div className="flex space-x-4">
          <Button 
            className="text-lg py-6 px-8 bg-violet-600 hover:bg-violet-700" 
            onClick={() => navigate("/login")}
          >
            Get Started
          </Button>
          <Button 
            variant="outline" 
            className="text-lg py-6 px-8 border-violet-200 hover:bg-violet-50 hover:text-violet-700" 
            onClick={() => navigate("/register")}
          >
            Learn More
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div>
      {isAuthenticated && <CreatePostForm />}
      
      <div>
        {posts.length > 0 ? (
          posts.map(post => (
            <PostCard key={post.id} post={post} />
          ))
        ) : (
          <div className="text-center py-8 text-gray-500">
            No posts yet. Be the first one to create a post!
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
