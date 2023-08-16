import { classNames } from 'shared/lib/classNames/classNames';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import cls from './ThemeSwitcher.module.scss';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

interface IThemeSwitcherProps {
	className?: string;
}

export const ThemeSwitcher = ({ className }: IThemeSwitcherProps) => {
	const { theme, toggleTheme } = useTheme();
	return (
		<Button
			className={classNames(cls.ThemeSwitcher)}
			onClick={toggleTheme}
			theme={ThemeButton.CLAER}
		>
			{theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
		</Button>
	);
};
