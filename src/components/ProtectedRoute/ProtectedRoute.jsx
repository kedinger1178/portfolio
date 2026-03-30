import { useState, useRef, useEffect } from "react";

import './protectedRoute.scss';

export default function ProtectedRoute({ children, password: correctPassword }) {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const passwordRef = useRef(null);

  useEffect(() => {
    // Focus the input when the component mounts
    passwordRef.current?.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === correctPassword) {
      setIsAuthenticated(true);
    } else {
      alert("Incorrect password");
    }
  };

  if (isAuthenticated) {
    return children;
  }

  return (
    <div className='page-password'>
      <header className='no-image-hero'>
        <div className='hero-details'>
          <h1 className='no-image-title'>Password Protected</h1>
          <h2>This case study contains confidential product information.</h2>
        </div>
      </header>
      <div className='body'> 
        <form onSubmit={handleSubmit} className="password-form">
          <label>Please enter the access password provided.</label>
          <input
            type="password"
            ref={passwordRef}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder=""
          />
          <button type="submit" className="button primary">Submit</button>
        </form>
      </div>
    </div>
  );
}