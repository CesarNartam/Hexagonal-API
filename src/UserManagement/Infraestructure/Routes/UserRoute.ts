import { registerUserController } from "../dependencies";

router.post("/",registerUserController.run.bind(registerUserController));
router.put("/:token/activate");
export router;