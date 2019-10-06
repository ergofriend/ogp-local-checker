import util from "util";
import child_process from "child_process";
import BeautifulDom from "beautiful-dom";
import {NextApiRequest, NextApiResponse} from "next";

import is_url from "../../util/is_url";

const exec = util.promisify(child_process.exec);

const getHeader = async (url: string) => {
  const {stdout, stderr} = await exec("curl -L " + url);
  return {stdout: stdout, stderr: stderr};
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const url = req.query.url;

  console.log("get: ", req.url);

  if (!is_url(url as string)) {
    res.status(400);
  } else {
    const document = await getHeader(url as string);
    const dom = new BeautifulDom(document.stdout);
    const head = dom.getElementsByTagName("head")[0];
    const metas = head.getElementsByTagName("meta");

    let data: any = {};

    const title = head.getElementsByTagName("title")[0];
    if (title){
      console.log("title", title);
      data.title = title.innerText;
    } 
    data.url = url;

    metas.forEach(meta => {
      const key = meta.getAttribute("name")
        ? meta.getAttribute("name")
        : meta.getAttribute("property");
      if (key) {
        const key_string = key.replace(":", "_");
        const content = meta.getAttribute("content");
        data[key_string] = content;
      }
    });

    res.status(200).json(data);
  }
};
