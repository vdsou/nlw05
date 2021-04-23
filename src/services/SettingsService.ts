import { SettingsRepository } from "../repositories/SettingsRepository";
import { getCustomRepository, Repository } from "typeorm";
import { Setting } from "../entities/Setting";

interface ISettingsCreate {
  chat: boolean;
  username: string;
}

class SettingsService {
  private settingsRepository: Repository<Setting>;
  constructor() {
    this.settingsRepository = getCustomRepository(SettingsRepository);
  }
  async create({ chat, username }: ISettingsCreate) {
    const userExist = await this.settingsRepository.findOne({
      username,
    });

    if (userExist) {
      throw new Error("User already exist!");
    }

    const settings = this.settingsRepository.create({
      chat,
      username,
    });
    console.log(settings);
    await this.settingsRepository.save(settings);

    return settings;
  }
  async findByUsername(username: string) {
    const settings = await this.settingsRepository.findOne({ username });

    return settings;
  }
  async update(username: string, chat: boolean) {
    await this.settingsRepository
      .createQueryBuilder()
      .update(Setting)
      .set({ chat })
      .where("username = :username", {
        username,
      })
      .execute();
  }
}

export { SettingsService };
