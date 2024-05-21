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
