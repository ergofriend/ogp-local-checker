export type HistryInput = {
  title: string;
  description: string;
  image: string;
  site: string;
};

export type Histry = HistryInput & {
  ulid: string;
};

export type HistryList = Array<Histry>;

export default class OGPHistory {
  list: HistryList;

  constructor() {
    this.list = [];
  }

  load() {
    const data = window.localStorage.getItem("history") || "[]";
    this.list = JSON.parse(data);
  }

  add(data: HistryInput) {
    const history: Histry = {
      ulid: "aa",
      title: data.title,
      description: data.description,
      image: data.image,
      site: data.site
    };
    this.list.unshift(history);
    window.localStorage.setItem("history", this.list.toString());
  }

  del(index: number): boolean {
    if (0 <= index && index < this.list.length) {
      this.list.splice(1, index);
      window.localStorage.setItem("history", this.list.toString());
      return true;
    }
    return false;
  }
}
