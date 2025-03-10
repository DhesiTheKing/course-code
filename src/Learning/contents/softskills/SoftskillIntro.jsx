import React from "react";

const SoftSkillsIntro = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-12 bg-green-50 rounded-lg shadow-lg border border-green-200">
      
      {/* Title Section */}
      <h1 className="text-5xl font-bold text-center text-green-600">
        Welcome to Soft Skills! 🌟💡
      </h1>
      <p className="text-center text-lg text-gray-700">
        Learn how to communicate, collaborate, and succeed in life! 🚀
      </p>

      {/* What are Soft Skills? */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold text-green-500">1. What are Soft Skills? 🤝🗣️</h2>
        <p className="text-gray-700 leading-relaxed">
          Soft skills are **personal traits and social abilities** that help you work well with others and handle different situations in life. 🌟
        </p>
      </section>

      {/* Why are Soft Skills Important? */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold text-green-500">2. Why are Soft Skills Important? 💼🌍</h2>
        <p className="text-gray-700 leading-relaxed">
          These skills help you **build relationships, succeed in jobs, and improve communication** with others. 🌱
        </p>

        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>🗣️ **Better communication and teamwork**</li>
          <li>💡 **Problem-solving and creativity**</li>
          <li>🌍 **Helps in career growth and leadership**</li>
          <li>😊 **Improves confidence and emotional intelligence**</li>
        </ul>
      </section>

      {/* Types of Soft Skills */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold text-green-500">3. Types of Soft Skills 📢👥</h2>
        <div className="grid grid-cols-2 gap-6 text-center">
          {[
            { type: "🗣️ Communication", desc: "Speaking and listening effectively" },
            { type: "🤝 Teamwork", desc: "Working well with others" },
            { type: "💡 Problem-Solving", desc: "Finding solutions to challenges" },
            { type: "🕒 Time Management", desc: "Using time wisely and effectively" }
          ].map((item, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md">
              <p className="text-2xl">{item.type}</p>
              <p className="mt-2 text-gray-700 font-bold">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Developing Soft Skills */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold text-green-500">4. How to Develop Soft Skills? 📚✨</h2>
        <p className="text-gray-700 leading-relaxed">
          You can improve your soft skills by **practicing daily and learning from experiences**. Here are some tips:
        </p>

        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>📢 **Practice clear communication**</li>
          <li>👂 **Listen actively and show empathy**</li>
          <li>📆 **Manage time wisely and set goals**</li>
          <li>🔄 **Be open to learning and feedback**</li>
        </ul>
      </section>

      {/* Fun Activities for Soft Skills */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold text-green-500">5. Fun Activities to Improve Soft Skills 🎭🎤</h2>
        <p className="text-gray-700 leading-relaxed">
          Try these activities to enhance your soft skills in a fun way! 🎉
        </p>
        
        <ul className="grid grid-cols-2 gap-6 text-gray-700">
          {[
            { activity: "🎤 Public Speaking", image: "https://cdn1.iconfinder.com/data/icons/public-speaking/504/public-speaking-audience-crowd-stage-512.png" },
            { activity: "🎭 Role-Playing Games", image: "https://cdn2.iconfinder.com/data/icons/gaming-and-gear-mono-color-set/512/Role_Playing_Game-512.png" },
            { activity: "📚 Reading Books", image: "https://cdn3.iconfinder.com/data/icons/education-209/64/book-note-paper-school-512.png" },
            { activity: "👥 Group Discussions", image: "https://cdn3.iconfinder.com/data/icons/miscellaneous-524-color-shadow/128/discussions_debate_debatable_argument_teamwork_how_solution_meeting_employee-512.png" }
          ].map((item, index) => (
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
        <h2 className="text-3xl font-semibold text-green-500">Keep Improving Your Soft Skills! 🚀</h2>
        <p className="text-gray-700 leading-relaxed">
          These skills will help you in life and work. Keep practicing, and you'll shine! ✨💚
        </p>
      </section>
    </div>
  );
};

export default SoftSkillsIntro;