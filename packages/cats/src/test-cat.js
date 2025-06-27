import bcrypt from "bcrypt";
// import bcrypt from "bcrypt/bcrypt.js"; // Explicit path for ESM compatibility
export const testCat = () => bcrypt.hash("cat", 10);
// export const testCat = async () => {
//   const bcrypt = await import("bcrypt"); // Dynamically import bcrypt
//   return bcrypt.hash("cat", 10);
// };
