export default function SignIn() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">تسجيل الدخول</h2>

        <div className="mb-4">
          <label className="block mb-1">البريد الإلكتروني</label>
          <input
            type="email"
            placeholder="example@email.com"
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>

        <div className="mb-6">
          <label className="block mb-1">كلمة المرور</label>
          <input
            type="password"
            placeholder="********"
            className="w-full border border-gray-300 p-2 rounded"
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
  );
}