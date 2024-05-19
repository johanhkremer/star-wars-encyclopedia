interface StarWarsPeople {
    id: number;
    name: string;
    birth_year: string;
    eye_color: string;
    hair_color: string;
    height: string;
    mass: string;
    skin_color: string;
    created: string;
    edited: string;
    films_count: number;
    species_count: number;
    starships_count: number;
    vehicles_count: number;
    homeworld: {
        id: number;
        name: string;
    };
}

interface StarWarsPerson {
    id: number;
    name: string;
    birth_year: string;
    eye_color: string;
    hair_color: string;
    height: string;
    mass: string;
    skin_color: string;
    created: string;
    edited: string;
    homeworld: {
        id: number;
        name: string;
    };
    films: {
        id: number;
        title: string;
    }[];
    species: any[];
    starships: {
        id: number;
        name: string;
    }[];
    vehicles: {
        id: number;
        name: string;
    }[];
}
