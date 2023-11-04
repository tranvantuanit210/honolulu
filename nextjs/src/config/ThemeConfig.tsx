import { ConfigProvider, ThemeConfig } from "antd";

const theme: ThemeConfig = {
  token: {
    fontSize: 16,
    colorPrimary: "#dd3643",
  },
};

const ThemeConfigProvider = ({ children }: { children: React.ReactNode }) => {
  return <ConfigProvider theme={theme}>{children}</ConfigProvider>;
};

export default ThemeConfigProvider;
