import axios from "axios";
import {
    StarWarsFilms,
    StarWarsFilm,
    StarWarsPeople,
    StarWarsPerson,
    StarWarsPlanets,
    StarWarsPlanet,
    StarWarsSpeciesMuliple,
    StarWarsSpeciesSingle,
    StarWarsStarships,
    StarWarsStarship,
    StarWarsVehicles,
    StarWarsVehicle
} from "../types/StarWarsAPI.types";

const baseURL = import.meta.env.VITE_BASE_URL;

const instance = axios.create({
    baseURL: baseURL,
    timeout: 10000,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
});

interface ApiResponse<T> {
    current_page: number;
    data: T[];
    total_pages: number;
    last_page: number;
}

export const getResource = async <T>(endpoint: string, params?: object): Promise<ApiResponse<T>> => {
    const response = await instance.get<ApiResponse<T>>(endpoint, { params });

    return response.data; // Return the full response data
};

export const getResourceById = async <T>(endpoint: string, id: number): Promise<T> => {
    const response = await instance.get<T>(`${endpoint}/${id}`);

    return response.data;
};

// Films
export const getFilms = (search: string, page: number) => {
    const params = { search, page: page.toString() };
    return getResource<StarWarsFilms>('films/', params);
};

export const getFilm = (id: number) => getResourceById<StarWarsFilm>('/films', id);

// People
export const getPeople = (search: string, page: number) => {
    const params = { search, page: page.toString() };
    return getResource<StarWarsPeople>('people/', params);
};

export const getPerson = (id: number) => getResourceById<StarWarsPerson>('/people', id);

// Planets
export const getPlanets = (search: string, page: number) => {
    const params = { search, page: page.toString() };
    return getResource<StarWarsPlanets>('planets/', params);
};

export const getPlanet = (id: number) => getResourceById<StarWarsPlanet>('/planets', id);

// Species
export const getSpecies = (search: string, page: number) => {
    const params = { search, page: page.toString() };
    return getResource<StarWarsSpeciesMuliple>('species/', params);
};

export const getSpeciesSingle = (id: number) => getResourceById<StarWarsSpeciesSingle>('/species', id);

// Starships
export const getStarships = (search: string, page: number) => {
    const params = { search, page: page.toString() };
    return getResource<StarWarsStarships>('starships/', params);
};

export const getStarship = (id: number) => getResourceById<StarWarsStarship>('/starships', id);

// Vehicles
export const getVehicles = (search: string, page: number) => {
    const params = { search, page: page.toString() };
    return getResource<StarWarsVehicles>('vehicles/', params);
};

export const getVehicle = (id: number) => getResourceById<StarWarsVehicle>('/vehicles', id);