import React from 'react';
import { Provider } from 'react-redux';
import App, { Container } from 'next/app';
import { createWrapper } from 'next-redux-wrapper';
import { fromJS } from 'immutable';
import Head from 'next/head';

import { makeStore } from '../../shared/src';

import '../itscss/index.scss';


export const wrapper = createWrapper(makeStore, {
    serializeState: (state) => state,
    deserializeState: (state) => fromJS(state),
});

class FindMusicianBuddy extends App {
    static async getStaticProps({ Component, ctx }) {
        // ctx.store.dispatch({ type: 'SET_TEST_VALUE', payload: 'test' });
        // console.log(ctx);
        const pageProps = Component.getInitialProps ? await Component.getStaticProps(ctx) : {};

        // Anything returned here can be access by the client
        return { pageProps };
    }

    render() {
        const { Component, pageProps, store } = this.props;
        console.log(store);
        return (
            <Container>

                <>
                    <Head>
                        <title>Find-Musician-Buddy</title>
                        <link rel="shortcut icon" href="/images/music-player.png" />
                    </Head>
                    <Component {...pageProps} />
                    {/* <div>Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}
                </>

            </Container>
        );
    }
}

export default wrapper.withRedux(FindMusicianBuddy);
