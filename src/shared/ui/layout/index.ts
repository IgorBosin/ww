import { Content } from './Content';
import { Footer } from './Footer';
import { Header } from './Header';
import { Wrapper, WrapperProps } from './Wrapper';

interface CompoundedComponent extends React.FC<WrapperProps> {
  Header: typeof Header;
  Content: typeof Content;
  Footer: typeof Footer;
}

const Layout = Wrapper as CompoundedComponent;

Layout.Header = Header;
Layout.Content = Content;
Layout.Footer = Footer;

export { Layout };
