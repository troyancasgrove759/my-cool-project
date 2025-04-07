export class MyCoolProject {
  constructor() {
    this.init();
  }

  async init() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("My cool project is ready!");
  }
}
