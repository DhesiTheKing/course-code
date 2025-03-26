import React from "react";

const TamilLanguageIntro = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-12 bg-yellow-50 rounded-lg shadow-lg border border-yellow-200">
      <h1 className="text-5xl font-bold text-center text-purple-600">
        தமிழ் மொழி கற்க வரவேற்கிறோம்! 📖✨
      </h1>
      <p className="text-center text-lg text-gray-700">
        படங்கள், ஒலிகள், மற்றும் விளையாட்டுகளுடன் தமிழ் கற்போம்! 🎉
      </p>
      
      {/* Alphabet Section */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold text-purple-500">1. உயிரெழுத்துக்கள் 🔤</h2>
        <p className="text-gray-700 leading-relaxed">
          தமிழ் மொழியில் 12 உயிரெழுத்துகள் உள்ளன! அவற்றை படங்களுடன் கற்போம்.
        </p>
        <div className="grid grid-cols-3 gap-4">
          {[{letter:"அ",url : "https://i.pinimg.com/736x/98/14/71/981471e445eb745541f0ad792f107031.jpg"},
           {letter:"ஆ",url : "https://i.pinimg.com/736x/ab/fe/8a/abfe8a4136323b59f32a33e3f615f5d5.jpg"}, 
           {letter:"இ" , url :"https://i.pinimg.com/736x/cd/b7/8b/cdb78bdc7a12dac55f62e3c90f47d841.jpg"},
            {letter:"ஈ", url :"https://i.pinimg.com/736x/3d/19/49/3d1949da2a42301b348961591b1873e4.jpg"}, 
            {letter:"உ", url :"https://i.pinimg.com/736x/70/47/61/7047615fc4a8a3ea5cb766bc34a25246.jpg"},
             {letter:"ஊ",url:"https://pmrcmcv.wordpress.com/wp-content/uploads/2018/09/tamil-uu.gif?w=424"}
            ].map(letters => (
            <div className="text-center items-center flex flex-col" key={letters.letter}>
              <img src={letters.url} alt={`${letters.letter}`} className="rounded-lg shadow-md h-32 w-32" />
              <p className="mt-2 text-gray-700 font-bold">{letters.letter}</p>
            </div>
          ))}
        </div>
      </section>
      
      {/* Basic Words Section */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold text-purple-500">2. அடிப்படை சொற்கள் 📝</h2>
        <p className="text-gray-700 leading-relaxed">
          தினமும் பயன்படுத்தும் சில எளிய தமிழ் சொற்களை கற்போம்!
        </p>
        <ul className="grid grid-cols-3 gap-4">
          {[{letter:"நாய்" , url: "https://i.pinimg.com/736x/b0/17/18/b01718f05d708c6c2b1a2ffd319026b7.jpg"},
           {letter:"யானை", url :"https://i.pinimg.com/736x/8c/1b/d8/8c1bd8f1c0a5fc9b60957d1c0f157674.jpg"},
            {letter:"மீன்", url :"https://i.pinimg.com/736x/e9/ce/22/e9ce2233e812f79995822465633bb189.jpg"},
             {letter:"பறவை", url :"https://i.pinimg.com/736x/d0/2c/48/d02c480bf04a5dd371b6e1bb63a372a8.jpg"},
              {letter:"மழை", url :"https://i.pinimg.com/736x/38/b0/4c/38b04ccb0dbdb3bb822f0e607d4da8da.jpg"},
               {letter:"நிலா", url :"https://i.pinimg.com/736x/c5/d7/46/c5d7462a672e07ee74f81ef1a5ee518a.jpg"}
              ].map(word => (
            <li className="bg-white p-4 rounded-lg shadow-md text-center" key={word}>
              <img src={word.url} alt={word.letter} className="rounded-lg" />
              <p className="mt-2 text-gray-700 font-bold">{word.letter}</p>
            </li>
          ))}
        </ul>
      </section>
      
      {/* Forming Sentences */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold text-purple-500">3. வாக்கியங்கள் ✍️</h2>
        <p className="text-gray-700 leading-relaxed">
          நாம் கற்ற சொற்களை வைத்து வாக்கியங்கள் அமைப்போம்!
        </p>
        <div className="bg-white p-4 rounded-lg shadow-md text-center">
          <p className="text-gray-700 font-bold">"நான் ஒரு <span className="text-red-500">நாய்</span> பார்க்கிறேன்." 🐶</p>
          <p className="text-gray-700 font-bold">"<span className="text-yellow-500">நிலா</span> ஒளி அழகாக இருக்கிறது." 🌙</p>
          <p className="text-gray-700 font-bold">"<span className="text-green-500">மரம்</span> உயரமாக இருக்கிறது." 🌳</p>
        </div>
      </section>
      
      {/* Fun Activities */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold text-purple-500">4. சிறப்பு செயல்கள் 🎮</h2>
        <p className="text-gray-700 leading-relaxed">
          நாம் கற்றவற்றை விளையாட்டுகளுடன் பயிற்சி செய்வோம்!
        </p>
        <ul className="list-disc list-inside text-gray-700">
          <li>🎵 <strong>அகர முதல எழுத்தெல்லாம் பாடல்</strong> - உயிர்மெய் எழுத்துக்களை இசையுடன் கற்போம்!</li>
          <li>🎨 <strong>எழுத்துகளை வண்ணம் தீட்டுக</strong> - உங்கள் பிடித்த எழுத்துக்களை வண்ணம் தீட்டுங்கள்.</li>
          <li>🕵️‍♂️ <strong>சொல் வேட்டை</strong> - உங்கள் வீட்டில் உள்ள தமிழ் சொற்களை தேடுங்கள்.</li>
          <li>🎭 <strong>செயல்கள் மூலம் கற்போம்</strong> - ஓடுதல், குதித்தல், தூங்குதல் போன்ற சொற்களை நடித்துக் காண்பிக்கவும்.</li>
          <li>📖 <strong>கதை நேரம்</strong> - எளிய கதைகளை படித்து புதிய சொற்களை பயிற்சி செய்யலாம்.</li>
        </ul>
      </section>
      
      {/* Encouragement Section */}
      <section className="space-y-6 text-center">
        <h2 className="text-3xl font-semibold text-purple-500">தமிழ் கற்க தொடர்ந்து முயற்சி செய்! 🎉</h2>
        <p className="text-gray-700 leading-relaxed">
          தமிழ் கற்பது சுலபம் மற்றும் ரசிக்கும்படியானது! தினமும் பயிற்சி செய்யுங்கள், வெற்றி உங்கள் சொந்தம்! ⭐
        </p>
      </section>
    </div>
  );
};

export default TamilLanguageIntro;