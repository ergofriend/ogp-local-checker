import {ulid} from "ulid";

export type HistryInput = {
  title: string;
  description: string;
  image: string;
  site: string;
  url: string;
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

  load(histryList: Array<Histry>) {
    this.list = histryList;
  }

  add(data: HistryInput) {
    const history: Histry = {
      ulid: ulid().toString(),
      title: data.title,
      description: data.description,
      image: data.image,
      site: data.site,
      url: data.url
    };

    // 2連続の場合は上書きする
    if (this.list.length > 0 && history.url === this.list[0].url) {
      this.list.shift();
    }

    // 先頭に追加
    this.list.unshift(history);

    // 最大10個まで
    if (this.list.length > 10) {
      this.list.pop();
    }
    
    console.log(this.list);
    window.localStorage.setItem("history", JSON.stringify(this.list));
  }

  del(index: number): boolean {
    if (0 <= index && index < this.list.length) {
      this.list.splice(1, index);
      window.localStorage.setItem("history", JSON.stringify(this.list));
      return true;
    }
    return false;
  }
}
