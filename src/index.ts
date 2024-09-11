import { postImage } from './clients/at'; // Importing from TypeScript file in clients folder
import { getNextImage } from './images';   // Importing from TypeScript file in the same directory
import * as dotenv from 'dotenv';

dotenv.config();

async function main() {
  const { LAST_IMAGE_NAME: lastImageName } = process.env;

  const nextImage = await getNextImage({ lastImageName });

  console.log(nextImage.imageName);

  await postImage({
    path: nextImage.absolutePath,
    text: '',
    altText: '',
  });
}

main().catch(error => {
  console.error('Erro ao executar o script:', error);
  process.exit(1);
});
