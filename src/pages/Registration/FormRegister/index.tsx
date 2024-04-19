import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import FormButton from "src/components/ui/FormButton";
import FormField from "src/components/ui/FormField";
import * as S from "./styles";
import { z } from "zod";

export const RegistrationSchema = z.object({
    name: z.string().min(4, {message: "Digite seu nome!"}),
    phone: z.string().min(11, {message: "Digite seu telefone!"}),
    email: z.string().email({message: "Digite um email válido!"}),
    password: z.string().min(6, {message: "Senha inválida!"}),
    confirmPassword: z.string().min(6, {message: "Senhas não batem!"})
}).refine(({ password, confirmPassword}) => password === confirmPassword, {
    message: "As senhas não coincidem!",
    path: ["confirmPassword"]
});

export type RegistrationSchemaType = z.infer<typeof RegistrationSchema>;

export default function RegistrationForm() {

    const {
        register,
        handleSubmit,
        trigger,
        formState: { errors },
    } = useForm<RegistrationSchemaType>({ resolver: zodResolver(RegistrationSchema) });

    const onSubmit: SubmitHandler<RegistrationSchemaType> = (data) => console.log(data);

    return(
        <S.FormRegister onSubmit={handleSubmit(onSubmit)}>
            <FormField
                label="Nome"
                type="name"
                placeholder="Digite seu nome"
                name="name"
                register={register}
                error={errors.name}
                onChange={() => trigger("name")}
            />
            <FormField
                label="Telefone"
                type="tel"
                placeholder="Digite seu telefone"
                name="phone"
                register={register}
                error={errors.phone}
                onChange={() => trigger("phone")}
            />
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
            <FormField
                label="Confirmar senha"
                type="password"
                placeholder="Confirme sua Senha"
                name="confirmPassword"
                register={register}
                error={errors.confirmPassword}
                onChange={() => trigger("confirmPassword")}
            />
            <FormButton>Cadastrar</FormButton>
        </S.FormRegister>
    )
};