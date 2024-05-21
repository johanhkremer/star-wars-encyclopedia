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