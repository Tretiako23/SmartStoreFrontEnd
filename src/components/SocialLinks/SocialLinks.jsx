import {
  SocialLink,
  SocialLinksItem,
  SocialLinksList,
  SocialLinksWrap,
} from './SocialLinksStyled';
import { FaInstagram } from 'react-icons/fa6';
import { FaTiktok } from 'react-icons/fa6';

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
            href="https://www.tiktok.com/@smart.store_electronics?_t=8s9w5DbXZAc&_r=1"
            target="_blank"
            rel="noopener noreferrer"
            title="Посилання до Tik-Tok каналу"
          >
            <FaTiktok size={'20px'} />
          </SocialLink>
        </SocialLinksItem>
      </SocialLinksList>
    </SocialLinksWrap>
  );
};

export default SocialLinks;
