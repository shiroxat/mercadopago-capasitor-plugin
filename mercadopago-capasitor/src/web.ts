import { WebPlugin } from '@capacitor/core';
import { MercadopagoPluginPlugin } from './definitions';

export class MercadopagoPluginWeb extends WebPlugin implements MercadopagoPluginPlugin {
  constructor() {
    super({
      name: 'MercadopagoPlugin',
      platforms: ['web']
    });
  }

  async echo(options: { value: string }): Promise<{value: string}> {
    console.log('ECHO', options);
    return options;
  }
}

const MercadopagoPlugin = new MercadopagoPluginWeb();

export { MercadopagoPlugin };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(MercadopagoPlugin);
