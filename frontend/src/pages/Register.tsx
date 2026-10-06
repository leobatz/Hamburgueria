import { useState } from "react";
import Input from "../components/Input";
import { useNavigate } from "react-router";

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [cep, setCep] = useState("");

    const navigate = useNavigate();

    function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log(name);
        console.log(email);
        console.log(password)
        console.log(confirmPassword);
        console.log(cep);
    };

    return (
        <form onSubmit={handleSubmit} className="h-screen bg-[#161410] flex items-center justify-center">
            <div className="flex flex-col items-center justify-center gap-5  md:w-[350px]">
                <img src="./logo.png" alt="Logo Hamburgueria" className="w-[100px]"/>
                <div className="flex flex-col gap-1 w-full">
                    <Input required placeholder="Nome Completo" type="text" onChange={(e) => setName(e.target.value)}/>
                    <Input required placeholder="E-mail" type="email" onChange={(e) => setEmail(e.target.value)}/>
                    <Input required placeholder="Senha" type="password" onChange={(e) => setPassword(e.target.value)}/>
                    <Input required placeholder="Confirme sua senha" type="password" onChange={(e) => setConfirmPassword(e.target.value)}/>
                    <Input required placeholder="CEP" type="text" onChange={(e) => setCep(e.target.value)}/>
                </div>
                <div className="flex flex-col gap-1 w-full">
                    <button type="submit" className="bg-[#C92A0E] text-[white] p-3 rounded-sm md:h-[40px] flex items-center justify-center cursor-pointer">Registrar</button>
                    <button onClick={() => navigate("/login")} className="bg-white border border-[#C92A0E] text-[#C92A0E] p-3 rounded-sm md:h-[40px] flex items-center justify-center cursor-pointer">Já tenho uma conta</button>
                </div>
            </div>
        </form>
    );
};

export default Register;