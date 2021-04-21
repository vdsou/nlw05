import { UsersService } from "../services/UsersService";
import { Request, Response } from "express";
class UsersController {
  async create(req: Request, res: Response) {
    const email = req.body.email.toString();
    try {
      const usersService = new UsersService();
      const user = await usersService.create(email);
      return res.status(201).json({
        message: "user created successfully",
        success: true,
        user,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: "error",
        success: false,
      });
    }
  }
}
export { UsersController };
