/* Array.prototype.filter - Exercice 3

Ecrire une fonction keepStarks, qui prend en arguments un tableau de chaînes
(plus spécifiquement, des noms de personnages de Game of Thrones).

La fonction doit renvoyer un tableau ne contenant que les membres de la famille Stark.

Il y a plusieurs façons d'écrire cette fonction, et outre filter, tu auras probablement
besoin d'une de ces méthodes de String: endsWith ou split.

Exemple d'entrée:
  [
    'Bran Stark',
    'Cersei Lannister',
    'Sandor Clegane',
    'Arya Stark',
    'Yara Greyjoy',
    'Sansa Stark'
  ]

Sortie attendue:
  ['Bran Stark', 'Arya Stark', 'Sansa Stark']

 */

const keepStarks = (names) => {
  return names.filter(name => name.endsWith('Stark'))
}
console.log(keepStarks(['Bran Stark', 'Cersei Lannister', 'Sandor Clegane', 'Arya Stark', 'Yara Greyjoy', 'Sansa Stark']));

// Ne pas modifier l'export
module.exports = keepStarks;
