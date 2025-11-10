"use client";

import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";

export default function LandingPage() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleSignIn = async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  const handleSignOut = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Assignment 9 - Welcome to the Shopping List App</h1>
      
      {!user ? (
        <div>
          <button 
            onClick={handleSignIn}
            style={{
              padding: '10px 20px',
              backgroundColor: '#333',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              marginTop: '20px'
            }}
          >
            Sign in with GitHub
          </button>
        </div>
      ) : (
        <div>
          <button 
            onClick={handleSignOut}
            style={{
              padding: '10px 20px',
              backgroundColor: '#ff4444',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              marginBottom: '20px'
            }}
          >
            Sign Out
          </button>
          
          <p>Welcome, {user.displayName} ({user.email})</p>
          
          {user.photoURL && (
            <div style={{ marginTop: '20px' }}>
              <img 
                src={user.photoURL} 
                alt="Profile" 
                style={{ 
                  width: '100px', 
                  height: '100px', 
                  borderRadius: '50%',
                  border: '2px solid #333'
                }}
              />
            </div>
          )}
          
          <div style={{ marginTop: '30px' }}>
            <Link 
              href="/week-9/shopping-list"
              style={{
                display: 'inline-block',
                padding: '10px 20px',
                backgroundColor: '#0070f3',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '5px',
                marginTop: '20px'
              }}
            >
              Go to Shopping List
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}