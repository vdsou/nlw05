import { Request, Response } from "express";
import { MessagesService } from "../services/MessagesService";
class MessageController {
  async create(req: Request, res: Response) {
    // const text = req.body.text.toString();
    // const admin_id = req.body.admin_id.toString();
    // const user_id = req.body.user_id.toString();
    const { text, admin_id, user_id } = req.body;
    const messagesService = new MessagesService();

    const message = await messagesService.create({
      admin_id,
      text,
      user_id,
    });
    return res.status(200).json({ message });
  }
  async showByUser(req: Request, res: Response) {
    const { id } = req.params;
    const messagesService = new MessagesService();
      const list = await messagesService.listByUser(id);
      return res.status(200).json({list})
  }
}
export { MessageController };
