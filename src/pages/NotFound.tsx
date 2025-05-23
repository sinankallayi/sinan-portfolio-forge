
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-black text-white p-4">
      <div className="text-9xl font-bold text-purple-500">404</div>
      <h1 className="text-3xl md:text-4xl font-bold mt-4 mb-6 text-center">
        Page Not Found
      </h1>
      <p className="text-zinc-400 text-center max-w-md mb-8">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Button asChild className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700">
        <Link to="/">
          Return Home
        </Link>
      </Button>
    </div>
  );
};

export default NotFound;
