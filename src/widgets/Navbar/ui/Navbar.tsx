import cls from './Navbar.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

interface INavbarProps {
	className?: string;
}

export const Navbar = ({ className }: INavbarProps) => {
	return (
		<div className={classNames(cls.Navbar)}>
			<ThemeSwitcher />
			<div className={cls.links}>
				<AppLink
					theme={AppLinkTheme.SECONDARY}
					to={'/'}
					className={cls.mainLink}
				>
					Главная
				</AppLink>
				<AppLink theme={AppLinkTheme.RED} to={'/about'}>
					О сайте
				</AppLink>
			</div>
		</div>
	);
};