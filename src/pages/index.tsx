import type {ReactNode} from 'react';
import Layout from '@theme/Layout';

export default function Home(): ReactNode {
  return (
    <Layout
      title="JUST DO ONCE!"
      description="JUST DO ONCE!">
      <div
        style={{
          backgroundColor: 'black',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: 'calc(100vh - var(--ifm-navbar-height))',
          textAlign: 'center',
        }}>
        <h1 style={{color: 'white', fontSize: '5rem', fontWeight: 'bold'}}>
          JUST DO ONCE!
        </h1>
      </div>
    </Layout>
  );
}
