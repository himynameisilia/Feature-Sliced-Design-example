import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';
import { ButtonHTMLAttributes, FC } from 'react';

export enum ThemeButton {
	CLAER = 'clear',
}

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	theme?: ThemeButton;
}

export const Button: FC<IButtonProps> = props => {
	const { className, children, theme, ...otherProps } = props;
	return (
		<button
			className={classNames(cls.Button, { [cls[theme]]: true }, [className])}
			{...otherProps}
		>
			{children}
		</button>
	);
};
