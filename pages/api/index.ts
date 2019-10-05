import util from "util";
import child_process from "child_process";
import BeautifulDom from "beautiful-dom";

const exec = util.promisify(child_process.exec);

const getHeader = async (url: string) => {
  const {stdout, stderr} = await exec("curl " + url);
  return {stdout: stdout, stderr: stderr};
};

export default async (req, res) => {
  const document = await getHeader(req.query.url);
  const dom = new BeautifulDom(document.stdout);
  const head = dom.getElementsByTagName("head")[0];
  const metas = head.getElementsByTagName("meta");

  let data: any;

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

  console.log(data);

  res.status(200).json(data);
};
