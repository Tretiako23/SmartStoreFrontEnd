import {
  SocialLink,
  SocialLinksItem,
  SocialLinksList,
  SocialLinksWrap,
} from './SocialLinksStyled';
import { FaInstagram } from 'react-icons/fa6';
import { FaTelegramPlane } from 'react-icons/fa';
const SocialLinks = () => {
  return (
    <SocialLinksWrap>
      <SocialLinksList>
        <SocialLinksItem>
          <SocialLink
            href="https://www.instagram.com/smart.store_electronics/"
            target="_blank"
            rel="noopener noreferrer"
            title="Посилання до Instagram сторінки"
          >
            <FaInstagram size={'20px'} />
          </SocialLink>
        </SocialLinksItem>

        <SocialLinksItem>
          <SocialLink
            href="https://t.me/smartstore94"
            target="_blank"
            rel="noopener noreferrer"
            title="Посилання до Telegram каналу"
          >
            <FaTelegramPlane size={'20px'} />
          </SocialLink>
        </SocialLinksItem>
      </SocialLinksList>
    </SocialLinksWrap>
  );
};

export default SocialLinks;
