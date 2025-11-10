"use client";

import { useUserAuth } from "../_utils/auth-context";
import Link from "next/link";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import { useState } from "react";

export default function ShoppingListPage() {
  const { user, firebaseSignOut } = useUserAuth();
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  // If user is not logged in, show access denied
  if (!user) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>Access Denied</h1>
        <p>You must be logged in to view the shopping list.</p>
        <Link 
          href="/week-9"
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
          Go to Login Page
        </Link>
      </div>
    );
  }

  // If user is logged in, show shopping list
  return (
    <div style={{ padding: '2rem' }}>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginBottom: '20px',
        borderBottom: '2px solid #333',
        paddingBottom: '10px'
      }}>
        <h1>Shopping List</h1>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <span>Welcome, {user.displayName}!</span>
          <button 
            onClick={firebaseSignOut}
            style={{
              padding: '5px 10px',
              backgroundColor: '#ff4444',
              color: 'white',
              border: 'none',
              borderRadius: '3px',
              cursor: 'pointer'
            }}
          >
            Sign Out
          </button>
        </div>
      </div>

      {/* Shopping List Content */}
      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items} />
    </div>
  );
}