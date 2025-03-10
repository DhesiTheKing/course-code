import React from "react";

const EnglishLanguageIntro = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-12 bg-yellow-50 rounded-lg shadow-lg border border-yellow-200">
      <h1 className="text-5xl font-bold text-center text-purple-600">
        Welcome to English Learning! 📖✨
      </h1>
      <p className="text-center text-lg text-gray-700">Let's have fun learning English with pictures, sounds, and games! 🎉</p>
      
      {/* Alphabet Section */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold text-purple-500">1. Learning the Alphabet 🔤</h2>
        <p className="text-gray-700 leading-relaxed">
          The English alphabet has 26 letters! Let's learn them with fun pictures and sounds.
        </p>
        <div className="grid grid-cols-3 gap-4">
          {["A", "B", "C", "D", "E", "F"].map(letter => (
            <div className="text-center items-center flex flex-col" key={letter}>
              <img src={`https://cdn3.iconfinder.com/data/icons/letters-and-numbers-1/32/letter_${letter}_red-256.png`} alt={`${letter} for Example`} className="rounded-lg shadow-md h-32 w-32" />
              <p className="mt-2 text-gray-700 font-bold">{letter} for Example</p>
            </div>
          ))}
        </div>
      </section>
      
      {/* Basic Words Section */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold text-purple-500">2. Basic Words 📝</h2>
        <p className="text-gray-700 leading-relaxed">
          Let's learn some simple words that we use every day!
        </p>
        <ul className="grid grid-cols-3 gap-4">
          {["Dog", "Dolphin", "Crab", "Penguin", "Bird", "Fish"].map(word => (
            <li className="bg-white p-4 rounded-lg shadow-md text-center" key={word}>
              <img src={`https://cdn3.iconfinder.com/data/icons/animal-40/128/Animal_${word}-256.png`} alt={word} className="rounded-lg" />
              <p className="mt-2 text-gray-700 font-bold">{word}</p>
            </li>
          ))}
        </ul>
      </section>
      
      {/* Forming Sentences */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold text-purple-500">3. Forming Sentences ✍️</h2>
        <p className="text-gray-700 leading-relaxed">
          We can make sentences using the words we learned!
        </p>
        <div className="bg-white p-4 rounded-lg shadow-md text-center">
          <p className="text-gray-700 font-bold">"I see a <span className="text-red-500">dog</span>." 🐶</p>
          <p className="text-gray-700 font-bold">"The <span className="text-yellow-500">sun</span> is bright." ☀️</p>
          <p className="text-gray-700 font-bold">"The <span className="text-green-500">tree</span> is tall." 🌳</p>
        </div>
      </section>
      
      {/* Fun Activities */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold text-purple-500">4. Fun Activities 🎮</h2>
        <p className="text-gray-700 leading-relaxed">
          Let's play games and practice what we have learned!
        </p>
        <ul className="list-disc list-inside text-gray-700">
          <li>🎵 <strong>Sing the ABC Song</strong> - Learn the alphabet with music!</li>
          <li>🎨 <strong>Color the Letters</strong> - Print and color your favorite letters.</li>
          <li>🕵️‍♂️ <strong>Word Hunt</strong> - Find words around your home.</li>
          <li>🎭 <strong>Act Out Words</strong> - Show actions for words like jump, run, and sleep.</li>
          <li>📖 <strong>Story Time</strong> - Read simple stories and practice new words.</li>
        </ul>
      </section>
      
      {/* Encouragement Section */}
      <section className="space-y-6 text-center">
        <h2 className="text-3xl font-semibold text-purple-500">Keep Learning & Have Fun! 🎉</h2>
        <p className="text-gray-700 leading-relaxed">
          Learning English is easy and fun! Keep practicing every day and you will be a superstar! ⭐
        </p>
      </section>
    </div>
  );
};

export default EnglishLanguageIntro;
