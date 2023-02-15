import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { ILayoutProps } from "../../components/layout";
import { CMSDOMAIN, LOCALDOMAIN } from "@/utils";
import { isEmpty } from "lodash";
import nextConnect from 'next-connect'

const getLayoutData = (
  req: NextApiRequest,
  res: NextApiResponse<ILayoutProps>
) => {
  axios.get(`${CMSDOMAIN}/api/layouts`).then(result => {
    const {
      copyRight,
      links,
      publicNumber,
      qr_code,
      qr_code_image,
      siteNumber,
      title,
    } = result.data || {};

    res.status(200).json({
      navbarData: {},
      footerData: {
        title,
        linkList: links?.data?.map((item: any) => {
          return {
            title: item.title,
            list: item?.links?.data?.map((_item: any) => {
              return {
                label: _item.label,
                link: isEmpty(_item.link) ? "" : _item.link,
              };
            }),
          };
        }),
        qrCode: {
          // image: `${LOCALDOMAIN}/public/code}`,
          image: '',
          text: qr_code,
        },
        copyRight,
        siteNumber,
        publicNumber,
      },
    });
  });
};

export default getLayoutData;