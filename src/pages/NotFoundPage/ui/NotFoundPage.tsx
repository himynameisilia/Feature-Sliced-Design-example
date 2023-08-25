import { classNames } from 'shared/lib/classNames/classNames';
import cls from './NotFoundPage.module.scss';
import { useTranslation } from 'react-i18next';

interface INotFoundPageProps {
	className?: string;
}

export const NotFoundPage = ({ className }: INotFoundPageProps) => {
	const { t } = useTranslation('notFoundPage');
	return (
		<div className={classNames(cls.NotFoundPage, {}, [className])}>
			{t('not Found')}
		</div>
	);
};
