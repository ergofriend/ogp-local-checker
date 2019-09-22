const util = require("util");
const exec = util.promisify(require("child_process").exec);

const jsdom = require("jsdom");
const {JSDOM} = jsdom;

async function ls() {
  const {stdout, stderr} = await exec("ls");
  console.log("stdout:", stdout);
  console.log("stderr:", stderr);
  return {stdout: stdout, stderr: stderr};
}

const getHeader = async (url: string) => {
  const {stdout, stderr} = await exec("curl " + url);
  return {stdout: stdout, stderr: stderr};
};

export default async (req, res) => {
  const dom = new JSDOM(await getHeader(req.query.url));
  const head = dom.window.document.head;
  console.log("dom:", head.title);
  // console.log(
  //   "dom:",
  //   dom.window.document.head.querySelector("[name=description][content]")
  // );

  res.status(200).json(await getHeader(req.query.url));
};
