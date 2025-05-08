export default function SignIn() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">تسجيل الدخول</h2>
        <form>
          <div className="mb-4">
            <label className="block text-right mb-1">البريد الإلكتروني</label>
            <input
              type="email"
              placeholder="example@email.com"
              className="w-full border p-2 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-right mb-1">كلمة المرور</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full border p-2 rounded"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
          >
            دخول
          </button>
        </form>
      </div>
    </div>
  );
}
