import imageResolver from 'image-resolver';

let resolver: any;
resolver = new imageResolver();
resolver.register(new imageResolver.FileExtension());
resolver.register(new imageResolver.MimeType());
resolver.register(new imageResolver.Opengraph());
resolver.register(new imageResolver.Webpage());

export function findImage(url): Promise<string> {
  return new Promise((resolve, reject) => {
    resolver.resolve(url, result => {
      if (!result) {
        return resolve(null);
      }
      resolve(result.image);
    });
  });
}
