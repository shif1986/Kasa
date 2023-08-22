const path = require('path');

module.exports = {
  entry: './src/index.js', // Chemin de votre point d'entrée
  output: {
    path: path.resolve(__dirname, 'dist'), // Dossier de sortie des fichiers compilés
    filename: 'bundle.js', // Nom du fichier de sortie
  },
};
