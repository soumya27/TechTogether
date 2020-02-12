export class Vines {
  vineId: string;
  url: string;
  description: string;
  tags: object;

  constructor(url: string, description: string, tags: object) {
    this.url = url;
    this.description = description;
    this.tags = tags;
  }
}
