import { FC } from 'react';
import Modal from './modal.organism';
import Image from 'next/image';
import { CTAButton } from './cta-text-content.organism';
import clsx from 'clsx';

interface ContactUsModalProps {
	isVisible: boolean;
	onClose: () => void;
	logoDark: any;
	ctaTextColor: string;
	ctaBgColor: string;
}

const ContactUsModal: FC<ContactUsModalProps> = ({
	isVisible,
	onClose,
	logoDark,
	ctaTextColor,
	ctaBgColor,
}) => (
	<Modal onClose={onClose} isVisible={isVisible}>
		<div className="flex flex-col items-center justify-center">
			<div className="contact-us-modal-header">
				<div className="image-wrapper relative h-[60px] w-[170px] md:h-[80px] md:w-[230px]">
					<Image
						alt={logoDark?.image?.asset?.altText || ''}
						fill
						className="object-contain"
						priority={true}
						src={logoDark?.image?.asset?.url || ''}
					/>
				</div>
			</div>
			<div className="contact-us-modal--body flex w-full items-center justify-center py-6 text-center">
				{/* FIXME: Move all following content to CMS */}
				<div>
					<h4 className={clsx('pb-2')}>Need to get in touch?</h4>
					<p className={clsx('pb-8', 'text-2xl')}>
						Give us a call and we'll be happy to help.
					</p>
					<CTAButton
						textColor={ctaTextColor}
						bgColor={ctaBgColor}
						href="tel:6175555555"
						text="Call us now"
					/>
				</div>
			</div>
			<p className="text-center">{}</p>
		</div>
	</Modal>
);

export default ContactUsModal;
