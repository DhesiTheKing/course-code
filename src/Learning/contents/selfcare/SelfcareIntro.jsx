import { image } from "framer-motion/m";
import React from "react";

const SelfCareIntro = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-12 bg-blue-50 rounded-lg shadow-lg border border-blue-200">
      
      {/* Title Section */}
      <h1 className="text-5xl font-bold text-center text-blue-600">
        Welcome to Self-Care! 💙🌿
      </h1>
      <p className="text-center text-lg text-gray-700">
        Learn how to take care of yourself in a fun and easy way! 🎉
      </p>

      {/* What is Self-Care Section */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold text-blue-500">1. What is Self-Care? 💆‍♂️💖</h2>
        <p className="text-gray-700 leading-relaxed">
          Self-care means **taking care of your body, mind, and emotions** to stay healthy and happy! It helps you feel strong, confident, and comfortable every day. 😊
        </p>
        
        {/* Image Grid */}
        <div className="grid grid-cols-3 gap-4 text-center">
          {[{text : "Eat Healthy" , img :"https://cdn3.iconfinder.com/data/icons/russia-element/64/05-organic-vegan-healthy_food-diet-vegetarian-basket-food-apple-512.png"},
           {text :"Sleep Well" , img:"https://cdn4.iconfinder.com/data/icons/coronavirus-229/66/109_sleep_well_sound_sleep_sleep_tight_sweet_dreams_good_nap-512.png"}, 
           {text : "Stay Clean" , img :"https://cdn3.iconfinder.com/data/icons/stay-home-activities-3/512/cleaning-_detergent-_clean-_household_-_mop-_housekeeping-512.png"}].map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <img 
                src={item.img} 
                alt={item} 
                className="h-32 w-32 rounded-lg shadow-md"
              />
              <p className="mt-2 text-gray-700 font-bold">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why is Self-Care Important? */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold text-blue-500">2. Why is Self-Care Important? 🌟</h2>
        <p className="text-gray-700 leading-relaxed">
          Self-care helps **everyone**, including people with disabilities, to live a healthier and happier life!  
        </p>

        {/* Benefits List */}
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>💪 **Keeps your body strong and healthy**</li>
          <li>😊 **Helps your mind stay relaxed and happy**</li>
          <li>🌿 **Gives you energy to enjoy life**</li>
          <li>🎯 **Supports independence & confidence**</li>
        </ul>
      </section>

      {/* Different Types of Self-Care */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold text-blue-500">3. Different Types of Self-Care 🛁🧠❤️</h2>
        <p className="text-gray-700 leading-relaxed">
          There are many ways to practice self-care! Here are some examples:
        </p>

        {/* Types of Self-Care Grid */}
        <div className="grid grid-cols-2 gap-6 text-center">
          {[
            { type: "🛁 Physical", desc: "Eating well, sleeping, hygiene" },
            { type: "🧠 Mental", desc: "Relaxing, reading, listening to music" },
            { type: "❤️ Emotional", desc: "Talking about feelings, positive thinking" },
            { type: "🎭 Social", desc: "Spending time with friends, having fun" }
          ].map((item, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md">
              <p className="text-2xl">{item.type}</p>
              <p className="mt-2 text-gray-700 font-bold">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Feelings & Emotions Section */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold text-blue-500">4. Feelings & Emotions ❤️😊</h2>
        <p className="text-gray-700 leading-relaxed">
          Our feelings change every day. It's **okay to feel happy, sad, excited, or frustrated**. Self-care helps us manage our emotions in a healthy way! 
        </p>
        
        {/* Emotion Grid */}
        <div className="grid grid-cols-4 gap-4 text-center">
          {[
            { name: "Happy", emoji: "😊" },
            { name: "Sad", emoji: "😢" },
            { name: "Excited", emoji: "🤩" },
            { name: "Calm", emoji: "😌" }
          ].map((emotion, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md">
              <p className="text-4xl">{emotion.emoji}</p>
              <p className="mt-2 text-gray-700 font-bold">{emotion.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Fun Self-Care Activities */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold text-blue-500">5. Fun Self-Care Activities 🎨🎮</h2>
        <p className="text-gray-700 leading-relaxed">
          Self-care can be fun! Try these **exciting activities** to take care of yourself every day! 🎉
        </p>
        
        {/* Activity List */}
        <ul className="grid grid-cols-2 gap-6 text-gray-700">
          {[
            { activity: "🎵 Listen to Music", image: "https://cdn3.iconfinder.com/data/icons/social-media-1-4/36/17-512.png" },
            { activity: "🖌️ Draw & Color", image: "https://cdn0.iconfinder.com/data/icons/lifestyle-entertainment-vol-2/512/museum_art_painting_artist-512.png" },
            { activity: "📖 Read a Book", image: "https://cdn3.iconfinder.com/data/icons/home-activity-1/512/reading-book-student-study-learn-512.png" },
            { activity: "🎮 Play a Game", image: "https://cdn3.iconfinder.com/data/icons/home-activity-1/512/football-playing-ball-player-sport-512.png" }
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
        <h2 className="text-3xl font-semibold text-blue-500">Keep Taking Care of Yourself! 🌟</h2>
        <p className="text-gray-700 leading-relaxed">
          You are **strong, important, and amazing**! Keep practicing self-care every day and feel your best. 💙  
        </p>
      </section>
    
    </div>
  );
};

export default SelfCareIntro;
