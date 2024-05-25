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
}

export const getResource = async <T>(endpoint: string): Promise<T[]> => {
    const response = await instance.get<ApiResponse<T>>(endpoint);
    return response.data.data; // Return the `data` array from the response
};

export const getResourceById = async <T>(endpoint: string, id: number): Promise<T> => {
    const response = await instance.get<T>(`${endpoint}/${id}`);
    return response.data;
};

// Specific functions using the generic function

//Films
export const getFilms = () => getResource<StarWarsFilms>('/films');
export const getFilm = (id: number) => getResourceById<StarWarsFilm>('/films', id);
export const getFilmSearch = async (input: string) => {
    const response = await instance.get<ApiResponse<StarWarsFilms>>(`/films`, {
        params: {
            search: input
        }
    });
    return response.data.data;
};

//People
export const getPeople = () => getResource<StarWarsPeople>('/people');
export const getPerson = (id: number) => getResourceById<StarWarsPerson>('/people', id);
export const getPeopleSearch = async (input: string) => {
    const response = await instance.get<ApiResponse<StarWarsPeople>>(`/people`, {
        params: {
            search: input
        }
    });
    return response.data.data;
};
//Planets
export const getPlanets = () => getResource<StarWarsPlanets>('/planets');
export const getPlanet = (id: number) => getResourceById<StarWarsPlanet>('/planets', id);
export const getPlanetsSearch = async (input: string) => {
    const response = await instance.get<ApiResponse<StarWarsPlanets>>(`/planets`, {
        params: {
            search: input
        }
    });
    return response.data.data;
};
//Species
export const getSpecies = () => getResource<StarWarsSpeciesMuliple>('/species');
export const getSpeciesSingle = (id: number) => getResourceById<StarWarsSpeciesSingle>('/species', id);
export const getSpeciesSearch = async (input: string) => {
    const response = await instance.get<ApiResponse<StarWarsSpeciesMuliple>>(`/species`, {
        params: {
            search: input
        }
    });
    return response.data.data;
};


//Starships
export const getStarships = () => getResource<StarWarsStarships>('/starships');
export const getStarship = (id: number) => getResourceById<StarWarsStarship>('/starships', id);
export const getStarshipsSearch = async (input: string) => {
    const response = await instance.get<ApiResponse<StarWarsStarships>>(`/starships`, {
        params: {
            search: input
        }
    });
    return response.data.data;
};

//Vehicles
export const getVehicles = () => getResource<StarWarsVehicles>('/vehicles');
export const getVehicle = (id: number) => getResourceById<StarWarsVehicle>('/vehicles', id);
export const getVehiclesSearch = async (input: string) => {
    const response = await instance.get<ApiResponse<StarWarsVehicles>>(`/vehicles`, {
        params: {
            search: input
        }
    });
    return response.data.data;
};