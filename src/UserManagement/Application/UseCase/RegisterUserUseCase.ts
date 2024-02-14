import { Contact } from "../../Domain/Entities/Contact";
import { Credential } from "../../Domain/Entities/Credential";
import { Status } from "../../Domain/Entities/Status";
import { User } from "../../Domain/Entities/User";
import { UserInterface } from "../../Domain/Ports/UserInterface";


export class RegisterUserUseCase {

    constructor(readonly repository:UserInterface) {}

    async run( { name, lastName, cellphone, email, password } ):Promise<User|any> {
        try {
            let contact = new Contact(name,lastName,cellphone);
            let credentials = new Credential(email,password);
            let status = new Status("",new Date);

            let user = new User(
                contact,
                credentials,
                status
            );

            return await this.repository.registerUser(user);

        }catch(error) {

        }
    }

}