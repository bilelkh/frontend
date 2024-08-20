# Test Technique Partie 3
### _Choix entre GraphQL et REST_
#### Justification du Choix de REST


Pour ce projet, j'ai évalué les deux principales approches pour les API : GraphQL et REST. Après une analyse des besoins spécifiques, j'ai choisi d'utiliser REST.

## Raisons du Choix

### 1. Simplicité et Maturité
- **REST** est une technologie bien établie avec une large adoption et de nombreux outils de support.
- Plus simple à implémenter et à maintenir, surtout pour des équipes déjà familières avec les standards HTTP.

### 2. Facilité d'Intégration
- REST est compatible avec de nombreux services et infrastructures existants.
- La gestion des opérations CRUD est intuitive grâce aux verbes HTTP (GET, POST, PUT, DELETE).

### 3. Performance et Scalabilité
- Avec REST, on peut tirer parti du cache HTTP pour améliorer les performances, ce qui est un atout non négligeable.
- Pour mon cas d'utilisation, où les requêtes sont relativement simples, REST fait le travail sans encombrement.

## Conclusion

REST répond parfaitement aux exigences de ce projet en termes de simplicité, performance, et facilité d'intégration. Cela me permet de rester dans un cadre de développement bien maîtrisé tout en assurant une efficacité opérationnelle.
