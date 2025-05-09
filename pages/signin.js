export default function SignIn() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      flexDirection: 'column'
    }}>
      {/* شعار Bazar */}
      <img src="/bazar-logo.png" alt="Bazar Logo" style={{ width: '150px', marginBottom: '20px' }} />

      {/* نموذج تسجيل الدخول */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        border: '1px solid #ccc',
        padding: '20px',
        borderRadius: '8px',
        backgroundColor: '#f9f9f9'
      }}>
        <h1 style={{ marginBottom: '20px' }}>تسجيل الدخول</h1>
        <input type="email" placeholder="البريد الإلكتروني" style={{ margin: '10px', padding: '10px', width: '250px' }} />
        <input type="password" placeholder="كلمة المرور" style={{ margin: '10px', padding: '10px', width: '250px' }} />
        <button style={{ padding: '10px 20px', marginTop: '10px' }}>دخول</button>
      </div>
    </div>
  );
}
