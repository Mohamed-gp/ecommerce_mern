import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies["token"];

  if (token) {
    try {
      const decodedPayload = jwt.verify(
        token,
        process.env.JWT_SECRET as string
      );
      req.user = decodedPayload;
      next();
    } catch (error) {
      return res
        .status(403)
        .json({ data: null, messsage: "access denied, invalid token" });
    }
  } else {
    return res.status(403).json({
      data: null,
      message: "access denied,no token provided",
    });
  }
};

const verifyUser = (req: Request, res: Response, next: NextFunction) => {
  if (req.user.id != req.params.id) {
    return res.status(403).json({
      data: null,
      message: "access denied,you must be the user himself",
    });
  } else {
    next();
  }
};

const verifyAdminAndUser = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.user.role == "admin" || req.user.id == req.params.id) {
    next();
  } else {
    return res
      .status(403)
      .json({ data: null, message: "access denied,only admin himself" });
  }
};

const verifyAdmin = (req: Request, res: Response, next: NextFunction) => {
  if (req.user.role != "admin") {
    return res
      .status(403)
      .json({ data: null, message: "access denied,only admin himself" });
  }
  next();
};

export { verifyToken, verifyUser, verifyAdminAndUser, verifyAdmin };
