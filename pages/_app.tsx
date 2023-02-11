import '@/styles/globals.css';
import type { AppProps, AppContext } from 'next/app';
import App from 'next/app';
import { Layout, ILayoutProps } from '@/components/layout';
import code from '@/public/code.png';

const MyApp = (data: AppProps & ILayoutProps) => {
  const { Component, pageProps, navbarData, footerData } = data;

  return (
    <Layout navbarData={navbarData} footerData={footerData}>
      <Component {...pageProps} />
    </Layout>
  );
};

MyApp.getInitialProps = async (context: AppContext) => {
  const pageProps = await App.getInitialProps(context);

  return {
    ...pageProps,
    navbarData: {},
    footerData: {
      title: 'demo',
      linkList: [
        {
          title: '技术栈',
          list: [
            { label: 'react' },
            { label: 'Typescript' },
            { label: 'ssr' },
            { label: 'nodejs' },
          ],
        },
        {
          title: '了解更多',
          list: [
            { label: '掘金', link: '' },
            { label: '知乎', link: '' },
            { label: 'csdn', link: '' },
          ],
        },
        {
          title: '联系我',
          list: [{ label: '微信' }, { label: 'QQ' }],
        },
      ],
      qrCode: {
        image: code,
        text: '前端',
      },
      copyRight: 'Copyright @ 2022 xxx 保留所有权利',
      siteNumber: '粤ICP备xxxxxxxx号-x',
      publicNumber: '粤公网安备 xxxxxxxxxx号',
    },
  };
};

export default MyApp;
