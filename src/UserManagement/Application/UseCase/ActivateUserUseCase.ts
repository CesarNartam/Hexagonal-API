import { UserInterface } from "../../Domain/Ports/UserInterface";

export class ActivateUserUseCase {
    constructor(readonly repository:UserInterface){}

    run(token:string) {
        
    }
}