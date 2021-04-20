import { Request, Response } from "express";
import { SettingsRepository } from "../repositories/SettingsRepository";
import { getCustomRepository } from "typeorm";
class SettingsController {
  async create(req: Request, res: Response) {
    const chat = req.body.chat.toString();
    const username = req.body.username.toString();
    const settingsRepository = getCustomRepository(SettingsRepository);
    const settings = settingsRepository.create({
      chat,
      username,
    });
    await settingsRepository.save(settings);
    return res.status(200).json({ settings });
  }
}
export {SettingsController}