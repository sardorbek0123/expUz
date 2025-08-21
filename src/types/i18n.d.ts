declare module '*.json' {
  const value: any;
  export default value;
}

declare module 'i18next' {
  interface i18n {
    language: string;
    changeLanguage: (language: string) => Promise<void>;
  }
}
