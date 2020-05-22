declare module "@capacitor/core" {
  interface PluginRegistry {
    MercadopagoPlugin: MercadopagoPluginPlugin;
  }
}

export interface MercadopagoPluginPlugin {
  echo(options: { value: string }): Promise<{value: string}>;
}
