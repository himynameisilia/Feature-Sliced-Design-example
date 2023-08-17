import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LangSwitcher.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

interface ILangSwitcherProps {
	className?: string;
}

export const LangSwitcher = ({ className }: ILangSwitcherProps) => {
	const toggle = () => {
		i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
	};
	const { t, i18n } = useTranslation();

	return (
		<Button
			className={classNames(cls.LangSwitcher, {}, [className])}
			theme={ThemeButton.CLAER}
			onClick={toggle}
		>
			{t('language')}
		</Button>
	);
};
