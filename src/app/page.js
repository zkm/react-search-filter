'use client';

import React from 'react';
import { useState, useCallback, useEffect, useRef } from 'react';

export default function Page() {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState('');
  const [newItem, setNewItem] = useState('');
  const hasHydrated = useRef(false);

  const filteredItems = items.filter((item) => {
    return item.toLowerCase().includes(query.toLowerCase());
  });

  // Hydrate from localStorage on first mount
  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
        const raw = localStorage.getItem('rsf-items');
        if (raw) {
          const parsed = JSON.parse(raw);
          if (Array.isArray(parsed)) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setItems(parsed);
          }
        }
      }
    } catch (error) {
      // Silently ignore localStorage errors (private browsing, etc)
      console.debug('Failed to load items from localStorage:', error);
    }
    // mark hydration complete (even if nothing was stored)
    hasHydrated.current = true;
  }, []);

  // Persist to localStorage whenever items change (after hydration)
  useEffect(() => {
    if (!hasHydrated.current) return;
    try {
      if (typeof window !== 'undefined') {
        localStorage.setItem('rsf-items', JSON.stringify(items));
      }
    } catch (error) {
      // Silently ignore localStorage errors (private browsing, etc)
      console.debug('Failed to save items to localStorage:', error);
    }
  }, [items]);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const value = newItem.trim();
      if (value === '') return;
      setItems((prev) => [...prev, value]);
      setNewItem('');
    },
    [newItem]
  );

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-950">
      <div className="bg-gray-900 rounded-xl shadow-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-white">
          React Search Filter
        </h1>
        <div className="mb-4">
          <label className="block text-gray-300 mb-1" htmlFor="search">
            Search:
          </label>
          <input
            id="search"
            className="w-full px-3 py-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            type="search"
            placeholder="Type to filter..."
          />
        </div>
        <form onSubmit={onSubmit} className="flex gap-2 mb-6">
          <input
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            type="text"
            className="flex-1 px-3 py-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Add new item..."
          />
          <button
            type="submit"
            className="px-4 py-2 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
          >
            Add
          </button>
        </form>
        <h3 className="text-lg font-semibold text-gray-200 mb-2">Items:</h3>
        <ul className="space-y-1 min-h-[40px]">
          {filteredItems.length === 0 ? (
            <li className="text-gray-500 italic">No items found.</li>
          ) : (
            filteredItems.map((item, index) => (
              <li
                key={index}
                className="bg-gray-800 rounded px-3 py-1 text-white"
              >
                {item}
              </li>
            ))
          )}
        </ul>
      </div>
    </main>
  );
}
