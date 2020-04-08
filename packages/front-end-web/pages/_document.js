import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <html lang="as">
                <Head />
                <body>
                    <Main />
                    <NextScript />
                    <script />
                </body>
            </html>
        );
    }
}

export default MyDocument;
