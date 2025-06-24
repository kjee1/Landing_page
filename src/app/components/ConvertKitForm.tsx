import { useState } from 'react';

const FORM_ACTION = 'https://app.kit.com/forms/8220430/subscriptions';
const RED = '#b91c1c'; // Tailwind 'text-red-700'

const ConvertKitForm = () => {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);
    try {
      const res = await fetch(FORM_ACTION, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `email_address=${encodeURIComponent(email)}`,
      });
      if (res.ok) {
        setSuccess(true);
        setEmail('');
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4"
        autoComplete="off"
      >
        <div className="flex w-full">
          <input
            type="email"
            name="email_address"
            required
            placeholder="Enter your email"
            className="flex-1 rounded-l-lg border-2 border-r-0 px-6 py-4 text-lg focus:outline-none focus:ring-2 placeholder-gray-400 text-gray-800"
            style={{ borderColor: RED, boxShadow: 'none' }}
            value={email}
            onChange={e => setEmail(e.target.value)}
            disabled={loading}
            aria-label="Email address"
          />
          <button
            type="submit"
            className="rounded-r-lg text-white font-semibold px-8 py-4 text-lg transition-colors disabled:opacity-60"
            style={{ backgroundColor: RED }}
            disabled={loading}
          >
            {loading ? '...' : 'Update Me!'}
          </button>
        </div>
      </form>
      {success && (
        <p className="text-green-700 font-semibold mt-4">Success! We will follow up when we are live!</p>
      )}
      {error && (
        <p className="text-red-600 font-semibold mt-4">{error}</p>
      )}
    </div>
  );
};

export default ConvertKitForm; 
