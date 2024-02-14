import { RegisterUserUseCase } from "../../Application/UseCase/RegisterUserUseCase";
import { EmailService } from "../Service/Email";

export class RegisterUserController {

    public emailService:EmailService;

    constructor(readonly registerUserUseCase:RegisterUserUseCase) {}

    async run(req:Request,res:Response) {
        try {
            let user = await this.registerUserUseCase.run(req.body);

            this.emailService.run(user);

            return res.status(201).json(user);

        }catch(error) {
            return res.status(error.http_status ?? 500).json(error.getMessage());
        }
    }

}