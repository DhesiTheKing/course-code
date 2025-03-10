import React from "react";

const EnvironmentalScienceIntro = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-12 bg-green-50 rounded-lg shadow-lg border border-green-200">
      
      {/* Title Section */}
      <h1 className="text-5xl font-bold text-center text-green-600">
        Welcome to Environmental Science! 🌍🌱
      </h1>
      <p className="text-center text-lg text-gray-700">
        Explore how nature works and how we can protect our planet! 🌿🌎
      </p>

      {/* What is Environmental Science Section */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold text-green-500">1. What is Environmental Science? 🌿🔬</h2>
        <p className="text-gray-700 leading-relaxed">
          Environmental Science is the study of how **nature, animals, humans, and the environment interact**. It helps us understand how to take care of the Earth! 🌍
        </p>
        
        {/* Image Grid */}
        <div className="grid grid-cols-3 gap-4 text-center">
          {[{text : "Protect Nature", img :"https://cdn0.iconfinder.com/data/icons/ecology-and-nature-vol-2/600/Bio-planet-earth-eco-globe-ecology-Environment--512.png"},
           {text :"Save Water", img:"https://cdn4.iconfinder.com/data/icons/environment-47/64/SAVE_THE_WATER-save_the_planet-water-ecology_and_environment-ecology-512.png"}, 
           {text : "Recycle Waste", img :"https://cdn-icons-png.flaticon.com/512/1904/1904425.png"}].map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <img 
                src={item.img} 
                alt={item.text} 
                className="h-32 w-32 rounded-lg shadow-md"
              />
              <p className="mt-2 text-gray-700 font-bold">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why is Environmental Science Important? */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold text-green-500">2. Why is Environmental Science Important? 🌍</h2>
        <p className="text-gray-700 leading-relaxed">
          Understanding environmental science helps us **protect nature, prevent pollution, and ensure a better future** for all living beings. 🌱
        </p>

        {/* Benefits List */}
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>🌱 **Keeps our air and water clean**</li>
          <li>🌍 **Protects animals and forests**</li>
          <li>🔄 **Helps us recycle and reduce waste**</li>
          <li>🌞 **Ensures a better future for everyone**</li>
        </ul>
      </section>

      {/* Ways to Protect the Environment */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold text-green-500">3. How Can We Protect Our Environment? 🌎💚</h2>
        <p className="text-gray-700 leading-relaxed">
          We all can help the environment by making small changes every day. Here are some simple ways:
        </p>

        {/* Actions Grid */}
        <div className="grid grid-cols-2 gap-6 text-center">
          {[{ type: "🌿 Plant Trees", desc: "Grow more trees to clean the air" },
            { type: "🚲 Use Bicycles", desc: "Reduce air pollution by cycling" },
            { type: "♻️ Recycle More", desc: "Reuse materials to reduce waste" },
            { type: "💧 Save Water", desc: "Turn off taps when not in use" }].map((item, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md">
              <p className="text-2xl">{item.type}</p>
              <p className="mt-2 text-gray-700 font-bold">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Fun Environmental Activities */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold text-green-500">4. Fun Environmental Activities 🎨🌱</h2>
        <p className="text-gray-700 leading-relaxed">
          Learn and have fun while taking care of nature! Try these exciting activities:
        </p>
        
        {/* Activity List */}
        <ul className="grid grid-cols-2 gap-6 text-gray-700">
          {[{ activity: "🌿 Gardening", image: "https://cdn-icons-png.flaticon.com/512/990/990642.png" },
            { activity: "♻️ Recycling Challenge", image: "https://cdn-icons-png.flaticon.com/512/2329/2329181.png" },
            { activity: "🌞 Solar Energy Projects", image: "https://cdn-icons-png.flaticon.com/512/595/595816.png" },
            { activity: "📖 Read Eco-Books", image: "https://cdn-icons-png.flaticon.com/512/3081/3081033.png" }].map((item, index) => (
            <li key={index} className="bg-white p-4 rounded-lg shadow-md text-center">
              <img 
                src={item.image} 
                alt={item.activity} 
                className="h-24 w-24 mx-auto rounded-lg"
              />
              <p className="mt-2 font-bold">{item.activity}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Encouragement Section */}
      <section className="space-y-6 text-center">
        <h2 className="text-3xl font-semibold text-green-500">Let's Take Care of Our Planet! 🌍💚</h2>
        <p className="text-gray-700 leading-relaxed">
          Small actions can make a **big difference**! Keep protecting nature and making the world a better place! 🌿🌎
        </p>
      </section>
    </div>
  );
};

export default EnvironmentalScienceIntro;