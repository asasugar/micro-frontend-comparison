declare module '@rsbuild/core' {
  interface RsbuildConfig {
    tools?: {
      rspack?: {
        resolve?: {
          extensions?: string[];
        };
        module?: {
          rules?: Array<{
            test: RegExp;
            loader?: string;
            options?: Record<string, any>;
            use?: Array<{
              loader: string;
              options?: Record<string, any>;
            }>;
          }>;
        };
        plugins?: any[];
        output?: {
          library?: string;
          libraryTarget?: string;
        };
      };
    };
  }
}

export {};
