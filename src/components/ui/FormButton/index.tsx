import * as S from './styles';

export default function FormButton({children}: {children: string}) {
	return(
		<S.Button type="submit">{children}</S.Button>
	);
}