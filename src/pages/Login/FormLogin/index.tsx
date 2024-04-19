import { SubmitHandler, useForm } from "react-hook-form";
import FormField from "../../../components/ui/FormField";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import * as S from "./styles"
import { RegistrationSchema } from "src/pages/Registration/FormRegister";
// import { Link } from "react-router-dom";
import Registration from "src/pages/Registration";
import FormButton from "src/components/ui/FormButton";

// const SignUpSchema = z.object({
//     email: z.string().email({message: "Digite um email válido!"}),
//     password: z.string().min(6, {message: "Senha inválida!"})
// });

// export type SignUpSchemaType = z.infer<typeof SignUpSchema>;

type RegistrationSchemaType = z.infer<typeof RegistrationSchema>;

export default function FormLogin() {

    const {
        register,
        handleSubmit,
        trigger,
        formState: { errors },
    } = useForm<RegistrationSchemaType>({ resolver: zodResolver(RegistrationSchema) });
    
    const onSubmit: SubmitHandler<RegistrationSchemaType> = (data) => console.log(data);

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <S.FormLogin>
                <FormField
                    label="Email"
                    type="email"
                    placeholder="Digite seu email"
                    name="email"
                    register={register}
                    error={errors.email}
                    onChange={() => trigger("email")}
                />

                <FormField
                    label="Senha"
                    type="password"
                    placeholder="Digite sua Senha"
                    name="password"
                    register={register}
                    error={errors.password}
                    onChange={() => trigger("password")}
                />

                <S.FormFooter>
                    {/* <Link to="/cadastro">Não tem conta? Cadastre-se</Link> */}
                    <Registration />
                    <FormButton>Entrar</FormButton>
                </S.FormFooter>
            </S.FormLogin>
        </form>
        
    )
};