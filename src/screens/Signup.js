// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// export default function Signup() {
//   const [credentials, setCredentials] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const response = await fetch("http://localhost:3001/api/createuser", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         name: credentials.name,
//         email: credentials.email,
//         password: credentials.password,
//       }),
//     });

//     const json = await response.json();
//     console.log(json);

//     if (!json.success) {
//       alert("Invalid credentials");
//     }
//   };

//   const onChange = (event) => {
//     setCredentials({ ...credentials, [event.target.name]: event.target.value });
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-blue-500 via-teal-500 to-green-500 flex items-center justify-center">
//       <div className="bg-white shadow-2xl rounded-2xl p-10 max-w-sm w-full border border-gray-200 shadow-lg">
//         <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
//           Sign Up
//         </h2>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-6">
//             <label
//               className="block text-sm font-medium text-gray-600"
//               htmlFor="username"
//             >
//               Username
//             </label>
//             <input
//               type="text"
//               id="username"
//               name="name"
//               placeholder="Enter your username"
//               value={credentials.name}
//               onChange={onChange}
//               className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
//             />
//           </div>

//           <div className="mb-6">
//             <label
//               className="block text-sm font-medium text-gray-600"
//               htmlFor="email"
//             >
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               placeholder="Enter your email"
//               value={credentials.email}
//               onChange={onChange}
//               className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
//             />
//           </div>

//           <div className="mb-8">
//             <label
//               className="block text-sm font-medium text-gray-600"
//               htmlFor="password"
//             >
//               Password
//             </label>
//             <input
//               type="password"
//               name="password"
//               id="password"
//               placeholder="Enter your password"
//               value={credentials.password}
//               onChange={onChange}
//               className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
//             />
//           </div>

//           <Link
//             to="/"
//             className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all mt-4 block text-center"
//           >
//             Sign Up{" "}
//           </Link>
//           <Link
//             to="/"
//             className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all mt-4 block text-center"
//           >
//             Already a User{" "}
//           </Link>
//         </form>
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
  });

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/api/createuser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: credentials.name.trim(),
          email: credentials.email.trim(),
          password: credentials.password,
        }),
      });

      const json = await response.json();
      console.log("Server Response:", json);

      if (!response.ok) {
        alert(json.error || "Signup failed. Try again!");
        return;
      }

      localStorage.setItem("authToken", json.authToken);
      console.log("Auth Token Saved:", localStorage.getItem("authToken"));

      navigate("/");
    } catch (error) {
      console.error("Signup Error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  const onChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-teal-500 to-green-500 flex items-center justify-center">
      <div className="bg-white shadow-2xl rounded-2xl p-10 max-w-sm w-full border border-gray-200 shadow-lg">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
          Sign Up
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              className="block text-sm font-medium text-gray-600"
              htmlFor="username"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="name"
              placeholder="Enter your username"
              value={credentials.name}
              onChange={onChange}
              className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              required
            />
          </div>

          <div className="mb-6">
            <label
              className="block text-sm font-medium text-gray-600"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={credentials.email}
              onChange={onChange}
              className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              required
            />
          </div>

          <div className="mb-8">
            <label
              className="block text-sm font-medium text-gray-600"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              value={credentials.password}
              onChange={onChange}
              className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all mt-4"
          >
            Continue
          </button>

          <p className="text-center text-sm text-gray-600 mt-6">
            Already a User?{" "}
            <Link to="/" className="text-blue-500 hover:underline">
              Login Here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
