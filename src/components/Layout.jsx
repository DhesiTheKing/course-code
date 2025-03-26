import React, { useEffect, useState } from "react";
import { Bell, User, LogOut, Home, Book, Trophy, Users, BarChart, Mic } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Layout({ children }) {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMicOpen, setIsMicOpen] = useState(false);
  const [speechText, setSpeechText] = useState("");
  const authUser = useAuth();
  const navigate = useNavigate();



//REDIRECT BASED ON SPECH

function speachRedirect(text){

  const transcript1 = text.toLowerCase();
  const transcript = transcript1.replace(".","");
  
  if(transcript === 'go to homepage' || transcript === 'go to home' || transcript === 'go to mainpage' || transcript === 'go to main page'){
    navigate("/home")
  }


  if(transcript === 'go to sign language' || transcript === 'go to signlanguage' || transcript === "go to sign language"){
    navigate("/learning",{state:"signlanguage"})
  }


  if(transcript === 'go to english page' || transcript === 'go to englishpage'){
    navigate("/learning",{state:"english"})
  }
  if(transcript === 'go to tamil page' || transcript === 'go to tamilpage'){
    navigate("/learning",{state:"tamil"})
  }
  if(transcript === 'go to maths page' || transcript === 'go to mathspage'){
    navigate("/learning",{state:"maths"})
  }
  if(transcript === 'go to english page' || transcript === 'go to englishpage'){
    navigate("/learning",{state:"english"})
  }
  if(transcript === 'go to selfcare' || transcript === 'go to self care'){
    navigate("/learning",{state:"self care"})
  }

  if(transcript === 'go to soft skills' || transcript === 'go to softskills'){
    navigate("/learning",{state:"softskills"})
  }

  if(transcript === 'go to learning page' || transcript == 'go to learningpage' || transcript === 'go to learning page.' || transcript === 'go to learningpage.'){
    navigate("/special",{state:"english"});
  }

  



}


//



  useEffect(()=>{

    if(!authUser.isAuthenticated){
      authUser.logout()
    }

  
  },[authUser])
  // 🔹 Custom Right-Click Handler
  useEffect(() => {
    const handleRightClick = (event) => {
      event.preventDefault(); // Prevent default context menu
      setIsMicOpen(true);
      startSpeechRecognition();
    };

    document.addEventListener("contextmenu", handleRightClick);
    return () => document.removeEventListener("contextmenu", handleRightClick);
  }, []);

  // 🎙️ Speech Recognition Logic
  const startSpeechRecognition = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Speech recognition not supported in this browser.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.continuous = false;

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setSpeechText(transcript);
      console.log("Recognized speech:", transcript);
      speachRedirect(transcript);

    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error:", event.error);
    };

    recognition.start();
  };

  const navigation = [
    { name: "Dashboard", icon: Home },
    { name: "Courses", icon: Book },
    { name: "Achievements", icon: Trophy },
    { name: "Community", icon: Users },
    { name: "Progress", icon: BarChart },
  ];

  return (
    <div className="h-full bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <header className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <h1 className="text-xl font-bold cursor-pointer" onClick={() => navigate("/home")}>
            Learning Platform
          </h1>
          
          <div className="flex items-center space-x-4">
            <button aria-label="View notifications" className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 relative">
              <Bell className="h-6 w-6" />
              <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
            </button>
            <ThemeToggle />
            
            {/* Profile Dropdown */}
            <div className="relative">
              <button onClick={() => setIsProfileOpen(!isProfileOpen)} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center">
                  <User className="h-5 w-5 text-white" />
                </div>
                <span className="hidden md:block font-medium">{authUser.currentUser?.email}</span>
              </button>

              {isProfileOpen && (
                <div className="absolute right-0 mt-14 w-56 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-1 z-50">
                  {navigation.map((item) => (
                    <button key={item.name} className="flex items-center w-full px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700">
                      <item.icon className="h-4 w-4 mr-3" />
                      {item.name}
                    </button>
                  ))}
                  <div className="border-t dark:border-gray-700 my-1"></div>
                  <button className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-700" onClick={authUser.logout}>
                    <LogOut className="h-4 w-4 mr-3" />
                    Sign out
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-full px-2 py-1">{children}</main>

      {/* 🎤 Mic Popup */}
      {isMicOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center">
            <Mic className="h-12 w-12 mx-auto text-blue-500 animate-pulse" />
            <p className="mt-2 text-lg font-semibold">Listening...</p>
            {speechText && <p className="mt-2 text-sm text-gray-500">Recognized: "{speechText}"</p>}
            <button onClick={() => setIsMicOpen(false)} className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Layout;
