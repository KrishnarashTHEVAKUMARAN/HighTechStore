type TypesDeProduit =
"Pc portable" | "Smartphone"
| "Pc bureau" | "Acessoire PC"

export interface Produit {
    id: number;
    article: string;
    caracteristique: string;
    image: string;
    type?: TypesDeProduit,
    prix: number
  }
