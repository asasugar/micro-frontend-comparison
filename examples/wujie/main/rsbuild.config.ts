import { getMainConfig } from '../../../configs/rsbuild/main';

export default getMainConfig({
  port: process.env.PORT ? parseInt(process.env.PORT) : 8001,
});
