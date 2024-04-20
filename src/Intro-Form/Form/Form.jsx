import Input from "../Input/Input";
import Button from "../Button/Button";
import './Form.css'
import Terms from "../Terms/Terms";
const Form = () =>{
    return(
        <form >
            <Input type="text" placeholder="First Name" />
            <Input type="text" placeholder="Last Name" />
            <Input type="email" placeholder="Email Adress" />
            <Input type="password" placeholder="password" />
            <Button buttonName=" CLAIM YOUR FREE TRIAL"/>
            <Terms link="#"/>
        </form>
    )
};

export default Form;