export default function SignIn() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', direction: 'rtl' }}>
      <div style={{ maxWidth: '440px', width: '100%', textAlign: 'center' }}>
        <img
          src="/bazar-logo.png"
          alt="Bazar Logo"
          style={{ width: '120px', height: '120px', objectFit: 'contain', margin: '0 auto 20px' }}
        />
        <h2 style={{ marginBottom: '20px' }}>تسجيل الدخول</h2>
        <form>
          <div style={{ marginBottom: '10px', textAlign: 'right' }}>
            <label>البريد الإلكتروني</label>
            <input
              type="email"
              placeholder="example@email.com"
              style={{ width: '100%', padding: '10px', marginTop: '5px' }}
            />
          </div>
          <div style={{ marginBottom: '15px', textAlign: 'right' }}>
            <label>كلمة المرور</label>
            <input
              type="password"
              placeholder="*******"
              style={{ width: '100%', padding: '10px', marginTop: '5px' }}
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
        <p style={{ marginTop: '15px', fontSize: '14px' }}>
          ليس لديك حساب؟ <a href="/signup" style={{ color: 'blue' }}>إنشاء حساب</a>
        </p>
      </div>
    </div>
  );
}
