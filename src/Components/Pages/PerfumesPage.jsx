// components/pages/PerfumesPage.jsx
import React, { useState } from 'react';
import perfumesData from '../../Data/perfumes';

const PerfumesPage = () => {
  const [filter, setFilter] = useState('');

  const filteredPerfumes = perfumesData.filter(p =>
    p.scent.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <section className="p-8 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Our Perfumes</h1>
      <input
        type="text"
        placeholder="Filter by scent (e.g., floral, woody, citrus)"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="mb-6 w-full p-2 border rounded"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredPerfumes.map((perfume) => (
          <div key={perfume.id} className="border p-4 rounded shadow-sm">
            <h2 className="text-xl font-semibold">{perfume.name}</h2>
            <p className="text-gray-700">{perfume.description}</p>
            <p className="text-sm mt-1 italic">Scent: {perfume.scent}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PerfumesPage;
