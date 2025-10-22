import { useState, useEffect } from 'react';
import { fetchPosts } from '../utils/api';
import Card from './Card';
import Button from './Button';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');

  useEffect(() => {
    setLoading(true);
    fetchPosts(page)
      .then(data => setPosts(data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, [page]);

  const filtered = posts.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <div className="space-y-4">
      <input
        type="text"
        placeholder="Search posts..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-4 px-4 py-2 border rounded w-full dark:bg-gray-700 dark:border-gray-600"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map(post => (
          <Card key={post.id} title={post.title}>{post.body}</Card>
        ))}
      </div>

      <div className="mt-4 flex justify-center gap-2">
        <Button onClick={() => setPage(p => Math.max(1, p - 1))}>Prev</Button>
        <span className="px-2">Page {page}</span>
        <Button onClick={() => setPage(p => p + 1)}>Next</Button>
      </div>
    </div>
  );
};

export default Posts;
