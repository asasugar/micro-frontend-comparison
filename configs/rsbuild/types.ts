import type { MicroFrontendType } from '../shared/types';

export interface BuildConfigOptions extends ChildConfigOptions {
  type: MicroFrontendType;
}

export interface ChildConfigOptions {
  name: string;
  port?: number;
}
