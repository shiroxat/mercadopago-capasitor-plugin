
  Pod::Spec.new do |s|
    s.name = 'MercadopagoCapasitor'
    s.version = '0.0.1'
    s.summary = 'Plugin de capasitor para mercadopago'
    s.license = 'MIT'
    s.homepage = 'https://github.com/LaMaldicionDeMandos/mercadopago-capasitor-plugin'
    s.author = 'Pasut Marcelo'
    s.source = { :git => 'https://github.com/LaMaldicionDeMandos/mercadopago-capasitor-plugin', :tag => s.version.to_s }
    s.source_files = 'ios/Plugin/**/*.{swift,h,m,c,cc,mm,cpp}'
    s.ios.deployment_target  = '11.0'
    s.dependency 'Capacitor'
  end