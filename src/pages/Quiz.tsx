import { useAuth } from "../context/AuthContext";
import QuizComponent from "../components/quiz/QuizComponent";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { HelpCircle } from "lucide-react";

const Quiz = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  if (!isAuthenticated) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center py-12 px-4 bg-violet-50/50">
        <div className="mb-8 text-center">
          <div className="flex justify-center mb-6">
            <HelpCircle className="h-16 w-16 text-violet-600" />
          </div>
          <h1 className="text-4xl font-bold text-violet-800 mb-4">Test Your Art Knowledge</h1>
          <p className="text-xl text-gray-700 max-w-2xl">
            Challenge yourself with our interactive quiz on art history and contemporary works to earn a personalized certificate.
          </p>        </div>

        <Button 
          className="text-lg py-6 px-8 bg-violet-600 hover:bg-violet-700" 
          onClick={() => navigate("/login")}
        >
          Login to Take the Quiz
        </Button>
      </div>
    );
  }

  return (
    <div>
      <QuizComponent />
    </div>
  );
};

export default Quiz;
