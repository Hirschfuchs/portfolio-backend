import Processor from 'asciidoctor';
import { Glob } from 'glob';

console.log('Generiere Dokumentation ...', '...', '...');

const documents = new Glob('docs/dokumente/**/*.adoc', {
  nocase: true,
}).walkSync();

const docsDir = 'dist';

console.log(`${documents.length} Dateien zu erzeugen`);

for (const document of documents) {
  const fileInfo = extractFileParts(document);

  console.log(`Erzeuge ${fileInfo.filename} unter ${fileInfo.dir}`);

  Processor().convertFile(document, {
    safe: 'safe',

    attributes: { linkcss: true },

    mkdirs: true,

    to_dir: `${docsDir}/${fileInfo.dir}`,
  });
}

function extractFileParts(filepath: string) {
  filepath = filepath.replaceAll('\\', '/');

  if (!filepath.includes('/')) {
    return { filename: filepath, dir: '' };
  }

  if (filepath.endsWith('/')) {
    filepath = filepath.substring(0, filepath.length - 1);
  }

  return {
    filename: filepath.substring(
      filepath.lastIndexOf('/') + 1,

      filepath.length,
    ),

    dir: filepath.substring(0, filepath.lastIndexOf('/')),
  };
}
