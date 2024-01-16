import dynamic from 'next/dynamic';

const DynamicAppWithNoSSR = dynamic(() => import('./pages/index'), {
    ssr: false,
    loading: () => <p>loading...</p>,
});

export default function Home() {
    return <DynamicAppWithNoSSR />;
}