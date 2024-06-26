import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import FormButton from 'src/components/ui/FormButton';
import FormField from 'src/components/ui/FormField';
import * as S from './styles';
import { UserSchemaRegister, UserSchemaRegisterType } from 'src/utils/UserSchema';
import { useContext } from 'react';
import { AuthContext } from 'src/contexts/AuthContext';

export default function RegistrationForm() {
	const { handleRegister } = useContext(AuthContext);

	const {
		register,
		handleSubmit,
		trigger,
		formState: { errors },
	} = useForm<UserSchemaRegisterType>({ resolver: zodResolver(UserSchemaRegister) });

	const onSubmit: SubmitHandler<UserSchemaRegisterType> = (data) => {
		try {
			handleRegister(data.name, data.email, data.password);
			console.log('dados enviados: ', data);
			alert('Cadastro efetuado com sucesso');
		} catch (error) {
			console.error(error);
		}
	};

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
			{/* <FormField
                label="Telefone"
                type="tel"
                placeholder="Digite seu telefone"
                name="phone"
                register={register}
                error={errors.phone}
                onChange={() => trigger("phone")}
            /> */}
			<FormField
				label="Email"
				type="email"
				placeholder="Digite seu email"
				name="email"
				register={register}
				error={errors.email}
				// onChange={() => trigger("email")}
			/>
			<FormField
				label="Senha"
				type="password"
				placeholder="Digite sua Senha"
				name="password"
				register={register}
				error={errors.password}
				// onChange={() => trigger("password")}
			/>
			<FormField
				label="Confirmar senha"
				type="password"
				placeholder="Confirme sua Senha"
				name="confirmPassword"
				register={register}
				error={errors.confirmPassword}
				// onChange={() => trigger("confirmPassword")}
			/>
			<FormButton>Cadastrar</FormButton>
		</S.FormRegister>
	);
}