import { http, io } from "../http";
import { ConnectionsService } from "../services/ConnectionsService";
import { UsersService } from "../services/UsersService";
import { MessagesService } from "../services/MessagesService";

interface IParams {
  text: string;
  email: string;
}

io.on("connection", (socket) => {
  const connectionsService = new ConnectionsService();
  const usersService = new UsersService();
  const messagesService = new MessagesService();

  socket.on("client_fisrt_access", async (params) => {
    const socket_id = socket.id;
    let user_id = null;
    const { text, email } = params as IParams;
    const userExist = await usersService.findByEmail(email);

    if (!userExist) {
      const user = await usersService.create(email);
      user_id = user.id;
      await connectionsService.create({
        socket_id,
        user_id: user.id,
      });
    } else {
      user_id = userExist.id;

      const connection = await connectionsService.findByUserId(userExist.id);

      if (!connection) {
        await connectionsService.create({
          socket_id,
          user_id: userExist.id,
        });
      } else {
        connection.socket_id = socket_id;
        await connectionsService.create(connection);
      }
    }

    await messagesService.create({ user_id, text });
  });
});
