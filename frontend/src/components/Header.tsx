import { useNavigate } from "react-router";

function Header() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#161410]">
        <div className="mx-auto flex w-full items-center justify-between p-3 md:w-[737px] md:p-0">
            <img src="./logo.png" alt="Logo" />
            <button onClick={() => navigate("/login")} className="h-[35px] w-[130px] cursor-pointer rounded-sm bg-[#F2DAAC]">
                Entrar
            </button>
        </div>
    </div>
  );
};

export default Header;
