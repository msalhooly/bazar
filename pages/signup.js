export default function SignUp() {
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
      
      <h1 style={{ marginBottom: "20px" }}>إنشاء حساب</h1>
      
      <form style={{ display: "flex", flexDirection: "column", width: "250px" }}>
        <label htmlFor="name">الاسم الكامل</label>
        <input type="text" id="name" name="name" placeholder="محمد علي" style={{ marginBottom: "10px", padding: "8px" }} />

        <label htmlFor="email">البريد الإلكتروني</label>
        <input type="email" id="email" name="email" placeholder="example@email.com" style={{ marginBottom: "10px", padding: "8px" }} />

        <label htmlFor="password">كلمة المرور</label>
        <input type="password" id="password" name="password" style={{ marginBottom: "10px", padding: "8px" }} />

        <button type="submit" style={{ padding: "10px", backgroundColor: "black", color: "white", border: "none" }}>
          إنشاء حساب
        </button>
      </form>

      <div style={{ marginTop: "15px" }}>
        <a href="/signin" style={{ color: "blue", textDecoration: "underline" }}>
          لديك حساب؟ سجل الدخول
        </a>
      </div>
    </div>
  );
}
