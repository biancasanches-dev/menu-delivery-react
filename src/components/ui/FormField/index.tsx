import { FieldError, UseFormRegister } from 'react-hook-form';
import * as S from './styles';
import { UserSchemaRegisterType } from 'src/utils/UserSchema';

export type IFormFieldProps = {
    label: string;
    type: string;
    placeholder: string;
    name: keyof UserSchemaRegisterType;
    register: UseFormRegister<any>;
    error: FieldError | undefined;
    onChange?: () => void;
}

export default function FormField({ label, type, placeholder, name, register, error, onChange}: IFormFieldProps) {
	return(
		<S.FormInput>
			<label>{label}</label>
			<input 
				type={type}
				placeholder={placeholder}
				{...register(name, { required: true })}
				onChange={onChange}
			/>
			{error && <span>{error.message}</span>}
		</S.FormInput>
	);
}