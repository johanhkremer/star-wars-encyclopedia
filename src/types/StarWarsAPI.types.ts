//Interface for nested objects
interface NameType {
    id: number;
    name: string;
}

interface TitleType {
    id: number;
    name: string;
}

type NameOrTitle = NameType | TitleType;

//Films interfaces
export interface StarWarsFilms {
    id: number,
    title: string,
    episode_id: number,
    opening_crawl: string,
    director: string,
    producer: string,
    release_date: String,
    image_url: string,
    created: string,
    edited: string,
    characters_count: number,
    planets_count: number,
    starships_count: number,
    vehicles_count: number,
    species_count: number
}

export interface StarWarsFilm {
    id: number;
    title: string;
    episode_id: number;
    opening_crawl: string;
    director: string;
    producer: string;
    release_date: string;
    image_url: string;
    created: string;
    edited: string;
    characters: {
        id: number;
        name: string
    }[];
    planets: NameOrTitle[];
    starships: NameOrTitle[];
    vehicles: NameOrTitle[];
    species: NameOrTitle[];
}

//People interfaces
export interface StarWarsPeople {
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

export interface StarWarsPerson {
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

//Planets interfaces
export interface StarWarsPlanets {
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

export interface StarWarsPlanet {
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

//Species interfaces
export interface StarWarsSpeciesMuliple {
    id: number;
    name: string;
    classification: string;
    designation: string;
    average_height: string;
    average_lifespan: string;
    eye_colors: string;
    hair_colors: string;
    skin_colors: string;
    language: string;
    created: string;
    edited: string;
    people_count: number;
    films_count: number;
    homeworld: {
        id: number;
        name: string;
    };
}

export interface StarWarsSpeciesSingle {
    id: number;
    name: string;
    classification: string;
    designation: string;
    average_height: string;
    average_lifespan: string;
    eye_colors: string;
    hair_colors: string;
    skin_colors: string;
    language: string;
    created: string;
    edited: string;
    people: {
        id: number;
        name: string;
    }[];
    homeworld: {
        id: number;
        name: string;
    };
    films: {
        id: number;
        title: string;
    }[];
}

//Starships interfaces
export interface StarWarsStarships {
    id: number;
    name: string;
    model: string;
    starship_class: string;
    manufacturer: string;
    cost_in_credits: string;
    length: string;
    crew: string;
    passengers: string;
    max_atmosphering_speed: string;
    hyperdrive_rating: string;
    MGLT: string;
    cargo_capacity: string;
    consumables: string;
    created: string;
    edited: string;
    pilots_count: number;
    films_count: number;
}

export interface StarWarsStarship {
    id: number;
    name: string;
    model: string;
    starship_class: string;
    manufacturer: string;
    cost_in_credits: string;
    length: string;
    crew: string;
    passengers: string;
    max_atmosphering_speed: string;
    hyperdrive_rating: string;
    MGLT: string;
    cargo_capacity: string;
    consumables: string;
    created: string;
    edited: string;
    pilots_count: number;
    films_count: number;
    pilots: {
        id: number;
        name: string;
    }[];
    films: {
        id: number;
        title: string;
    }[];
}

//Vehicles interfaces
export interface StarWarsVehicles {
    id: number;
    name: string;
    model: string;
    vehicle_class: string;
    manufacturer: string;
    length: string;
    cost_in_credits: string;
    crew: string;
    passengers: string;
    max_atmosphering_speed: string;
    cargo_capacity: string;
    consumables: string;
    created: string;
    edited: string;
    pilots_count: number;
    films_count: number;
}

export interface StarWarsVehicle {
    id: number;
    name: string;
    model: string;
    vehicle_class: string;
    manufacturer: string;
    length: string;
    cost_in_credits: string;
    crew: string;
    passengers: string;
    max_atmosphering_speed: string;
    cargo_capacity: string;
    consumables: string;
    created: string;
    edited: string;
    pilots: {
        id: number;
        name: string;
    }[];
    films: {
        id: number;
        title: string;
    }[];
}