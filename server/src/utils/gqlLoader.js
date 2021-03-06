import fs from "fs";
import path from "path";

const loadGQLFile = (type) => {
  const filePath = path.join(__dirname, "../graphql", type);
  return fs.readFileSync(filePath, "utf-8");
};

export default loadGQLFile;
