import { User } from "../../Domain/Entities/User";

export interface EmailPort {
    run(use:User):Promise<void>;
}