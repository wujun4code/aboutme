/** @jsx jsx */
import { Box, Flex, Link, useColorMode, jsx } from "theme-ui";

const Footer = () => {
  const [colorMode, setColorMode] = useColorMode();
  const isDark = colorMode === `dark`;
  const toggleColorMode = (e: any) => {
    setColorMode(isDark ? `light` : `dark`);
  };

  return (
    <Box as="footer" variant="footer">
      <button
        sx={{
          variant: `buttons.toggle`,
          fontWeight: `semibold`,
          display: `block`,
          mx: `auto`,
          mb: 3,
        }}
        onClick={toggleColorMode}
        type="button"
        aria-label="Toggle dark mode"
      >
        {isDark ? `Light` : `Dark`}
      </button>
      Copyright &copy; Jun Wu {new Date().getFullYear()}. All rights reserved.
      <br />
      <Flex
        sx={{
          justifyContent: `center`,
          alignItems: `center`,
          mt: 3,
          color: `text`,
          fontWeight: `semibold`,
          a: { color: `text` },
        }}
      >
        {` `}
        <img src="beian-icon.png"></img>
        <Link
          target="_blank"
          sx={{ ml: 2 }}
          aria-label="苏公网安备 32058302002826号"
          href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=32058302002826"
        >
          苏公网安备 32058302002826号
        </Link>
        <Link
          aria-label="苏ICP备2020058677号-1"
          sx={{ ml: 2 }}
          href="http://beian.miit.gov.cn/"
        >
          苏ICP备2020058677号-1
        </Link>
      </Flex>
    </Box>
  );
};

export default Footer;
