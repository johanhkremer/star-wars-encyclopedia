import { NestedTypes } from '../types/Nested.Types'

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
    created: string;
    edited: string;
    characters: {
        id: number;
        name: string;
    }[];
    planets: {
        id: number;
        name: string;
    }[];
    starships: {
        id: number;
        name: string;
    }[];
    vehicles: {
        id: number;
        name: string;
    }[];
    species: {
        id: number;
        name: string;
    }[];
}
