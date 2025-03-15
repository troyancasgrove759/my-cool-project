function getRandomInt(max: number): number {
  return Math.floor(Math.random() * max);
}

const myCoolProject = () => {
  const name: string = "my-cool-project";
  const description: string = "This is my cool project for my school";
  const projectId: number = getRandomInt(1000);
  return { name, description, projectId };
};
