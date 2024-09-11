import { postImage } from './clients/at.js'; // Adicione a extensão .js para módulos ES
import { getNextImage } from './images.js'; // Adicione a extensão .js para módulos ES
import * as dotenv from 'dotenv';

// Carregar variáveis de ambiente
dotenv.config();

// Função principal para obter a próxima imagem e postá-la
async function main() {
  // Obtendo o nome da última imagem a partir das variáveis de ambiente
  const { LAST_IMAGE_NAME: lastImageName } = process.env;

  // Obtendo a próxima imagem com base no nome da última imagem
  const nextImage = await getNextImage({ lastImageName });

  // Log do nome da próxima imagem
  console.log(nextImage.imageName);

  // Postando a próxima imagem
  await postImage({
    path: nextImage.absolutePath,
    text: '', // Nenhum texto para o post da imagem
    altText: '', // Nenhum texto alternativo para o post da imagem
  });
}

// Executar a função principal
main().catch(error => {
  console.error('Erro ao executar o script:', error);
  process.exit(1); // Sair com um código de erro
});
