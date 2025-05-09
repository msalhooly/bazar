import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert('تم تسجيل الدخول بنجاح');
    } catch (err) {
      console.error(err);
      setError('البريد الإلكتروني أو كلمة المرور غير صحيحة.');
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', direction: 'rtl' }}>
      <div style={{ maxWidth: '400px', width: '100%', textAlign: 'center' }}>
        <img
          src="/bazar-logo.png"
          alt="Bazar Logo"
          style={{ width: '120px', height: '120px', objectFit: 'contain', margin: '0 auto 20px' }}
        />
        <h2 style={{ marginBottom: '20px' }}>تسجيل الدخول</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '10px', textAlign: 'right' }}>
            <label>البريد الإلكتروني</label>
            <input
              type="email"
              placeholder="example@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ width: '100%', padding: '10px', marginTop: '5px' }}
              required
            />
          </div>
          <div style={{ marginBottom: '15px', textAlign: 'right' }}>
            <label>كلمة المرور</label>
            <input
              type="password"
              placeholder="*******"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ width: '100%', padding: '10px', marginTop: '5px' }}
              required
            />
          </div>
          <button
            type="submit"
            style={{
              backgroundColor: 'black',
              color: 'white',
              padding: '10px',
              width: '100%',
              cursor: 'pointer',
            }}
          >
            دخول
          </button>
        </form>
        {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
        <p style={{ marginTop: '15px', fontSize: '14px' }}>
          ليس لديك حساب؟ <a href="/signup" style={{ color: 'blue' }}>أنشئ حساب الآن</a>
        </p>
      </div>
    </div>
  );
}
