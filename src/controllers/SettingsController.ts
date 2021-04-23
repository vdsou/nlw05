import { Request, Response } from "express";
import { SettingsService } from "../services/SettingsService";
class SettingsController {
  async create(req: Request, res: Response) {
    const { chat, username } = req.body;
    const settingsService = new SettingsService();
    try {
      const settings = await settingsService.create({ chat, username });
      return res.status(200).json({ settings });
    } catch (error) {
      console.log(error);
      return res.status(400).json({
        message: "Error.",
        success: false,
      });
    }
  }
  async findByUsername(req: Request, res: Response) {
    const { username } = req.params;

    const settingsService = new SettingsService();

    try {
      const settings = await settingsService.findByUsername(username);
      return res.status(200).json({ settings });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: "Error",
        success: false,
      });
    }
  }
  async update(req: Request, res: Response) {
    const { username } = req.params;
    const { chat } = req.body;

    const settingsService = new SettingsService();

    try {
      const settings = await settingsService.update(username, chat);
      return res.status(200).json({ message: "update", success: true, settings });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: "Error",
        success: false,
      });
    }
  }
}
export { SettingsController };
