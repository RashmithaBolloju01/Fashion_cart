import React from 'react';

function SearchBar({ search, setSearch, category, setCategory }) {
  return (
    <div style={{ display: 'flex', gap: '1rem', padding: '1rem' }}>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search products..."
        style={{ flex: 1, padding: '0.5rem' }}
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)} style={{ padding: '0.5rem' }}>
        <option value="">All</option>
        <option value="Boho">Boho</option>
        <option value="Party">Party</option>
        <option value="Casual">Casual</option>
        <option value="Evening">Evening</option>
        <option value="Denim">Denim</option>
      </select>
    </div>
  );
}

export default SearchBar;
