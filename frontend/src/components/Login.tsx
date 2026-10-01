import Input from "./Input"

function Login() {
    return (
        <main className="h-screen bg-[#161410] flex items-center justify-center">
            <div className="flex flex-col items-center justify-center gap-5  md:w-[350px]">
                <img src="./logo.png" alt="Logo Hamburgueria" className="w-[100px]"/>
                <div className="flex flex-col gap-1 w-full">
                    <Input placeholder="E-mail" type="text" />
                    <Input placeholder="Senha" type="password" />
                </div>
                <div className="flex flex-col gap-1 w-full">
                    <button className="bg-[#C92A0E] text-[white] p-3 rounded-sm md:h-[34px] flex items-center justify-center cursor-pointer">Login</button>
                    <button className="bg-white border border-[#C92A0E] text-[#C92A0E] p-3 rounded-sm md:h-[34px] flex items-center justify-center cursor-pointer">Não tenho uma conta</button>
                </div>
            </div>
        </main>
    )
}

export default Login