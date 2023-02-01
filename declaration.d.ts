declare module '*.scss' {
    const content: Record<string, string>;
    // eslint-disable-next-line import/no-default-export
    export default content;
  }
  declare module '*.module.css';
  declare module '*.svg';
  declare module '*.jpg';
  declare module '*.svg';
  declare module '*.jpeg';
  declare module '*.webp';
  declare module '*.png' {
    const value: string;
    export = value;
  }
  