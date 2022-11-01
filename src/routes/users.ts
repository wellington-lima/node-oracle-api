import { Router } from "express";
import UserController from "../controllers/UserController";

const userRouter = Router();

userRouter.get("/", async(request, response) => {
  const users = await UserController.listAll();
  return response.status(200).json(users);  
});

userRouter.get("/:id", async(request, response) => {
  const id = +request.params.id;
  const user = await UserController.findById(id);
  return response.status(200).json(user);
});

userRouter.post("/", async(request, response) => {
  const { ID, EMAIL, FIRST_NAME, LAST_NAME, AVATAR } = request.body;
  await UserController.create({ ID, EMAIL, FIRST_NAME, LAST_NAME, AVATAR });
  return response.status(200).json({ response: 'User created'});
});

userRouter.put("/:ID", async(request, response) => {
  const ID = +request.params.ID;
  const {EMAIL, FIRST_NAME, LAST_NAME, AVATAR } = request.body;
  await UserController.update({ ID, EMAIL, FIRST_NAME, LAST_NAME, AVATAR });
  return response.status(200).json({ response: 'User updated'});
});

userRouter.delete("/:ID", async(request, response) => {
  const ID = +request.params.ID;
  await UserController.delete(ID);
  return response.status(200).json({ response: 'User deteleted'});
});

export default userRouter;