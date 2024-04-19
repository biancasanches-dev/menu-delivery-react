import { FieldError, UseFormRegister } from "react-hook-form";
import * as S from './styles';
// import { SignUpSchemaType } from "src/pages/Login/FormLogin";
import { RegistrationSchemaType } from "src/pages/Registration/FormRegister";

export type IFormFieldProps = {
    label: string;
    type: string;
    placeholder: string;
    name: keyof RegistrationSchemaType;
    register: UseFormRegister<RegistrationSchemaType>;
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
    )
};