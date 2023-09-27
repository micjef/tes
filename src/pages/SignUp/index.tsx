import { useState } from "react";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordErrors, setPasswordErrors] = useState<string[]>([]);

  const handleSignUp = () => {
    // You can implement your sign-up logic here
    console.log("Email:", email);
    console.log("Password:", password);
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);

    const errors: string[] = [];

    // Password requirements validation
    if (value.length < 8) {
      errors.push("Password should have at least 8 characters.");
    }
    if (!/[A-Z]/.test(value)) {
      errors.push("Password should have at least 1 uppercase letter.");
    }
    if (!/[0-9]/.test(value)) {
      errors.push("Password should have at least 1 number.");
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(value)) {
      errors.push("Password should have at least 1 unique character.");
    }

    setPasswordErrors(errors);
  };

  const handleConfirmPasswordChange = (value: string) => {
    setConfirmPassword(value);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-80">
        <h1 className="text-2xl font-semibold mb-4">Sign Up</h1>
        <div className="mb-4">
          <label htmlFor="email" className="block font-medium mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-2 border rounded-sm focus:ring-blue-500 focus:border-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="example@example.com"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block font-medium mb-1">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full p-2 border rounded-sm focus:ring-blue-500 focus:border-blue-500"
            value={password}
            onChange={(e) => handlePasswordChange(e.target.value)}
            placeholder="********"
          />
          {passwordErrors.map((error, index) => (
            <p key={index} className="text-red-500 text-xs mb-2">
              {error}
            </p>
          ))}
        </div>
        <div className="mb-4">
          <label htmlFor="confirmPassword" className="block font-medium mb-1">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            className="w-full p-2 border rounded-sm focus:ring-blue-500 focus:border-blue-500"
            value={confirmPassword}
            onChange={(e) => handleConfirmPasswordChange(e.target.value)}
            placeholder="********"
          />
          {password !== confirmPassword && (
            <p className="text-red-500 text-xs mb-2">Passwords do not match.</p>
          )}
        </div>
        {passwordErrors.map((error, index) => (
          <p key={index} className="text-red-500 text-xs mb-2">
            {error}
          </p>
        ))}
        <button
          className="w-full bg-blue-500 text-white py-2 rounded-sm hover:bg-blue-600"
          onClick={handleSignUp}
          disabled={
            password !== confirmPassword ||
            passwordErrors.length > 0 ||
            password === "" ||
            confirmPassword === ""
          }
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default SignUpPage;
