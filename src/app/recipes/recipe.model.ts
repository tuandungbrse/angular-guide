export class Recipe {
  public name: string;
  public desc: string;
  public photo: string;

  constructor(name: string, desc: string, photo: string) {
    this.name = name;
    this.desc = desc;
    this.photo = photo;
  }
}
