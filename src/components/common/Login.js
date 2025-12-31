// Login component - Common login form component
// Can be reused across different pages
// After successful login, redirects user to the dashboard page

import { useRouter } from 'next/router'

export default function Login() {
  // useRouter hook from Next.js - allows us to navigate to different pages
  const router = useRouter()

  // Handle form submission when user clicks Login button
  const handleSubmit = (e) => {
    // Prevent default form submission behavior
    e.preventDefault()
    
    // In a real app, you would validate credentials with a backend API here
    // For now, we'll just redirect to dashboard after form submission
    // This simulates a successful login
    
    // Redirect to dashboard page
    router.push('/dashboard')
  }

  return (
    <div className="login-container">
      <h2>Login</h2>
      {/* Form submission triggers handleSubmit function */}
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
        </div>
        {/* Submit button - triggers form submission */}
        <button type="submit" className="btn-login-submit">Login</button>
      </form>
    </div>
  )
}

