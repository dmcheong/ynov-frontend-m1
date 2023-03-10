//import '../styles/styles.scss';
import MainLayout from '../layouts/MainLayout';
import AdminLayout from '../layouts/AdminLayout';
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter(); 
  return (
    <>
    {
      router && router.asPath.startsWith('admin') ? (
        <AdminLayout>
          <Component {...pageProps} />
        </AdminLayout>
      ): (
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      )
    }
    </>
  )
}

export default MyApp
