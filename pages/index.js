import Head from 'next/head';
import Form from '../src/components/form/Form';
import Sidebar from '../src/components/sidebar/Sidebar';
import styles from '../src/styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Form</title>
      </Head>

      <main className={styles.main}>
        <Sidebar />
        <Form />
      </main>
    </div>
  );
}
