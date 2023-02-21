import { ButtonPrimary } from "./Button";
import TextFieldLogin from "./TextFieldLogin";

export const Login = () => {
    return (
        <div id='container'>
        <div>
          <h1>Login</h1>
          <form action="">
              <TextFieldLogin/>
              <ButtonPrimary content='Login'/>
          </form> <br />
          <a href="">Faça o cadastro</a>
        </div>  
        </div>
    );
}