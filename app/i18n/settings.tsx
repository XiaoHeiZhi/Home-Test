// 设置默认语言
export const fallbackLng = "en";
// 可支持的语言
export const languages = [fallbackLng, "zh", "de"];
// 默认翻译文件地址前缀
export const defaultNS = "translation";
// 设置url带有语言的参数字段名
export const cookieName = "i18next";

// 定义getOptions函数(获取选项函数)
export function getOptions(lng = fallbackLng, ns = defaultNS) {
  return {
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  };
}
