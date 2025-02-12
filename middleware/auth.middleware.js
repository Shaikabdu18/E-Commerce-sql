import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  try {
    const authHeader = req.header("Authorization");

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "Access Denied. No Token Provided." });
    }

    const token = authHeader.split(" ")[1]; 
    
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified; 

    next(); 
  } catch (error) {
    return res.status(403).json({ message: "Invalid or Expired Token", error: error.message });
  }
};

export default authMiddleware;
