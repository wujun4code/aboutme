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
        <Link
          aria-label="工业和信息化部备案管理系统网站 苏ICP备2020058677号-1"
          sx={{ ml: 2 }}
          href="http://beian.miit.gov.cn/"
        >
          工业和信息化部备案管理系统网站 苏ICP备2020058677号-1
        </Link>
      </Flex>
    </Box>
  );
};

export default Footer;
