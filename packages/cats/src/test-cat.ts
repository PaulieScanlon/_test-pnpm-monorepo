import bcrypt from "bcrypt";

export const testCat = () => bcrypt.hash("cat", 10);
