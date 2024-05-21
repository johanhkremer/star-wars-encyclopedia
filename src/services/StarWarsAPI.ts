import axios from "axios";
import { StarWarsFilms, StarWarsFilm } from "../types/StarWarsAPI.Films.types";
import { StarWarsPeople, StarWarsPerson } from "../types/StarWarsAPI.People.types";
import { StarWarsPlanets, StarWarsPlanet } from "../types/StarWarsAPI.Planets.types";
import { StarWarsSpeciesMuliple, StarWarsSpeciesSingle } from "../types/StarWarsAPI.Species.types";
import { StarWarsStarships, StarWarsStarship } from "../types/StarWarsAPI.Starships.types";
import { StarWarsVehicles, StarWarsVehicle } from "../types/StarWarsAPI.Vehicles.types";

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
    // other fields...
}

export const getData = async <T>(endpoint: string): Promise<T[]> => {
    const response = await instance.get<ApiResponse<T>>(endpoint);
    return response.data.data; // Return the `data` array from the response
};

// Example specific functions using the generic function
export const getFilms = () => getData<StarWarsFilms>('/films');
export const getPeople = () => getData<StarWarsPeople>('/people');
export const getPlanets = () => getData<StarWarsPlanets>('/planets');
export const getSpecies = () => getData<StarWarsSpeciesMuliple>('/species');
export const getStarships = () => getData<StarWarsStarships>('/starships');
export const getVehicles = () => getData<StarWarsVehicles>('/vehicles');
