interface StarWarsPlanets {
    id: number;
    name: string;
    rotation_period: string;
    orbital_period: string;
    diameter: string;
    climate: string;
    gravity: string;
    terrain: string;
    surface_water: string;
    population: string;
    created: string;
    edited: string;
    residents_count: number;
    films_count: number;
}

interface StarWarsPlanet {
    id: number;
    name: string;
    rotation_period: string;
    orbital_period: string;
    diameter: string;
    climate: string;
    gravity: string;
    terrain: string;
    surface_water: string;
    population: string;
    created: string;
    edited: string;
    residents: {
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
    }[];
    films: {
        id: number;
        title: string;
    }[];
}