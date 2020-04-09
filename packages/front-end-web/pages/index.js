import React, { useState, useEffect } from 'react';

function Home() {
    const [foo, setFoo] = useState('N/A');

    useEffect(
        () => {
            fetch('http://localhost:5000/api/foo')
                .then((res) => res.json())
                .then((data) => setFoo(data.foo))
                .catch((err) => setFoo(err.message));
        },
    );

    return (
        <div>
            <h1>Hello World</h1>
            <p>
                Server responded with:
                {' '}
                {foo}
            </p>
        </div>
    );
}

export default Home;
