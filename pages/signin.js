export default function SignIn() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh"
    }}>
      <img
        src="/bazar-logo.png"
        alt="Bazar Logo"
        style={{ width: "150px", marginBottom: "20px" }}
      />
      
      <h1 style={{ marginBottom: "20px" }}>تسجيل الدخول</h1>
      
      <form style={{ display: "flex", flexDirection: "column", width: "250px" }}>
        <label htmlFor="email">البريد الإلكتروني</label>
        <input type="email" id="email" name="email" placeholder="example@email.com" style={{ marginBottom: "10px", padding: "8px" }} />

        <label htmlFor="password">كلمة المرور</label>
        <input type="password" id="password" name="password" style={{ marginBottom: "10px", padding: "8px" }} />

        <button type="submit" style={{ padding: "10px", backgroundColor: "black", color: "white", border: "none" }}>
          دخول
        </button>
      </form>

      <div style={{ marginTop: "15px" }}>
        <a href="/signup" style={{ color: "blue", textDecoration: "underline" }}>
          ليس لديك حساب؟ أنشئ حساب الآن
        </a>
      </div>
    </div>
  );
}
