import { Request, Response } from "express";
import { SettingsService } from "../services/SettingsService";
class SettingsController {
  async create(req: Request, res: Response) {
    const chat = req.body.chat.toString();
    const username = req.body.username.toString();
    const settingService = new SettingsService();
    try {
      const settings = await settingService.create({ chat, username });
      return res.status(200).json({ settings });
    } catch (error) {
      return res.status(409).json({
        message: "Error.",
        success: false
      })
    }
  }
}
export { SettingsController };
