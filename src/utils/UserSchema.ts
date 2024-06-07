import { z } from 'zod';

export const UserSchemaRegister = z.object({
	name: z.string().min(4, {message: 'Digite seu nome!'}),
	// phone: z.string().min(11, {message: "Digite seu telefone!"}),
	email: z.string().email({message: 'Digite um email válido!'}),
	password: z.string().min(6, {message: 'Senha inválida!'}),
	confirmPassword: z.string().min(6, {message: 'Senhas não batem!'})
}).refine(({ password, confirmPassword}) => password === confirmPassword, {
	message: 'As senhas não coincidem!',
	path: ['confirmPassword']
});

export const UserSchemaLogin = z.object({
	email: z.string().email({message: 'Digite um email válido!'}),
	password: z.string().min(6, {message: 'Senha inválida!'})
});

export type UserSchemaLoginType = z.infer<typeof UserSchemaLogin>;

export type UserSchemaRegisterType = z.infer<typeof UserSchemaRegister>;