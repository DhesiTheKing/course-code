import React from "react";

const SignLanguageIntro = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 space-y-12 bg-gray-50 rounded-lg ">
      <h1 className="text-4xl font-bold text-center text-blue-600">
        Learn Sign Language
      </h1>

      {/* Understanding Sign Language Basics */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-blue-500">
          1. Understanding Sign Language Basics
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Sign language is a visual language used primarily by the Deaf and
          hard-of-hearing communities. It relies on hand shapes, movements,
          facial expressions, and body language instead of spoken words.
        </p>
        <img
          src="https://lighthouseonline.com/wp-content/uploads/2022/12/sign-language.jpg"
          alt="Sign language basics"
          className="rounded-lg shadow-md mx-auto"
        />
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>
            <strong>Facial Expressions and Body Language:</strong> These are as
            important as the signs. For example, raising your eyebrows can
            indicate a question.
          </li>
          <li>
            <strong>Global Variations:</strong> Different countries have their
            own sign languages, e.g., ASL (American Sign Language), BSL
            (British Sign Language), ISL (Indian Sign Language).
          </li>
        </ul>
      </section>

      {/* Fingerspelling */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-blue-500">
          2. Fingerspelling (Manual Alphabet)
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Fingerspelling involves forming hand signs to represent letters. It’s
          useful for spelling names and words without specific signs.
        </p>
        <div className="flex justify-center space-x-4">
          <img
            src="https://i.pinimg.com/474x/db/81/5e/db815ec1c263e6f81b8273d4f3db9e51.jpg"
            alt="Sign for A"
            className="rounded-lg shadow-md"
          />
          <img
            src="https://i.pinimg.com/originals/c9/95/14/c995143a7ba81834d6ea7b7b34348fcd.png"
            alt="Sign for B"
            className="rounded-lg shadow-md"
          />
          <img
            src="https://i.pinimg.com/originals/12/d1/05/12d105b17749abc61b20214cfb9291f3.png"
            alt="Sign for C"
            className="rounded-lg shadow-md"
          />
        </div>
      </section>

      {/* Basic Signs */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-blue-500">3. Basic Signs</h2>
        <p className="text-gray-700 leading-relaxed">
          Learn common signs used in everyday conversations.
        </p>
        <ul className="grid grid-cols-2 gap-4">
          <li>
            <img
              src="https://media.istockphoto.com/id/1148738497/vector/vector-deaf-mute-sign-language-character-gesture.jpg?s=612x612&w=0&k=20&c=9Ar2DqdQocMmHISyaI95KyWIKIs8xaJy2taNIHx7f3U="
              alt="Sign for Hello"
              className="rounded-lg shadow-md"
            />
            <p className="mt-2 text-center text-gray-700">Hello</p>
          </li>
          <li>
            <img
              src="https://media.istockphoto.com/id/1148738498/vector/vector-deaf-mute-sign-language-character-gesture.jpg?s=612x612&w=0&k=20&c=SNk5XBS0NTndBPbguGgU2JGaJVVMhOXUnQZe0D5rpWs="
              alt="Sign for Thank You"
              className="rounded-lg shadow-md"
            />
            <p className="mt-2 text-center text-gray-700">Thank You</p>
          </li>
          <li>
            <img
              src="https://media.istockphoto.com/id/1148738495/vector/vector-deaf-mute-sign-language-character-gesture.jpg?s=612x612&w=0&k=20&c=-_I8C-UT9e0NI_D6rRK_RHDcrGc_BmNbSu4F7PnS7pA="
              alt="Sign for Sorry"
              className="rounded-lg shadow-md"
            />
            <p className="mt-2 text-center text-gray-700">Sorry</p>
          </li>
          <li>
            <img
              src="https://thumbs.dreamstime.com/b/woman-communicating-word-help-sign-language-female-character-shown-making-vector-concept-serious-expression-326528330.jpg"
              alt="Sign for Help"
              className="rounded-lg shadow-md"
            />
            <p className="mt-2 text-center text-gray-700">Help</p>
          </li>
        </ul>
      </section>

      {/* Building Sentences */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-blue-500">
          4. Building Sentences
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Construct sentences by combining signs. Here are a few examples:
        </p>
        <div className=" grid grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg ">
            <p className="text-gray-700">
              <strong>Sign Example:</strong> "I want water."
            </p>
            <img
              src="https://images.ctfassets.net/9wtva4vhlgxb/2rURHLKechy7FCsxtQJI7q/bd8620a1f1dd2af59a2f35eb673c6be5/water.png?w=720&fm=webp&q=70"
              alt="Sign example for 'I want water'"
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="bg-white p-4 rounded-lg">
            <p className="text-gray-700">
              <strong>Sign Example:</strong> "You are welcome !"
            </p>
            <img
              src="https://images.ctfassets.net/9wtva4vhlgxb/yEIueUzwP5rhXxv5JrzpC/90ba76a8151c41f1521fd2606b929ef0/YAW.png?w=720&fm=webp&q=70"
              alt="Sign example for 'You are welcome !'"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Resources */}
    </div>
  );
};

export default SignLanguageIntro;
