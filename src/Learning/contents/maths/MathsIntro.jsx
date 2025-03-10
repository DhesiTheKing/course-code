import React from "react";

const MathsIntro = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-12 bg-blue-50 rounded-lg shadow-lg border border-blue-200">
      <h1 className="text-5xl font-bold text-center text-blue-600">
        Welcome to Fun Maths Learning! 🔢✨
      </h1>
      <p className="text-center text-lg text-gray-700">
        Let's explore the exciting world of numbers, shapes, and problem-solving with interactive games and activities! 🎉
      </p>

      {/* Numbers Section */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold text-blue-500">1. Learning Numbers 🔢</h2>
        <p className="text-gray-700 leading-relaxed">
          Numbers are everywhere! Let's start by recognizing and counting numbers from 1 to 10.
        </p>
        <div className="grid grid-cols-5 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(number => (
            <div className="text-center items-center flex flex-col" key={number}>
              <img
                src={`https://cdn3.iconfinder.com/data/icons/math-3/512/${number}-256.png`}
                alt={`Number ${number}`}
                className="rounded-lg shadow-md h-20 w-20"
              />
              <p className="mt-2 text-gray-700 font-bold">{number}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Shapes Section */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold text-blue-500">2. Shapes & Patterns 🔺🔷</h2>
        <p className="text-gray-700 leading-relaxed">
          Shapes are all around us! Let's learn some common shapes.
        </p>
        <div className="grid grid-cols-4 gap-4">
          {[
            { shape: "Circle", url: "https://cdn-icons-png.flaticon.com/512/32/32376.png" },
            { shape: "Square", url: "https://cdn-icons-png.flaticon.com/512/25/25632.png" },
            { shape: "Triangle", url: "https://cdn-icons-png.flaticon.com/512/51/51619.png" },
            { shape: "Rectangle", url: "https://cdn-icons-png.flaticon.com/512/26/26083.png" }
          ].map(({ shape, url }) => (
            <div className="text-center items-center flex flex-col" key={shape}>
              <img src={url} alt={shape} className="rounded-lg shadow-md h-20 w-20" />
              <p className="mt-2 text-gray-700 font-bold">{shape}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Addition & Subtraction */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold text-blue-500">3. Basic Math Operations ➕➖✖️➗</h2>
        <p className="text-gray-700 leading-relaxed">
          Now, let's try simple addition and subtraction!
        </p>
        <div className="bg-white p-4 rounded-lg shadow-md text-center">
          <p className="text-gray-700 font-bold">2 + 3 = <span className="text-green-500">5</span> ✅</p>
          <p className="text-gray-700 font-bold">6 - 2 = <span className="text-red-500">4</span> ✅</p>
          <p className="text-gray-700 font-bold">4 × 2 = <span className="text-blue-500">8</span> ✅</p>
          <p className="text-gray-700 font-bold">10 ÷ 2 = <span className="text-purple-500">5</span> ✅</p>
        </div>
      </section>

      {/* Measuring Time & Money */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold text-blue-500">4. Time & Money ⏰💰</h2>
        <p className="text-gray-700 leading-relaxed">
          Learn how to read the clock and count money!
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center items-center flex flex-col">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2834/2834708.png"
              alt="Clock"
              className="rounded-lg shadow-md h-24 w-24"
            />
            <p className="mt-2 text-gray-700 font-bold">Telling Time ⏰</p>
          </div>
          <div className="text-center items-center flex flex-col">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1041/1041916.png"
              alt="Money"
              className="rounded-lg shadow-md h-24 w-24"
            />
            <p className="mt-2 text-gray-700 font-bold">Counting Money 💰</p>
          </div>
        </div>
      </section>

      {/* Fun Activities */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold text-blue-500">5. Fun Activities 🎮</h2>
        <p className="text-gray-700 leading-relaxed">
          Practice math through interactive and engaging activities!
        </p>
        <ul className="list-disc list-inside text-gray-700">
          <li>🎲 <strong>Number Bingo</strong> - Identify numbers and win!</li>
          <li>🎨 <strong>Color by Numbers</strong> - Learn numbers while coloring.</li>
          <li>💰 <strong>Shopping Game</strong> - Use pretend money to "buy" things.</li>
          <li>⏰ <strong>Time Puzzle</strong> - Match clocks to the right time.</li>
          <li>📏 <strong>Measure & Compare</strong> - Find objects longer or shorter than a ruler.</li>
        </ul>
      </section>

      {/* Encouragement Section */}
      <section className="space-y-6 text-center">
        <h2 className="text-3xl font-semibold text-blue-500">Keep Exploring Maths & Have Fun! 🌟</h2>
        <p className="text-gray-700 leading-relaxed">
          Maths is amazing! Keep practicing and playing with numbers every day to become a maths master! 🚀
        </p>
      </section>
    </div>
  );
};

export default MathsIntro;
