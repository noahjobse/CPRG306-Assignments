import React from 'react';
import Link from 'next/link';
import ItemList from './item-list';

export default function Page() {
    return (
        <main>
            <h1 style={{ textAlign: 'center', fontSize: '40px' }}>Shopping List</h1>
            <ItemList />
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <Link href="/" style={{ color: 'red', textDecoration: 'underline' }}>Back to Home</Link>
            </div>
        </main>
    );
}
