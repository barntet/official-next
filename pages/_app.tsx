import '@/styles/globals.css';
import type { AppProps, AppContext } from 'next/app';
import App from 'next/app';
import { Layout, ILayoutProps } from '@/components/layout';
import code from '@/public/code.png';
import Head from 'next/head';
import axios from 'axios';
import { LOCALDOMAIN } from '@/utils';

console.log(import.meta);

const MyApp = (data: AppProps & ILayoutProps) => {
  const { Component, pageProps, navbarData, footerData } = data;

  return (
    <div>
      <Head>
        <title>A demo for </title>
        <meta name="description" content="A Demo for" />
        <link rel="icon" href="/favicon.icon" />
      </Head>
      <Layout navbarData={navbarData} footerData={footerData}>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
};

MyApp.getInitialProps = async (context: AppContext) => {
  const pageProps = await App.getInitialProps(context);
  const { data = {} } = await axios.get(`${LOCALDOMAIN}/api/layout`);

  return {
    ...pageProps,
    ...data,
  };

  // return {
  //   ...pageProps,
  //   navbarData: {},
  //   footerData: {
  //     title: 'demo',
  //     linkList: [
  //       {
  //         title: '技术栈',
  //         list: [
  //           { label: 'react' },
  //           { label: 'Typescript' },
  //           { label: 'ssr' },
  //           { label: 'nodejs' },
  //         ],
  //       },
  //       {
  //         title: '了解更多',
  //         list: [
  //           { label: '掘金', link: '' },
  //           { label: '知乎', link: '' },
  //           { label: 'csdn', link: '' },
  //         ],
  //       },
  //       {
  //         title: '联系我',
  //         list: [{ label: '微信' }, { label: 'QQ' }],
  //       },
  //     ],
  //     qrCode: {
  //       image: code,
  //       text: '前端',
  //     },
  //     copyRight: 'Copyright @ 2022 xxx 保留所有权利',
  //     siteNumber: '粤ICP备xxxxxxxx号-x',
  //     publicNumber: '粤公网安备 xxxxxxxxxx号',
  //   },
  // };
};

export default MyApp;
