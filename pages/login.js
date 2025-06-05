import Layout from '../components/Layout';
export default function Login() {
  return (
    <Layout>
      <div className="p-10 max-w-md mx-auto">
        <h1 className="text-2xl font-semibold mb-6 text-center">Login to eMazadi</h1>
        <input className="border p-2 w-full mb-4" placeholder="Email" />
        <input className="border p-2 w-full mb-6" type="password" placeholder="Password" />
        <button className="bg-orange-500 text-white w-full py-2 rounded">Login</button>
      </div>
    </Layout>
  );
}