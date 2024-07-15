import { login } from './actions';

export default function LoginPage() {
  return (
    <div className="min-h-full flex justify-center px-6 py-12 lg:px-8">
      <div className="mx-auto w-full max-w-md">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">ログイン</h2>
        <div className="mt-10">
          <form className="space-y-6" action={login} method="POST">
            <div>
              <label htmlFor="email" className="block text-sm font-bold leading-6 text-gray-900">メールアドレス</label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="block w-full shadow-md rounded-md border-0 py-1.5 ring-1 ring-gray-300 ring-inset focus:outline-none p-3"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-bold leading-6 text-gray-900">パスワード</label>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  className="block w-full shadow-md rounded-md border-0 py-1.5 ring-1 ring-gray-300 ring-inset focus:outline-none p-3"
                  required
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center rounded-md bg-[#e4b849] py-2 px-4 text-sm font-semibold text-white shadow-sm hover:bg-[#e4b849bf] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3c423c]"
              >
                ログイン
              </button>
            </div>
          </form>
          {/* <div className="mt-6">
            <form action={signup} method="POST">
              <button
                type="submit"
                className="w-full flex justify-center rounded-md bg-gray-600 py-2 px-4 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3c423c]"
              >
                Sign up
              </button>
            </form>
          </div> */}
        </div>
      </div>
    </div>
  );
}
